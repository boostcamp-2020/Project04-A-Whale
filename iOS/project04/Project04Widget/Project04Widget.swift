//
//  Project04Widget.swift
//  Project04Widget
//
//  Created by 남기범 on 2020/12/14.
//

import WidgetKit
import SwiftUI

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> UserInfoEntry {
        UserInfoEntry(date: Date(), data: UserData(no: 0, nickname: "이름",
                                                   description: "소개글",
                                                   rank: "랭크",
                                                   achieveRate: 50,
                                                   followerCount: 0,
                                                   followingCount: 0))
    }

    func getSnapshot(in context: Context, completion: @escaping (UserInfoEntry) -> ()) {
        let entry = UserInfoEntry(date: Date(), data: UserData(no: 0, nickname: "이름",
                                                               description: "소개글",
                                                               rank: "랭크",
                                                               achieveRate: 50,
                                                               followerCount: 0,
                                                               followingCount: 0))
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let date = Date()
        let nextUpdate = Calendar.current.date(byAdding: .minute, value: 1, to: date) ?? Date()
        NetworkService.shared.request(from: Endpoint.userInfo.urlString,
                                      method: .GET, completion: { (result) in
                                        switch result {
                                        case .success(let data):
                                            let info = try? JSONDecoder().decode(Response<UserData>.self, from: data)
                                            let entry = UserInfoEntry(date: date, data: info?.data)
                                            completion(Timeline(entries: [entry], policy: .after(nextUpdate)))
                                        case .failure(let error):
                                            let entry = UserInfoEntry(date: date, data: nil)
                                            print(error)
                                            completion(Timeline(entries: [entry], policy: .after(nextUpdate)))
                                        }
                                      })
    }
}

struct UserInfoEntry: TimelineEntry {
    let date: Date
    let data: UserData?
}

struct UserData: Codable, Hashable {
    let no: Int
    let nickname: String
    let description: String
    let rank: String?
    let achieveRate: Int
    let followerCount: Int
    let followingCount: Int
}

struct Project04WidgetEntryView: View {
    var entry: Provider.Entry
    @State var progressAmount = 0.3
    @Environment(\.widgetFamily) var family
    @ViewBuilder

    var body: some View {
        switch family {
        case .systemSmall:
            VStack {
                Text("RANK: \(entry.data?.rank ?? "언랭크")")
                    .font(.system(size: 17))
                    .bold()
                Text("닉네임: \(entry.data?.nickname ?? "로그인x")")
                    .font(.system(size: 12))
                    .bold()
                ProgressCircle(progress: Float(entry.data?.achieveRate ?? 0)/100.0)
                    .frame(width: 80.0, height: 80.0)
            }
        case .systemMedium:
            VStack {
                Text("RANK: \(entry.data?.rank ?? "언랭크")")
                    .font(.title)
                    .bold()
                Text("닉네임: \(entry.data?.nickname ?? "로그인x")")
                    .font(.body)
                    .bold()
                    .padding(2)
                    .opacity(0.7)
                
                HStack {
                    Text("팔로워 \(entry.data?.followerCount ?? 0)명")
                        .font(.system(size: 12))
                    Text("팔로잉 \(entry.data?.followingCount ?? 0)명")
                        .font(.system(size: 12))
                }
                
                HStack {
                    Text("🏆")
                        .multilineTextAlignment(.center)
                        .font(.system(size: 20))
                    
                    ProgressBar(progress: CGFloat(entry.data?.achieveRate ?? 0)/100.0)
                        .frame(width: 250, height: 15, alignment: .center)
                }
            }
        case .systemLarge:
            Text("")
        @unknown default:
            Text("")
        }
    }
}

struct ProgressCircle: View {
    var progress: Float
    
    var body: some View {
        ZStack {
            Circle()
                .stroke(lineWidth: 12.0)
                .opacity(0.3)
                .foregroundColor(Color.init("GraphColor"))
            
            Circle()
                .trim(from: 0.0, to: CGFloat(min(progress, 1.0)))
                .stroke(style: StrokeStyle(lineWidth: 12.0, lineCap: .round, lineJoin: .round))
                .foregroundColor(Color.init("GraphColor"))
                .rotationEffect(Angle(degrees: 270.0))
                .animation(.linear)

            Text(String(format: "달성률\n%.0f%%", min(progress, 1.0)*100.0))
                .font(.system(size: 13))
                .bold()
        }
    }
}

struct ProgressBar: View {
    var progress: CGFloat
    var bgColor = Color.init("GraphColor").opacity(0.3)
    var filledColor = Color.init("GraphColor")
    
    var body: some View {
        GeometryReader { geometry in
            let height = geometry.size.height
            let width = geometry.size.width
            ZStack(alignment: .leading) {
                Rectangle()
                    .foregroundColor(bgColor)
                    .frame(width: width,
                           height: height)
                    .cornerRadius(height / 2.0)
                
                Rectangle()
                    .foregroundColor(filledColor)
                    .frame(width: width * self.progress,
                           height: height)
                    .cornerRadius(height / 2.0)
            }
        }
    }
}

@main
struct Project04Widget: Widget {
    let kind: String = "Project04Widget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            Project04WidgetEntryView(entry: entry)
        }
        .configurationDisplayName("올해는 꼭!")
        .description("사용자 정보를 간략하게 볼 수 있습니다!")
        .supportedFamilies([.systemSmall, .systemMedium])
    }
}

struct Project04Widget_Previews: PreviewProvider {
    static var previews: some View {
        Project04WidgetEntryView(entry: UserInfoEntry(date: Date(), data: nil))
            .previewContext(WidgetPreviewContext(family: .systemMedium))
    }
}
