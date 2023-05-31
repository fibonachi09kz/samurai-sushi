import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import {useRef} from "react";
import CartContextProvider from "./store/context/cart-context";

const App = () => {

	const navigationRef = useRef();
	const routeNameRef = useRef();

	const handleNavigationStateChange = () => {
		const previousRouteName = routeNameRef.current;
		const currentRouteName = navigationRef.current.getCurrentRoute().name;

		if (previousRouteName !== currentRouteName) {
			console.log('Previous Route:', previousRouteName);
			console.log('Current Route:', currentRouteName);
			routeNameRef.current = currentRouteName;
		}
	};

	return (
		<>
			<StatusBar style="dark" />
			<CartContextProvider>
				<NavigationContainer ref={navigationRef} onStateChange={handleNavigationStateChange}>
					<DrawerNavigation />
				</NavigationContainer>
			</CartContextProvider>
		</>

	);
}

export default App;
