import Card from "./components/Card";
import "./App.css";

export default function App() {
	const fruits = [
		{
			id: 1337,
			name: "Banana",
			color: "yellow",
		},
		{
			id: 1338,
			name: "Apple",
			color: "red",
		},
		{
			id: 1339,
			name: "Grapefruit",
			color: "orange",
		},
		{
			id: 1340,
			name: "Lime",
			color: "green",
		},
		{
			id: 1341,
			name: "Kiwi",
			color: "green",
		},
	];

	return (
		<div className="app">
			{fruits.map((fruit) => (
				<li key={fruit.id}>
					<Card color={fruit.color} name={fruit.name} />
					{console.log(Card)}
				</li>
			))}
		</div>
	);
}
