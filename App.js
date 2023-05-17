import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import CatalogScreen from "./screens/CatalogScreen";
import IntroScreen from "./screens/IntroScreen";


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Intro"
						component={IntroScreen}
						options={{
							headerShown: false
						}}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							title: "Главная"
						}}
					/>
					<Stack.Screen
						name="CatalogScreen"
						component={CatalogScreen}
						options={{
							title: "Каталог"
						}}
					/>
					{/*<Stack.Screen*/}
					{/*	name="ProductDetailScreen"*/}
					{/*	component={ProductDetailScreen}*/}
					{/*/>*/}
					{/*<Stack.Screen*/}
					{/*	name="AuthScreen"*/}
					{/*	component={AuthScreen}*/}
					{/*	options={{*/}
					{/*		title: "Авторизация"*/}
					{/*	}}*/}
					{/*/>*/}
					{/*<Stack.Screen*/}
					{/*	name="RegScreen"*/}
					{/*	component={RegScreen}*/}
					{/*	options={{*/}
					{/*		title: "Регистрация"*/}
					{/*	}}*/}
					{/*/>*/}
					{/*<Stack.Screen*/}
					{/*	name="BasketScreen"*/}
					{/*	component={BasketScreen}*/}
					{/*	options={{*/}
					{/*		title: "Корзина"*/}
					{/*	}}*/}
					{/*/>*/}
				</Stack.Navigator>
			</NavigationContainer>
		</>

	);
}


