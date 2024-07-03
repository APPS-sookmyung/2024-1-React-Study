# week6

---

**성능 개선에 대한 단상** 

react는 prop과 state 중 하나라도 변경된다면 함수형 컴포넌트는 전체가 다시 호출 됨

하위에 다른 컴포넌트를 사용하고 있고 그 컴포넌트에 무언가 prop로 전달할 때 전달하는 값들이 최상위 컴포넌트에서 계속 새롭게 할당되는 값이라면 부모 컴포넌트가 re-rendering될 때 마다 새로운 값이 자식 컴포넌트에 전달되므로 자식 컴포넌트들도 업데이트 됨.

만약 자식 컴포넌트가 또 다른 자식 컴포넌트를 가지고 있다면 컴포넌트 트리가 전부 다시 업데이트  됨.

→ 가상의 돔을 가지고 있기 때문에 실제로 업데이트 되는 요소만 업데이트 됨

```jsx
// AppMentorsButton.jsx 중

      </ul>
      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="삭제하기" onClick={handleDelete} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log("Button", text, "re-rendering 💡");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text}
    </button>
  );
}

```

**성능 개선 해보기**

컴포넌트 안에서 무거운 일을 하는데 매번 하지 않고 처음에만 계산해야 한다면 useEffect 사용하거나 `useMemo`를 사용

useMemo가 호출될 때 딱 한 번만 호출(특정한 dependency를 명시하지 않는 이상 딱 한 번만 수행)

```jsx
const result = useMemo(()=> calculateSomething(), [dependency]);
```

앱 컴포넌트가 변경될 때마다 버튼이 다시 호출되지 않게 하라면 `useCallback`을 사용

```jsx
  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);
```

useMemo와 유사

prop을 전달하게 되면 매번 컴포넌트를 호출할 때 마다 새로운 props라는 오브젝트 객체가 생성된다 그래서 버튼에게 값이 전달될 때 새로운 객체가 만들어지더라도 동일한 값이라면 re-rendering 하지 않게 하기 위해서 `Memo` 사용

```jsx
const Button = memo(({ text, onClick }) => {
    console.log("Button", text, "re-rendering 💡");
    const result = useMemo(() => calculateSomething(), []);
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "20px",
          margin: "0.4rem",
        }}
      >
        {`${text} ${result}`}
      </button>
    );
  })
```

**로딩, 에러 상태 추가**

```jsx
// Product.jsx

import React, { useEffect, useState } from "react";

export default function Products() {
  **const [loding, setLoading] = useState(false);
  const [error, setError] = useState();**
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    **setLoading(true);
    setError(undefined);**
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      **.catch((e) => setError("에러가 발생했음!"))
      .finally(() => setLoading(false));**
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [checked]); // checked가 변경 될때마다 useEffect가 다시 실행됨

  **if (loding) return <p>Loding...</p>;

  if (error) return <p>{error}</p>;**
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

**커스텀 훅 만들기**

일반 컴포넌트와 다른점은 일반 컴포넌트는 react에 전달해줄 ui jsx를 사용하는 반면에 커스텀 hook은 외부 사람들과 공유하고 싶은 데이터를 리턴하면 됨

use hook이 호출되면 처음으로 state를 사용해서 데이터를 초기화, 처음으로 mount될 때 useEffcte 실행, 외부에서 체크가 변경될 때 네트워크 통신이 달라져야 하므로 외부로부터 데이터를 주입 받을 수 있음

```jsx
// Product.jsx

import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loding...</p>;

  if (error) return <p>{error}</p>;
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

```jsx
// use-products.jsx

import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생했음!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
  }, [salesOnly]);

  return [loading, error, products];
}

```

**Hooks은(함수들은) 값의 재사용이 아니라 `로직의 재사용`을 위한것이다.**

*mount: 컴포넌트가 DOM에 처음 삽입되는 것, 컴포넌트가 마운트될 때 초기 렌더링이 이루어지며, 컴포넌트의 useEffect 훅이 처음 한 번 실행됨

**클래스 컴포넌트**

함수형 컴포넌트의 장점

- 함수형 컴포넌트가 나오기 이전에는 클래스로 컴포넌트를 만듦
- 클래스는 멤버 함수로 정의되어 있기 때문에 상태가 변경될 때마다 랜덤 함수만 호출됨

```jsx
// AppClass.jsx

import React from "react";
import Counter from "./basic/components/Counter";

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("컴포넌트가 마운트 되었음!");
  }

  componentWillUnmount() {
    console.log("컴포넌트가 곧 언마운트될 예정임!");
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count > 10 ? "🔥" : "❄️"}
        </div>
        <div className="counters">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

```