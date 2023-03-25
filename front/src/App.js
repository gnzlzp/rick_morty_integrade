import "./App.css";
import Cards from "./components/Cards/Cards";
import { Detail } from "./components/Detail/Detail";
import About from "./components/About/About";
import { Nav } from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
	const [access, setAccess] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		!access && navigate("/");
	}, [access]);

	const username = "";
	const password = "";
	const login = (userData) => {
		if (userData.username === username && userData.password === password) {
			setAccess(true);
			navigate("/home");
		} else {
			alert("credenciales incorrectas");
		}
	};

	const [characters, setCharacters] = useState([]);
	const onSearch = (id) => {
		if (characters.find((char) => char.id === id)) {
			return alert("Personaje repetido");
		}

		// const URL_BASE = "https://be-a-rym.up.railway.app/api";
		// const KEY = "7a644210607c.971278a39c02b9832700";
		// fetch(`${URL_BASE}/character/${id}/?key=${KEY}`)
		fetch(`http://localhost:3002/rickandmorty/onSearch/${id}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name)
					if (characters.find((char) => char.id == data.id)) {
						return alert("Personaje repetido");
					} else {
						setCharacters((oldChars) => [...oldChars, data]);
					}
				else {
					alert("No hay personajes con ese ID");
				}
			});
	};

	const onClose = (id) => {
		setCharacters(characters.filter((char) => char.id !== id));
	};

	const { pathname } = useLocation();
	return (
		<div className="App" style={{ padding: "25px" }}>
			{pathname !== "/" && <Nav onSearch={onSearch} />}
			<hr />
			<Routes>
				<Route exact path="/" element={<Form login={login} />} />
				<Route exact path="/detail/:detailId" element={<Detail />} />
				<Route exact path="/favorites" element={<Favorites />} />
				<Route exact path="/about" element={<About />} />
				<Route
					exact
					path="/home"
					element={
						<Cards
							className="compCards"
							characters={characters}
							onSearch={onSearch}
							onClose={onClose}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;

/**********************CON API ORIGINAL***********************/
// function App() {
// 	const [characters, setCharacters] = useState([]);
// 	const onSearch=(id)=> {
// 	  console.log(characters);
// 	  if(characters.find((character) => character.id === id)) {

// 		return window.alert("Personaje repetido");
// 	  }

// 	  fetch(`https://rickandmortyapi.com/api/character/${id}`)
// 		.then((response) => response.json())
// 		.then((data) => {

// 		  if (data.name) {
// 			if(characters.find((character) => character.id === data.id))
// 			  {
// 			  return window.alert("Personaje repetido");
// 			  }
// 			  else{
// 			setCharacters((characters)=>[...characters, data]);
// 			  }
// 		  } else {
// 			window.alert('No hay personajes con ese ID');
// 		  }
// 		});
// 	}
// 	const onClose = (id) => {
// 		setCharacters(characters.filter((char) => char.id !== id));
// 	};
//---------------------------------------------------------------------//
