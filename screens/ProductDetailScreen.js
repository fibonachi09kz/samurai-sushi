import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Pressable, Vibration} from "react-native";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {CATEGORIES} from "../data/placeholder";
import {CURRENCIES} from "../constants/global";
import {useContext, useState} from "react";
import {COLORS} from "../constants/colors";

import { CartContext } from "../store/context/cart-context";

const ProductDetailScreen = ({ route }) => {

	const cartProductCtx = useContext(CartContext)

	const product = route.params.product
	const category = CATEGORIES.filter((category) => category.id === product.categoryIds)

	const isProductInCart = cartProductCtx.products.some(item => item.product.id === product.id);

	const [count, setCount] = useState(1)

	const inc = () => {
		if (count !== 99) {
			setCount(count + 1)
		}
	}
	const dec = () => {
		if (count !== 1 && count > 1) {
			setCount(count - 1)
		}
	}

	const addToBasket = () => {
		cartProductCtx.addProduct(product, count)
		Vibration.vibrate()
	}

	return (
		<>
			<ScrollView style={styles.main}>
				<View style={styles.imageWrapper}>
					<Image style={styles.image} source={{uri: product.imageUrl}} resizeMode="cover" />
				</View>
				<View style={styles.body}>
					<Text style={styles.title}>{product.title}</Text>
					<View style={styles.priceWrapper}>
						<Text style={styles.price}>{product.price} {CURRENCIES[0].symbol}</Text>
					</View>
					<Text style={styles.description}>{product.description}</Text>
					<Text style={styles.category}>Категория: {category.title}</Text>
				</View>


			</ScrollView>
			<View style={styles.actions}>
				<View style={styles.actionsWrapper}>
					<TouchableOpacity style={styles.minus} onPress={() => dec()}>
						<AntDesign name="minus" size={24} color="#d7000f" />
					</TouchableOpacity>
					<Text style={styles.count}>{count}</Text>
					<TouchableOpacity style={styles.plus} onPress={() => inc()}>
						<AntDesign name="plus" size={24} color="#d7000f" />
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.toBasket} onPress={() => addToBasket()}>
					<Text style={styles.toBasketText}>В корзину {count * product.price}</Text>
				</TouchableOpacity>
			</View>
		</>

	);
};

const styles = StyleSheet.create({
	main: {
		padding: 16,
		flex: 1,
		backgroundColor: "#FFFFFF",
		position: "relative"
	},
	imageWrapper: {
		width: "100%",
		height: 150,
		overflow: "hidden",
		borderRadius: 10,
		marginBottom: 20
	},
	image: {
		width: "100%",
		height: "100%"
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
		marginBottom: 10
	},
	priceWrapper: {
		paddingBottom: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#efefef",
		borderStyle: "solid",
		marginBottom: 20
	},
	price: {
		fontSize: 24,
		fontWeight: "600"
	},
	actions: {
		position: "absolute",
		bottom: 0,
		left: 0,
		padding: 20,
		backgroundColor: "#f6f6f6",
		flexDirection: "row",
		gap: 20,
		alignItems: "stretch"
	},
	actionsWrapper: {
		backgroundColor: "rgba(255,0,0,0.14)",
		borderRadius: 6,
		flexDirection: "row",
		alignItems: "center"
	},
	minus: {
		padding: 14
	},
	plus: {
		padding: 14
	},
	count: {
		fontSize: 20,
		paddingVertical: 14,
		paddingHorizontal: 10,
		textAlign: "center",
		width: 50
	},
	toBasket: {
		backgroundColor: COLORS.mainRed,
		flex: 1,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10
	},
	toBasketText: {
		fontSize: 18,
		color: "#FFFFFF"
	}
})

export default ProductDetailScreen;