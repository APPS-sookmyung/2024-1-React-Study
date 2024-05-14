# 기본 내용 정리

---

**CSR(클라이언트 사이드 렌더링)**

브라우저 dev → network

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled.png)

- localhost → html 파일
    - 현재 비어 있음
    - `<div id="root"></div>`
- bundle.js →  JavaScript 코드를 하나의 파일로 묶음
- react 시작 → src의 index.js
    
    ```jsx
    const root = ReactDOM.createRoot(document.getElementById('root'));
    ```
    
    - reactDom에 createRoot API를 사용해 root id를 가진 element root를 만듬
    
    ```jsx
    root.render(
        <React.StrictMode> 
        // 개발할때 엄격한 모드에서 개발(배포할때는 자동으로 꺼짐)
        	<App />
        </React.StrictMode>
    )
    ```
    
- 대부분 index.js에서 UI 컴포넌트를 만들지 않고, 시작부분인 `App.js`부터 만듬
    - 코드에서 정해진 순서대로 tag들이 만들어짐

**JSX 문법 정리(기본)**

- 함수 형태로 React Component 만들기
    - 함수 이름은 무조건 `대문자`로 시작
    - 반환하는 것은 컴포넌트가 UI에 어떻게 표기될것인지 명시하는 `JSX 문법`을 사용, 어떻게 UI를 표기해야하는지 return
    - `props`: 외부로부터 상태를 주입받음
    - `state`: 각각의 컴포넌트 상태를 가지고 있음
    - JSX(JavaScript XML)은 HTML과 유사
- return하는 JSX 문법은 하나의 tag만.
    - 여러개의 태그를 넣고 싶으면 하나의 부모 태그 안에 넣어야함
    
    ```jsx
    function App(){
    	return(
        	<div>
                <h1></h1>
                <h2></h2>
            </div>
        );
    }
    ```
    
    ```jsx
    function App(){
    	return(
        	<>
            	<h1></h1>
                <h2></h2>
            </>
        );
    }
    ```
    
    ```jsx
    function App(){
    	return(
        	<Fragment>
            	<h1></h1>
                <h2></h2>
            </Fragment>
        );
    }
    ```
    
- html class=’ ‘ 대신 JSX **className**=' ' 사용
- `import './App.css';`로 css파일 연결
- inline styling
    
    ```jsx
    style={{width:'200px'}}
    ```
    
- 중괄호 사용
    
    ```jsx
    const name = '서연';
    return (
    	<p>name</p>
    );
    ----
    name
    
    const name = '서연';
    return (
    	<p>{name}</p>
    );
    ----
    서연
    ```
    
    JavaScript 명령어는 중괄호 사용(JSX는 JavaScript안에서 만드는 코드)
    

**JSX 문법 정리(심화)**

javascript 코드에서 동작하기 때문에 javascript 로직을 한번에 묶어서 더 강력하게 사용할 수 있음

```jsx
import "./App.css";

function App() {
  const name = "서연";
  const list = ["우유", "딸기", "바나나"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1714997219940-6d9cd56c3609?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature"
      />
    </>
  );
}

export default App;

```

**JSX 유용한 사이트**

기존에 사용하던 html 페이지를 react(JSX)로 변환 해주는 사이트

[https://transform.tools/html-to-jsx](https://transform.tools/html-to-jsx)

**컴포넌트 만드는 꿀팁**

- 구분을 위해서 리액트 컴포넌트는 `.jsx` 를 사용하는게 좋음
    
    ![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%201.png)
    
- 일반 typescript → `.ts` typescript로 만드는 리액트 컴포넌트 → `.tsx`
- 앱에서 사용되는 컴포넌트 만들기
    - src → components → 만들 컴포넌트 넣기
- 함수 명을 수정하면 export도 수정해야 하는데 function 앞에 쓰면 한 번만 수정할 수 있음
    
    ```jsx
    export default function Profile() {
      return <h1>Profile</h1>;
    }
    ```
    
- react function components 자동화
    
    아래 extenstion 설치(를 해도 된다)
    
    ![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%202.png)
    
    rfc + enter
    
    ```jsx
    import React from 'react'
    
    export default function Profile() {
      return (
        <div>
          
        </div>
      )
    }
    ```
    

**vscode에서 리액트 JSX 태그 자동완성 적용하기**

1. ctrl+shift+p
2. open workspace settings (JSON)
3. 아래 코드 입력
    
    ```jsx
    "emmet.syntaxProfiles": {
         "javascript": "jsx" 
     },
     "emmet.includeLanguages": {
        "javascript": "html"
    }
    ```
    

**Profile 첫 컴포넌트 만들기**

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%203.png)

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%204.png)

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%205.png)

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%206.png)

**Props 사용해보기**

![재사용성이 떨어짐 ](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%207.png)

재사용성이 떨어짐 

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%208.png)

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%209.png)

![동일한 컴포넌트 재사용](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2010.png)

동일한 컴포넌트 재사용

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2011.png)

**새로운 개발자 태그 만들기**

```jsx
// Profile.jsx
export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">New</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
```

```jsx
// App.css
.new {
  position: absolute;
  left: 70%;
  top: 10%;
  background-color: aqua;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
}
```

```jsx
// AppProfile.jsx
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true}
      />
```

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2012.png)

`isNew` 가 true이면 new 태그가 보인다 

**아바타 컴포넌트 만들기**

```jsx
// Profile.jsx
import React from "react";
import Avartar from "./Avartar";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avartar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
```

```jsx
// Avartar.jsx
import React from "react";

export default function Avartar({ image, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}
```

```jsx
// App.css
.avartar {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
}
```

```jsx
// AppProfile.jsx
      <Avartar
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        isNew={true}
      />
```

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2013.png)

**Event 처리하기**

```jsx
function AppProfile() {
  return (
    <>
      <button onClick={(event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  }}>버튼</button>
}
```

```jsx
function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
}
```

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2014.png)

브라우저에서 발생하는 event를 React에서 처리할 수 있는 event형태(SyntheticBaseEvent)로 감싸서 

eventListener에게 전달 

[참고 공식 문서](https://legacy.reactjs.org/docs/handling-events.html)

**내부 상태관리 State**

```jsx
// AppCounter.jsx
import React from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";

export default function AppCounter() {
  return (
    <div>
      <Counter />
    </div>
  );
}
```

```jsx
// Counter.jsx
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}

```

SetCount가 호출되면 내부 상태 변경 → 내부 상태가 변경될 때마다 변경된 component 전체 다시 호출 → React는 Virtual Dom요소를 사용하기 때문에 이전 돔요소와 이번 돔요소의 변경된 부분(span)만 업데이트 

**useState 유의할점**

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2015.png)

위와 같은 코드를 입력해도 count + 5가 아닌 + 1이 됨

→ javascript closure와 밀접한 연관 

onClick이 호출되었을 때 전달되는 callback함수가 그 상태를 포착, count = 0이라는 상태를 기억 

callback 값은 이전 값을 전달하기 때문에 아래 코드는 setCount는 5가 됨

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2016.png)

**카운터 상태 끌어 올리기**

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2017.png)

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2018.png)

**useEffect 생애주기**

```jsx
import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 이 안에서 네트워크 통신이 이루어지게 함
    fetch("data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, []); // 빈 두 번째 인자

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

```

**useEffect 제대로 사용하기**

```jsx
import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]); // checked가 변경 될때마다 useEffect가 다시 실행됨

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

```

useEffect은 컴포넌트를 작성할 때 처음으로 네트워크 통신을 받아오거나, 처음으로 무거운 일을 처리해줘야 할 때 유용하게 쓰임 

**고유한 key**

고유한 키 값을 꼭 설정해 주어야 

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2019.png)

![Untitled](%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%20%E1%84%82%E1%85%A2%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%85%E1%85%B5%20d375920c1696441998f3011d75770890/Untitled%2020.png)