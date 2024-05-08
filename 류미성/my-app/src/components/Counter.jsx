import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="counter">
			<span className="number">{count}</span>
			<button
				className="button"
				onClick={() => {
					// count++는 const로 지정했으므로, 재할당은 불가하므로 setCount를 사용하기
					// setCount(count + 1);
					// setCount(count + 1);
					// setCount(count + 1);
					// setCount(count + 1);
					// setCount(count + 1); // 1에서 더이상 숫자가 증가하지 않음
					// 콜백함수 형태로 set하는 것이 더 안전함
					setCount((prev) => prev + 1);
					setCount((prev) => prev + 1);
					setCount((prev) => prev + 1);
					setCount((prev) => prev + 1);
					setCount((prev) => prev + 1); // 5단위로 증가
				}}
			>
				Add +
			</button>
		</div>
	);
};

export default Counter;
