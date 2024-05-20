# 고급 내용들 1

---

**마우스 따라 가기**

- 상태로 객체로 관리하는 연습
    
    [event 문서](https://ko.legacy.reactjs.org/blog/2018/05/23/react-v-16-4.html)
    
    ```jsx
    // AppXY.jsx
    import React, { useState } from "react";
    import "./AppXY.css";
    
    export default function AppXY() {
      // X와 Y 좌표를 state로 설정 
      const [X, setX] = useState(0);
      const [Y, setY] = useState(0);
    
      return (
        <div
          className="container"
          onPointerMove={(e) => { // 마우스 포인터가 움직일 때 이벤트 발생
            console.log(e.clientX, e.clientY); // X와 Y 좌표를 출력
            setX(e.clientX); // X 좌표 업데이트
            setY(e.clientY); // Y 좌표 업데이트
          }}
        >
          <div
            className="pointer"
            style={{ transform: `translate(${X}px, ${Y}px)` }} // pointer를 X와 Y 좌표에 따라 이동
          />
        </div>
      );
    }
    ```
    
- 좌표라는 하나의 객체를 나타내지만 따로 관리함 → 연관 있는 데이터 하나의 객체로 묶기
    
    ```jsx
    // AppXY.jsx
    import React, { useState } from "react";
    import "./AppXY.css";
    
    export default function AppXY() {
      const [position, setPosition] = useState({ x: 0, y: 0 });
      return (
        <div
          className="container"
          onPointerMove={(e) => {
            console.log(e.clientX, e.clientY);
            setPosition({ x: e.clientX, y: e.clientY });
            // 만약 수평으로만 이동이 가능하다면?
            // setPosition((prev) => ({ ...prev, x: e.clientX }));
          }}
        >
          <div
            className="pointer"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          />
        </div>
      );
    }
    ```
    
    ```jsx
    // AppXY.css
    .container {
      width: 100vw;
      height: 100vh;
      background-color: beige;
    }
    
    .pointer {
      position: absolute;
      background-color: crimson;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      left: -15px;
      top: -15px;
    }
    ```
    

**중첩 객체 상태 관리**

```jsx
import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      // 중첩된 객체
      name: "밥",
      title: "시니어개발자",
    },
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`멘토의 이름을 입력하세요:`);
          // 기존 mentor 객체를 유지하면서 이름을 업데이트
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`멘토의 직책을 입력하세요:`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 직책 바꾸기
      </button>
    </div>
  );
}
```

**배열 상태 관리**

react의 state는 불변성을 유지해야 함

만약 변경해야 한다면 새롭게 만들어야 함(오브젝트 값을 변경해도 UI 업데이트가 안됨) 

```jsx
// AppMentors.jsx
import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });

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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          // state 업데이트
          setPerson((person) => ({
            ...person,
            // mentors 배열을 map 함수로 순회하면서 이을 변경
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
              // 새로운 이름으로 업데이트
                return { ...mentor, name: current }; 
              }
              return mentor; // 기존 멘토를 그대로 반환
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
```

**멘토 추가/삭제하기** 

```jsx
// AppMentors.jsx
import React, { useState } from "react";

export default function AppMentor() {
  // 초기 상태를 initialPerson 객체로 설정
  const [person, setPerson] = useState(initialPerson);

  // 멘토의 이름을 업데이트하는 함수
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) { 
          return { ...mentor, name: current }; 
        }
        return mentor; 
      }),
    }));
  };

  // 새로운 멘토를 추가하는 함수
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    // state 업데이트
    setPerson((person) => ({
      ...person,
      // mentors 배열에 새로운 멘토 추가
      mentors: [...person.mentors, { name, title }],
    }));
  };

  // 멘토를 삭제하는 함수
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      // mentors 배열에서 입력된 이름과 일치하지 않는 멘토만을 필터링하여 새로운 배열 생성 
      mentors: person.mentors.filter((m) => m.name !== name),
    }));
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

// 초기 상태를 정의
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

**상태관리 라이브러리에 대해**

- react의 state는 읽기 전용이므로 불변성을 유지해야 함
- 변경이 필요하다면 새로운 객체를 만들어야 함(필요한 것만 업데이트)
- 상태 관리 라이브러리
    - redux, mobx, immer 등
        
        → 굳이 라이브러리를 사용하지 않고 최신 리액트에서 제공하는 훅을 사용하면 됨(useState)
        
        useReducer: 컴포넌트 안에서 재사용 하기
        

**Reducer 사용해보기**

컴포넌트에서 로직을 밖으로 빼고 싶거나 다른 컴포넌트에서 로직을 재사용하고 싶다면 `Reducer`를 사용하자 

```jsx
// person-reducer.js
export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
```

```jsx
// AppMentors.jsx
import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: "added", name, title });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };
  ...
```