# 리액트란? 개념정리

---

**React**: UI를 만드는 javascript 라이브러리

**SPA**: Single Page Application

하나의 페이지를 사용하는 애플리케이션. 서버로부터 새로운 페이지를 가져오는 것이 아닌, 하나의 페이지에서 동적으로 변경하는 사용자 웹앱.

**CSR**: Client Side Rendering

클라이언트 사이드에서 HTML을 반환한 후에, JS가 동작하면서 데이터만을 주고 받아서 클라이언트에서 렌더링을 진행

**SSG/R**: Static Site Generation/Server Side Rendering(Gatsby, Next.js 사용)

클라이언트에서 필요한 페이지들을 사전에 미리 준비해뒀다가 요청을 받으면 이미 완성된 파일을 단순히 반환하여 브라우저에서 뷰를 보여줌

사용자가 웹페이지에 접근할 때 서버에서 페이지에 대한 요청을 하며 서버에서는 html,view와 같은 리소스들을 어떻게 보여질지 해석하고 렌더링하여 사용자에게 반환

**Frameworks**

UI, HTTP Clients, Routing, State management 등 모든 것을 포함

정해진 틀 안에서 원하는 것을 만들 수 있음

→ Ngular

단점: 프레임워크에서 규정하고 있는, 권장하는 모든 것들을 공부해야 함(오래걸림), 자율성이 떨어짐

ex. 안드로이드, ios 등

**Libraries**

한 가지 좁은 문제를 해결하기 위한 작은 솔루션 단위 ex. react(UI 만들기)

→ Vue

**React(컴포넌트 집합체)**

= Renders **UI** and responds(reacts) to **events** 

= **components**(응집도가 높은 UI 블럭, 다른 컴포넌트들과 연결되어 있지 않음)

컴포넌트 예시

root > navbar / content > logo, button / article

리액트로 UI를 만든다 → 컴포넌트를 만든다

좋은 컴포넌트란, 다른 컴포넌트들과 연결되지 않고 독립적이며 재사용성이 높아야 한다.

**컴포넌트 나누기**

재사용성(Don’t Repeat Yourself) ex. Click, Send, Submit

단일책임(Single Responsibility)

한 컴포넌트 안에서 너무 많은 일을 한다면 재사용하지 않더라도 작은 단위로 분리하기

![KakaoTalk_20240331_120421871.jpg](%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B3%E1%84%85%E1%85%A1%E1%86%AB%20%E1%84%80%E1%85%A2%E1%84%82%E1%85%A7%E1%86%B7%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20e68ee9f85fb84644a275ffb1df2c317d/KakaoTalk_20240331_120421871.jpg)

    데이터를 State(내부 상태) Props(외부로부터 전달 받은 상태) 나타내는 render가 있다.

    상태가 변경될 때마다 re-render 된다.

    실제로 변경된 부분만 화면에 업데이트 된다.

**DOM Tree**

virtual DOM Tree를 만들어 비교를 한 후 DOM Tree를 업데이트

**클래스 컴포넌트 단점**

어려움, this 바인딩 이슈, 로직들을 재사용 하기 어려움

**React Hooks**

: 재사용 가능한 로직들을 연결 

use로 시작함 ex. useState, useEffect, useRef, useMeno… 

많이 사용하는 Hooks

useState: 상태관리 로직

useEffect: 컴포넌트 생애주기 관리 로직

useUser: 서버에서 받아온 사용자(커스텀 훅)

→ Hooks은(함수들은) 값의 재사용이 아니라 **로직의 재사용**을 위한것이다.