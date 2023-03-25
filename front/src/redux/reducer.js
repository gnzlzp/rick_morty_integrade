import { ADD_FAVORITE, FILTER ,ORDER, REMOVE_FAVORITE } from "./actions";

const initialState = {
	myFavorites: [],
	// allCharacters: [...state.myFavorites],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(char) => char.id !== action.payload
				),
			};
		case FILTER:
			return {
				...state, 
				allCharacters : state.allCharacters.map(char => char.gender === action.payload)
			};
		case ORDER:
			return {};
		default:
			return { ...state };
	}
};

export default rootReducer;
