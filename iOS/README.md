# iOS

### 데모영상
> [부스트캠프 2020 - project04-A (올해는 꼭)](https://www.youtube.com/watch?v=13W6UZBxbm4)

### 오프라인 기능 예시
    1. 오프라인 상태(좌측)에서 버킷 안에 세부 리스트 작성 
    2. 오프라인 상태(좌측) 에는 추가가 되었지만, 온라인 상태 기기 (우측) 에는 추가가 되지 않음
    3. 좌측 기기를 온라인으로 변경하면, 쌓여있던 트렌젝션을 실행하고 서버에 반영됨.
    4. 온라인 상태 기기(우측) 에서 확인하면 해당 내용이 추가 되어 있음
    
![](https://i.imgur.com/YBsFq3j.gif)

[고화질 링크](https://www.youtube.com/watch?v=FuxiXbhGUSI)

### :link: **Reachability(연결성), Persistence(지속성)**

> 서버에만 있는 데이터를 받아서 처리하는 것을 넘어 로컬에서도 저장되고, 오프라인 상태에서도 데이터 처리가 가능합니다.

> Network 상태를 상시 체크하여, 통신이 불가능하면 transaction을 로컬에 저장했다가 네트워크가 연결되었을 때, 저장된 transaction을 순차적으로 실행하여 데이터를 동기화 합니다.

> repository 패턴을 통해, 로컬과 서버 통신 중 어떤 곳에서 데이터를 받아오든 동일한 데이터가 UI에 갱신되도록 적용했습니다.

![](https://i.imgur.com/Z7oKai7.png)

### **:art: Clean Architecture + MVVM + C 패턴 적용**

> Coordinator 패턴을 이용해 View Controller에 의존성 주입합니다.

> 계층이 분리되어 있고, 구체 타입을 참조하지 않기 때문에 유지보수 면에서 기능 확장이나 수정의 효율성 증가시켰습니다.

> Wiki : [Clean Architecture + MVVM](https://github.com/boostcamp-2020/Project04-A-Whale/wiki/Architecture_%EC%84%A4%EA%B3%84) 

![](https://i.imgur.com/DfUoi3B.png)


### :iphone:**Widget 개발**

> 요구사항에 있었던 WidgetKit을 활용하여 앱의 widget을 개발하였습니다.

> SwiftUI를 필수로 사용해야 했기 때문에, 개발 일정에는 없었지만 마지막 주에 도전과제로 구현하게 되었습니다.

> Wiki : [iOS_WidgetKit](https://github.com/boostcamp-2020/Project04-A-Whale/wiki/iOS_WidgetKit) 

<img src="https://i.imgur.com/vuMFLr4.jpg" width="57.6%">
<img src="https://i.imgur.com/k6C3sa9.jpg" width="30%">
