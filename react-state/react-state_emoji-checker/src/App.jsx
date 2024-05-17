import { useState } from "react";
import "./App.css";

export default function App() {
	let [code, setCode] = useState("?");

	const validCode = "🐡🐠🐋";

	function handleClick(emoji) {
		setCode(emoji);
	}

	return (
		<div className="container">
			<div className="button-container">
				<button
					type="button"
					onClick={() => {
						handleClick("🐡");
					}}
				>
					<span role="img" aria-label="Pufferfish">
						🐡
					</span>
				</button>
				<button
					type="button"
          onClick={() => {
						handleClick("🐋");
					}}
				>
					<span role="img" aria-label="Whale">
						🐋
					</span>
				</button>
				<button
					type="button"
          onClick={() => {
						handleClick("🐠");
					}}
				>
					<span role="img" aria-label="Clownfish">
						🐠
					</span>
				</button>{" "}
			</div>

			<button
				type="button"
        onClick={() => {
						handleClick("?");
					}}
			>
				Reset
			</button>
			<h2>{code}</h2>

			{code === validCode && <p>{code}</p>}
			{/* {code === validCode && <p>Valid code!</p>} */}
		</div>
	);
}
