export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const ACCESS = "ACCESS";

export const addFavorite = (character) => {
	return { type: ADD_FAVORITE, payload: character };
};

export const removeFavorite = (id) => {
	return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
	return { type: FILTER, payload: gender };
};
export const orderCards = (orden) => {
	return { type: ORDER, payload: orden };
};

export const changeAccess = (condicion) => {
	return { type: ACCESS, payload: condicion };
};
