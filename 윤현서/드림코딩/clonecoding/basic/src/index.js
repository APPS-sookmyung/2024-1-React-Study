import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppMentorsImmer from "./deep dive/AppMentorsImmer";
import AppForm from "./deep dive/AppForm";
import AppWrap from "./deep dive/AppWrap";
import AppCard from "./deep dive/AppCard";
import AppTheme from "./deep dive/AppTheme";
import AppMentorsButton from "./deep dive/AppMentorsButton";
import AppProducts from "./basic/AppProducts";
import Products from "./basic/components/Products";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Products />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
