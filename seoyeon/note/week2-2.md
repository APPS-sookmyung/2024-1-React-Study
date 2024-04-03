# 개발환경 설정

---

**npm**: package manager

**npx**: executing packages

**yarn(=npm)**

npm 단점 커버(사용하는 라이브러리가 많으면 속도가 현저히 느려짐)

필요한 라이브러리를 병렬적으로 동시에 설치하고 실행하여 상대적으로 빠름, 보안이 더 뛰어남

**공식문서**

[React](https://react.dev/)

[Create React App](https://create-react-app.dev/)

**yarn start**: 개발용 모드로 프로젝트 실행

**yarn build**: 배포 빌드 시 사용

**yarn test**: 테스트 코드 실행

**yarn eject**: 내부적으로 필요한 모든 라이브러리 설치

.yarn: 숨겨진 폴더(.dir), yarn을 실행하는데 필요한 것들이 있음

pnp: 필요한 라이브러리와 버전 정보 등이 들어있음

yarn.lock: 버전 정보 등이 들어있음

public: 정적 리소스가 들어있음

index.html: 유일한 html 파일

img, manifest.json: pwa 관련 파일

robots.txt: 크롤링 할 때 필요한 정보

src: 동적 리소스가 들어있음

```jsx
yarn eject
```

기본적으로 필요한 것들은 다 셋팅이 되어 있지만 eject을 통해 수정할 수 있음

**BABEL**

프로젝트를 빌드할 때 사용자에게 빌드하기 전에 최신 문법을 예전 버전으로 변경해줌

**Webpack**

사용자에게 배포할 수 있도록 포장해주는 역할(bundling)

**ESLint**

코드를 올바르게 작성하고 있는지 체크

**Jest**

유닛 테스트를 작성하고 코드 테스팅을 할 수 있게 해주는 프레임워크

**PostCSS**

**chrome web stroe에서 react developer tools 설치**

다른 사이트의 컴포넌트 확인 가능

**vscode extension에서 auto import 설치**

다른 파일을 import 할 때 자동으로 완성해줌

**그 외의 다른 유용한 설정**

유용한 VS Code 익스텐션

- Material Theme: 현재 사용하고 있는 테마(dark)
- Material Icon Theme: 현재 사용하고 있는 아이콘들
- Auto Import: 자동으로 import 해줌
- Prettier - Code formatter: 코드를 이쁘게 포맷
- CSS Modules: 나중에 PostCSS 쓸때 유용함

기타 HTML & CSS 관련 익스텐션

- IntelliSense for CSS class names in HTML
- HTML to CSS autocompletion
- HTML CSS Support
- CSS Peek
- Auto Rename Tag

**트러블 슈팅**

---

.yarn dir 없음 이슈..^^

yarn을 설치 했는데 .yarn 폴더가 보이지 않음

→ yarn 버전 업데이트

→ 상위 폴더 삭제(package.json, yarn.lock)

→ 다시 yarn install

→ create react-app

yarn start 이슈 22

아직 해결 못함,,