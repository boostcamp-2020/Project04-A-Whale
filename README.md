<p align="center">
  <img width="500" alt="logoImage4" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6eccea5-8f89-4aed-934d-24743a99aef4/GIF_2020-12-15__10-42-41.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201215T084906Z&X-Amz-Expires=86400&X-Amz-Signature=d88ce7b36f85cda6391b5f9fd7e2975390491fe352c5e2596d501df284e30e96&X-Amz-SignedHeaders=host">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/swift-v5.1-orange?logo=swift" />
  <img src="https://img.shields.io/badge/xcode-v12.1-blue?logo=xcode" />
</p>
<p align="center">
  <img src="https://img.shields.io/badge/react-17.0.1-9cf?logo=react" />
  <img src="https://img.shields.io/badge/node.js-v12.19.0-green?logo=node.js" />
  <img src="https://img.shields.io/badge/javascript-ES6+-yellow?logo=javascript" />
  <img src="https://img.shields.io/badge/mysql-v5.7.32-blue?logo=mysql" />
</p>

## 📋 [API 명세서](https://documenter.getpostman.com/view/8483132/TVmP9cKS)

## 📸 데모 영상
- iOS
  >[<img width="400" src="https://user-images.githubusercontent.com/39231606/102564586-13635280-411f-11eb-8d4b-0facb085bcdd.png"/>](https://www.youtube.com/watch?v=13W6UZBxbm4&t=1s)
  
  > 클릭하시면 youtube로 이동합니다:dash:

## 📄 분야별 소개
> [iOS 데모 및 기술](https://github.com/boostcamp-2020/Project04-A-Whale/blob/master/iOS/README.md)

## 📊 DB Model
![whale](https://user-images.githubusercontent.com/39231606/101657839-b06f1d00-3a87-11eb-8a0b-101c27a0082c.png)

## 👦▫👨▫🧒▫👦▫👩Members
|  [S014\_남기범](https://github.com/NamKiBeom)  |  [S048\_전재열](https://github.com/jayten42)  |  [J130\_윤준성](https://github.com/mistercle)  |  [J174\_장규영](https://github.com/jangky000)  |  [J216\_한예지](https://github.com/yeji9175)  |
| :----------: |  :--------:  |  :---------: |  :---------: | :---------: |
| <img src="https://avatars2.githubusercontent.com/u/31726630?s=460&u=609a36979d0ed89f2e25be15fd3fcd51ba68a623&v=4" width=400px alt="_"/> | <img src="https://avatars1.githubusercontent.com/u/57934461?s=460&v=4" width=400px alt="_"/> | <img src="https://avatars1.githubusercontent.com/u/48170519?s=460&v=4" width=400px alt="_"/> | <img src="https://avatars0.githubusercontent.com/u/46799722?s=460&u=0e4c029dbebe0c3e9a27ac891f20a9789c82feee&v=4" width=400px alt="_"> | <img src="https://avatars2.githubusercontent.com/u/39231606?s=400&u=cf3abd7e53b9ce634fffe6dc8d13ff10935ae183&v=4" width=400px alt="_"> |
|iOS <img src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width=15px>|iOS <img src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" width=15px>|Web <img src="https://y0c.github.io/images/js.png" width=15px>|Web <img src="https://y0c.github.io/images/js.png" width=15px>|Web <img src="https://y0c.github.io/images/js.png" width=15px>|

## 📤 Jekins 자동배포

### Installation

```
cd /
git clone https://github.com/boostcamp-2020/Project04-A-Whale --single-branch -b develop/server
cd Project04-A-Whale
```

### Run

```
# 도커 레포지토리에 로그인(이미지가 private일 때)
sudo docker login
# 이미지 다운로드
sudo docker pull jangky000/Project04-A-Whale
docker run -d -p 3000:3000 jangky000/Project04-A-Whale
>>>>>>> b930d6b953271c30c1a487525a8da3874ad759b8
