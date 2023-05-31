import {createStackNavigator} from "@react-navigation/stack";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import ProductList from "../screens/ProductList";
import {useNavigation} from "@react-navigation/native";
import CartScreen from "../screens/Cart/CartScreen";

const Stack = createStackNavigator();
export const StackNavigatorHome = ({ navigation }) => (
	<Stack.Navigator
		initialRouteName="Home"
	>
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				headerTitle: "Home Screen",
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
				headerTitle: "Product Detail",
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
					headerTitle: "Categories Screen",
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
					headerTitle: "Product List",
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
					headerTitle: "Product Detail",
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
					headerTitle: "Cart",
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

