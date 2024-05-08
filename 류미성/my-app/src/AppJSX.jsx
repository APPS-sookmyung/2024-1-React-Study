import "./App.css";

function AppJSX() {
	const name = "앨리";
	const list = ["우유", "딸기", "바나나"];

	return (
		<>
			<h1> {`Hello! ${name}`}</h1>
			<h2>Hello!</h2>
			<p>{name}</p>
			<ul>
				{/* Arrow function */}
				{list.map((item) => (
					<li>{item}</li>
				))}
				{/* function */}
				{list.map(function (item) {
					return <li>{item}</li>;
				})}
			</ul>
		</>
	);
}

export default AppJSX;
