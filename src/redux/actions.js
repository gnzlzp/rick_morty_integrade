export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER"
export const ORDER = "ORDER"

export const addFavorite = (personaje) => {
	return { type: ADD_FAVORITE, payload: personaje };
};

export const removeFavorite = (id) => {
	return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
	return { type: FILTER, payload:gender}
};
export const orderCards = (id) => {
	return { type: ORDER, payload:id}
}