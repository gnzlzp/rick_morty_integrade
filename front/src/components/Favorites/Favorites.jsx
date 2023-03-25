import React from "react";
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css"
import { useSelector } from "react-redux";

function Favorites() {

	const favorites = useSelector((state) => state.myFavorites);
	
	return (
		<div className={style.divCards}>
			{favorites.map((chart) => (
				<Card
					key={chart.id}
					id={chart.id}
					name={chart.name}
					species={chart.species}
					gender={chart.gender}
					image={chart.image}
				/>
			))}
		</div>
	);
}

export default Favorites;
