#5.13 Immer
: 불변성 상태의 트리를 손쉽게 변경할 수 있게 해주는 라이브러리

-   Yarn add immer

[Immer] An immer producer returned a new value _and_ modified its draft. Either return a new value _or_ modify the draft.
: 괄호가 없는 화살표 함수는 return 문으로 작동함.
-> immer의 produce 함수는 void 타입의 함수이므로 return 기능을 실행하여 에러가 나는 것임.
-> 중괄호로 감싸서 사용하기

#5.14 Form
Form에서 항상 refresh 되기를 원하지 않는다면 e.preventDefault(); 추가하기

form에서 입력은 react 내부의 state 변화가 없어도 UI상에서 변화된 게 바로 보여짐. = uncontrolled component
->

#5.15 컴포넌트 재사용 (넵바, 카드)

#5.17 Context(컨셉 정리, 다크모드)

-   두 컴포넌트의 상태값을 공유해야 한다면?
    -   state를 가장 근접한 부모 컴포넌트로 올린 후 props으로 전달해서 사용
    -   그런데 계속 아래로 전달해야 한다면? = prop Drilling
        -> Context API를 사용할 수 있음. (언어, 테마(다크모드 등), 로그인 상태 등은 어플리케이션 전반적으로 필요함.)
    -   빈번히 업데이트 되는 상태는 context API를 사용하지 않는 걸 권장(전부 리랜더링 되기 때문)
        -> yellow Context API 사용 권장
        : 바뀐 컴포넌트 지점에서부터 아래로만 흐르도록!(전체 X)
        = 우산처럼 필요한 곳에만 씌우면 됨.

createContext : 데이터를 담고 있는 곳
provider: 우산을 만듦
