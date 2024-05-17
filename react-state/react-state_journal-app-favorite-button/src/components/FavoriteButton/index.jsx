import "./FavoriteButton.css";
import { useState } from "react";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
	// this should be a state variable
	let [isFavorite, setIsFavorite] = useState(false);

	return (
		<button
			className="favorite-button"
			onClick={() => {
        setIsFavorite(!isFavorite)
				console.log("favorite button clicked");
			}}
			aria-label="favorite"
		>
			{isFavorite ? <StarFilled /> : <Star />}
		</button>
	);
}
