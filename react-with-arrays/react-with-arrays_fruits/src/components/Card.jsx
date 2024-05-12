import "./Card.css";

export default function Card({ color, name }) {
	return (
		<p style={{ backgroundColor: color }} className="card">
			{name}
		</p>
	);
}
