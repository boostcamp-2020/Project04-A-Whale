# 웨일 브라우저 확장앱과 연동된 지능형 할일관리 서비스 개발

<p align="center">
  <img width="500" alt="logoImage4" src="https://media2.pl/g/750/72257.jpg">
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

## 👦▫👨▫🧒▫👦▫👩Members
- S014 남기범
- S048 전재열
- J130 윤준성
- J174 장규영
- J216 한예지

# jekins 자동 배포

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
