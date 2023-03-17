import { ADD_FAVORITE, ORDER, REMOVE_FAVORITE } from "./actions";

const initialState = {
	myFavorites: [],
	allCharacters: [...state.myFavorites, action.payload],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {
				...state,
				myFavorites: [...state.allCharacters, action.payload],
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(char) => char.id !== action.payload
				),
			};
		case FILTER:
			return {};
		case ORDER:
			return {};
		default:
			return { ...state };
	}
};

export default rootReducer;
