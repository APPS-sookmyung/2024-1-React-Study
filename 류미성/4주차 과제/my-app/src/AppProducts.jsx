import { useState } from "react";
import "./App.css";
import Products from "./components/Products";

const AppProducts = () => {
	const [showProducts, setShowProducts] = useState(0);

	return (
		<div>
			<div>{showProducts && <Products />}</div>
			<button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
		</div>
	);
};

export default AppProducts;
