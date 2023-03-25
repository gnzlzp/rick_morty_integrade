import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   // props = {onSearch = {(characterID) => window.alert(characterID)}}

const [id , setId] = useState('')

const handleChange = (event)=> setId(event.target.value)

   return (
      <div className={style.divSearch}>
         <input className={style.input} type='text' onChange={handleChange}/>
         <button className={style.btnSearch} onClick={()=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}


// import React, { Component } from "react";

// class SearchBar extends Component {
// 	constructor(props) {
// 		super(props);
// 	}
// 	render() {
// 		const { onSearch } = this.props;
// 		return (
// 			<>
// 				<input type="text" />
// 				<button
// 					onClick={()=>{onSearch('algo')}}
// 				>
// 					Agregar
// 				</button>
// 			</>
// 		);
// 	}
// }
// export default SearchBar;


