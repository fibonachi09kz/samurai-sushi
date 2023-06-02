import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
	const [favoritesIds, setFavoritesIds] = useState([]);

	function addFavorite(id) {
		setFavoritesIds((currentFavIds) => [...currentFavIds, id]);
	}

	function removeFavorite(id) {
		setFavoritesIds((currentFavIds) =>
			currentFavIds.filter((mealId) => mealId !== id)
		);
	}

	const value = {
		ids: favoritesIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContextProvider;