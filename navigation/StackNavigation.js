import {createStackNavigator} from "@react-navigation/stack";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import ProductList from "../screens/ProductList";
import {useNavigation} from "@react-navigation/native";
import CartScreen from "../screens/Cart/CartScreen";
import FavoritesScreen from "../screens/Favorite/FavoritesScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegistrationScreen from "../screens/Registration/RegistrationScreen";
import {AuthContext} from "../store/context/auth-context";
import {useContext} from "react";

const Stack = createStackNavigator();

export const StackNavigatorHome = ({ navigation }) => (
	<Stack.Navigator
		initialRouteName="Home"
	>
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				headerTitle: "",
				headerLeft: () => (
					<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
						<Ionicons name="menu" size={28} color="black"/>
					</TouchableOpacity>
				)
			}}
		/>
		<Stack.Screen
			name="ProductDetail"
			component={ProductDetailScreen}
			options={({ navigation }) => ({
				headerTitle: "",
				headerLeft: () => (
					<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
						<Ionicons name="chevron-back" size={28} color="black" />
					</TouchableOpacity>
				)
			})}
		/>
	</Stack.Navigator>
);

export const StackNavigatorCategories = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Categories"
		>
			<Stack.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name="menu" size={28} color="black"/>
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="ProductList"
				component={ProductList}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.navigate("Categories")}>
							<Ionicons name="chevron-back" size={28} color="black" />
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="ProductDetail"
				component={ProductDetailScreen}
				options={({ navigation }) => ({
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.goBack()}>
							<Ionicons name="chevron-back" size={28} color="black" />
						</TouchableOpacity>
					)
				})}
			/>

		</Stack.Navigator>
	);
}


export const StackNavigatorCart = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Cart"
		>
			<Stack.Screen
				name="Cart"
				component={CartScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name="menu" size={28} color="black"/>
						</TouchableOpacity>
					)
				}}
			/>

		</Stack.Navigator>
	);
}

export const StackNavigatorFavorite = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Favorites"
		>
			<Stack.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name="menu" size={28} color="black"/>
						</TouchableOpacity>
					)
				}}
			/>

		</Stack.Navigator>
	);
}

export const StackNavigatorProfile = ({ navigation }) => {

	const authCtx = useContext(AuthContext)

	return (
		<Stack.Navigator
			initialRouteName="Profile"
		>

			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={authCtx.logout}>
							<Ionicons name="exit-outline" size={28} color="black" />
						</TouchableOpacity>
					)
				}}
			/>

		</Stack.Navigator>
	);
}


export const StackNavigatorAuth = ({ navigation }) => {

	return (
		<Stack.Navigator
			initialRouteName="Login"
		>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name="menu" size={28} color="black"/>
						</TouchableOpacity>
					)
				}}
			/>

			<Stack.Screen
				name="Registration"
				component={RegistrationScreen}
				options={{
					headerTitle: "",
					headerLeft: () => (
						<TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
							<Ionicons name="menu" size={28} color="black"/>
						</TouchableOpacity>
					)
				}}
			/>

		</Stack.Navigator>
	);
}




const styles = StyleSheet.create({
	menuBtn: {
		marginHorizontal: 16
	}
})

