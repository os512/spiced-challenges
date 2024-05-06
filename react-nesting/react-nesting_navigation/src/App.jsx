import "./App.css";
import Header from "../src/components/Header.jsx";
import Navigation from "../src/components/Navigation.jsx";
import Link from "../src/components/Link.jsx";
import Logo from "../src/components/Logo.jsx";
import Avatar from "../src/components/Avatar.jsx";

import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";

export default function App() {
	return (
		<>
			<Header>
				<Link href="#">
					<Logo src={logo} alt="logo">
						{" "}
					</Logo>
				</Link>
				<Navigation>
					<Link href="#home">Home</Link>
					<Link href="#about">About</Link>
					<Link href="#impressum">Impressum</Link>
				</Navigation>
				<button
					type="button"
					onClick={() => console.log("I could toggle a profile!")}
					aria-label="toggle profile"
				>
					<Avatar src={avatar} alt="avatar"></Avatar>
				</button>
			</Header>
			<main>content goes here…</main>
		</>
	);
}
