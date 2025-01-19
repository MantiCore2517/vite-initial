import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

// export const App = () => {
// 	//#region императивный стиль
// 	const [count, setCount] = useState(0);

// 	const getYear = () => {
// 		return new Date(Date.now()).getFullYear();
// 	};
// 	//#endregion

// 	return (
// 		//#region декларативный стиль
// 		<>
// 			<div>
// 				<a href="https://vite.dev" target="_blank">
// 					<img src={viteLogo} className="logo" alt="Vite logo" />
// 				</a>
// 				<a href="https://react.dev" target="_blank">
// 					<img src={reactLogo} className="logo react" alt="React logo" />
// 				</a>
// 			</div>
// 			<h1>Vite + React</h1>
// 			<div className="card">
// 				<button onClick={() => setCount((count) => count + 1)}>
// 					count is {count}
// 				</button>
// 				<p>
// 					Edit <code>src/App.jsx</code> and save to test HMR
// 				</p>
// 			</div>
// 			<p className="read-the-docs">
// 				Click on the Vite and React logos to learn more
// 			</p>
// 			<h2>{getYear()}</h2>
// 		</>
// 		//#endregion
// 	);
// };
export const App = () => {
	//#region императивный стиль
	const [count, setCount] = useState(0);
	const getYear = () => {
		return new Date(Date.now()).getFullYear();
	};
	//#endregion

	return (
		/*#__PURE__*/
		//#region декларативный стиль
		React.createElement(
			React.Fragment,
			null,
			/*#__PURE__*/ React.createElement(
				"div",
				null,
				/*#__PURE__*/ React.createElement(
					"a",
					{
						href: "https://vite.dev",
						target: "_blank",
					},
					/*#__PURE__*/ React.createElement("img", {
						src: viteLogo,
						className: "logo",
						alt: "Vite logo",
					}),
				),
				/*#__PURE__*/ React.createElement(
					"a",
					{
						href: "https://react.dev",
						target: "_blank",
					},
					/*#__PURE__*/ React.createElement("img", {
						src: reactLogo,
						className: "logo react",
						alt: "React logo",
					}),
				),
			),
			/*#__PURE__*/ React.createElement("h1", null, "Vite + React"),
			/*#__PURE__*/ React.createElement(
				"div",
				{
					className: "card",
				},
				/*#__PURE__*/ React.createElement(
					"button",
					{
						onClick: () => setCount((count) => count + 1),
					},
					"count is ",
					count,
				),
				/*#__PURE__*/ React.createElement(
					"p",
					null,
					"Edit ",
					/*#__PURE__*/ React.createElement("code", null, "src/App.jsx"),
					" and save to test HMR",
				),
			),
			/*#__PURE__*/ React.createElement(
				"p",
				{
					className: "read-the-docs",
				},
				"Click on the Vite and React logos to learn more",
			),
			/*#__PURE__*/ React.createElement("h2", null, getYear()),
		)
		//#endregion
	);
};
