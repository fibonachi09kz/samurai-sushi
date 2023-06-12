import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import CartContextProvider from "./store/context/cart-context";
import FavoriteContext from "./store/context/favorite-context";
import FavoritesContextProvider from "./store/context/favorite-context";
import AuthContextProvider, {AuthContext} from "./store/context/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import {View} from "react-native";


const Root = () => {
	const [appIsReady, setAppIsReady] = useState(false);

	const authCtx = useContext(AuthContext)

	useEffect(() => {
		async function fetchToken() {
			const storedToken = await AsyncStorage.getItem("token")

			if (storedToken) {
				authCtx.authenticate(storedToken)
			}

			setAppIsReady(true);
		}
		fetchToken()
	}, [])


	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (

		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			<FavoritesContextProvider>

				<CartContextProvider>

					<NavigationContainer>

						<DrawerNavigation />

					</NavigationContainer>

				</CartContextProvider>

			</FavoritesContextProvider>
		</View>

	)
}

const App = () => {

	return (
		<>
			<StatusBar style="dark" />

			<AuthContextProvider>

				<Root />

			</AuthContextProvider>

		</>

	);
}

export default App;
