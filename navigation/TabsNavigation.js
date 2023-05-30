import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants/colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Tab = createBottomTabNavigator();
const TabNavigation = () => (
	<Tab.Navigator>
		<Tab.Screen
			name="Dashboard"
			component={DashboardScreen}
			options={{
				title: "Домой",
				tabBarButton: (props) => <TouchableOpacity {...props} />,
				tabBarIcon: ({ focused }) => <Ionicons name="list" size={32} color={focused ? COLORS.mainRed : "black"} />,
				tabBarShowLabel: false,
			}}
		/>
		<Tab.Screen
			name="Favorites"
			component={FavoritesScreen}
			options={{
				title: "Избранное",
				tabBarButton: (props) => <TouchableOpacity {...props} />,
				tabBarIcon: ({ focused }) => <Ionicons name="heart-circle-outline" size={32} color={focused ? COLORS.mainRed : "black"} />,
				tabBarShowLabel: false
			}}
		/>
		<Tab.Screen
			name="Basket"
			component={CartScreen}
			options={{
				title: "Корзина",
				tabBarButton: (props) => <TouchableOpacity {...props} />,
				tabBarIcon: ({ focused }) => <Ionicons name="basket-outline" size={32} color={focused ? COLORS.mainRed : "black"} />,
				tabBarShowLabel: false,
				tabBarBadge: 3
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
			}}
		/>
	</Tab.Navigator>
);

export default TabNavigation;