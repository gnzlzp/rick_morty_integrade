import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from './Nav.module.css'

export const Nav = () => {
	return (
		<div className={style.divNav}>
			<NavLink className={style.link} to="/home">Home</NavLink>
			<br />
			<NavLink className={style.link} to="/about">About</NavLink>
			<br />
			<NavLink className={style.link} to="/favorites">Favorites</NavLink>
			<br />
			<NavLink  className={style.link} to="/">Logout</NavLink>
		</div>
	);
};
