# 고급 내용들 2

---

**Immer 사용해 보기**

Immer: 불변성 상태의 트리를 아주 손쉽게 변경할 수 있게 해주는 라이브러리([공식 사이트](https://immerjs.github.io/immer/))

→ 가변성의 오브젝트를 다루는 것처럼 쉽게 업데이트 수정 변경 가능

→ 내부적으로 별도의 객체를 만들어서 수정하면 새로운 객체를 만들어 필요한 것만 업데이트 함  

![설치 방법](%E1%84%80%E1%85%A9%E1%84%80%E1%85%B3%E1%86%B8%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%83%E1%85%B3%E1%86%AF%202%20e0fe47ec4e604380b3468c152ae05f3c/Untitled.png)

설치 방법

```jsx
// AppMentorsImmer.jsx

import React, { useReducer, useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    // updatePerson((person) => person.mentors.push({ name, title }));
    updatePerson((person) => {
      person.mentors = [...person.mentors, { name, title }];
    });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
```

중첩된 복잡한 객체가 있다면 Immer를 사용해서 직관적으로 만들 수 있다. 

**Form을 만드는 법**

모든 UI의 업데이트는 상태변경에 따름 

리액트 내부 state가 변경되지 않아도 UI에서 입력된게 보임

→ `uncontrolled component`

리액트 component 상태가 입력 폼에서 보이는 것과 똑같이 매칭되도록 타이밍 맞게 맞춰줘야 함 

```jsx
// AppForm.jsx

import React, { useState } from "react";

export default function AppForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // 자동 refresh 방
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

```

정리

form에 있는 input 데이터는 사용자가 바로 수정하고 눈으로 확인 가능 → `uncontrolled component`

이는 리액트 원칙과 어긋남(항상 리액트 UI 업데이트는 리액트 state로부터 발생되어야 함)

form을 사용할 때는 항상 state를 이용해서 value는 그 state의 값을 출력하고 onChange가 발생할 때마다 state를 업데이트해야 함

state는 개별적으로 관리해도 되지만 연관된 데이터라면 객체로 관리하면 좋음(immer, reducer)

**컴포넌트의 재사용(Navbar)**

재사용성이 떨어짐

```jsx
// AppWrap.jsx

import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  return (
    <header style={{ backgroundColor: "yellow" }}>
      <Avatar
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="Bob"
        size={200}
      />
    </header>
  );

  function Avatar({ image, name, size }) {
    return (
      <div>
        <img
          src={image}
          alt={`${name}'`}
          width={size}
          height={size}
          style={{ borderRadius: "50%" }}
        />
      </div>
    );
  }
}

```

수정 코드

```jsx
// AppWrap.jsx

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          name="Bob"
          size={200}
        />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}
```

위와 같이 하면 Navbar를 원하는 곳에서 원하는 컨텐츠를 넣어 다양하게 재사용 할 수 있음

**컴포넌트의 재사용(card)**

```jsx
// AppCard.jsx

import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>

      <Card>
        <article></article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

```

**Context란?**

두 개의 컴포넌트에서 상태를 공유해야 한다면 각각 개별적인 컴포넌트는 useState를 사용할 수 있지만 useState는 해당 컴포넌트 내에서 값이 재사용 되지, 다수의 컴포넌트가 공통적으로 사용할 수 없음

→ state를 가장 근접한 부모 컴포넌트로 올리고 다른 자식 컴포넌트에게 props로 전달

but, 공통 부모 컴포넌트가 두 자식 컴포넌트에서 멀다면 prop drilling 현상이 발생

이것을 해결하기 위한 것이 `Context API` 

모든 컴포넌트들이 필요하다면 어플리케이션 전반적으로 필요한 경우 Context API를 사용할 수 있음(ex. 언어, 테마(다크모드), 로그인 등)

빈번히 업데이트 되는 상태는 사용하지 않거나 다른 기술을 사용

→ `Umbrella technique`

우리가 원하는 컴포넌트 중간에서부터 사용할 수 있음, 여러 개도 가능

Umbrella 안에서 사용하는 Context API가 수정이 되면, Umbrella안에 있는 자식 컴포넌트들과 자기 자신만 업데이트

**다크모드 Context 만들기** 

```jsx
// AppTheme.jsx

import React, { useContext } from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function AppTheme() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
```

```jsx
// AppTheme.css

body {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  display: flex;
  justify-content: center;
  background-color: #00003a;
  color: white;
}

.main {
  height: 100%;
  flex: 1 1 0%;
}

.footer {
  display: flex;
  justify-content: center;
  background-color: #00003a;
  color: white;
}

```

src > context > DarkModeContext.jsx

```jsx
// DarkModeContext.jsx

import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

```