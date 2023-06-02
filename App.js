import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import {useRef} from "react";
import CartContextProvider from "./store/context/cart-context";
import FavoriteContext from "./store/context/favorite-context";
import FavoritesContextProvider from "./store/context/favorite-context";

const App = () => {

	return (
		<>
			<StatusBar style="dark" />
			<FavoritesContextProvider>
				<CartContextProvider>
					<NavigationContainer>
						<DrawerNavigation />
					</NavigationContainer>
				</CartContextProvider>
			</FavoritesContextProvider>
		</>

	);
}

export default App;
