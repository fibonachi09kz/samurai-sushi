import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants/colors";
import FavoritesScreen from "../screens/Favorite/FavoritesScreen";
import CartScreen from "../screens/Cart/CartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import {StackNavigatorCart, StackNavigatorCategories, StackNavigatorHome} from "./StackNavigation";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import {useContext} from "react";

import { CartContext } from "../store/context/cart-context";

const Tab = createBottomTabNavigator();
const TabsNavigation = () => {

	const cartCtx = useContext(CartContext)

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="HomeStack"
				component={StackNavigatorHome}
				options={{
					title: "Главная",
						tabBarButton: (props) => <TouchableOpacity {...props} />,
						tabBarIcon: ({ focused }) => <Ionicons name="home-outline" size={26} color={focused ? COLORS.mainRed : "black"} />,
						tabBarShowLabel: false,
						headerShown: false
				}}
			/>
			<Tab.Screen
				name="CategoriesStack"
				component={StackNavigatorCategories}
				options={{
					title: "Категории",
					tabBarButton: (props) => <TouchableOpacity {...props} />,
					tabBarIcon: ({ focused }) => <Ionicons name="list" size={32} color={focused ? COLORS.mainRed : "black"} />,
					tabBarShowLabel: false,
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					title: "Избранное",
					tabBarButton: (props) => <TouchableOpacity {...props} />,
					tabBarIcon: ({ focused }) => <Ionicons name="heart-circle-outline" size={32} color={focused ? COLORS.mainRed : "black"} />,
					tabBarShowLabel: false,
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="CartStack"
				component={StackNavigatorCart}
				options={{
					title: "Корзина",
					tabBarButton: (props) => <TouchableOpacity {...props} />,
					tabBarIcon: ({ focused }) => <Ionicons name="basket-outline" size={32} color={focused ? COLORS.mainRed : "black"} />,
					tabBarShowLabel: false,
					tabBarBadge: cartCtx.products.length,
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					title: "Профиль",
					tabBarButton: (props) => <TouchableOpacity {...props} />,
					tabBarIcon: ({ focused }) => <Ionicons name="person-circle-outline" size={32} color={focused ? COLORS.mainRed : "black"} />,
					tabBarShowLabel: false,
					headerShown: false
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabsNavigation;