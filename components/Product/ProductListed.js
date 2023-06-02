import {Image, Text, TouchableOpacity, View, StyleSheet, Vibration} from "react-native";
import {CURRENCIES} from "../../constants/global";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {useContext, useState} from "react";
import {COLORS} from "../../constants/colors";
import {CartContext} from "../../store/context/cart-context";
import {useNavigation} from "@react-navigation/native";
import {FavoritesContext} from "../../store/context/favorite-context";


const ProductListed = ({ product }) => {

	const navigation = useNavigation()

	const cartProductCtx = useContext(CartContext)
	const favoriteCtx = useContext(FavoritesContext)

	const [count, setCount] = useState(1)

	let cartItem = cartProductCtx.products.find((item) => item.product.id === product.id);
	let countInCart = cartItem ? cartItem.count : 0;

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
		if (countInCart) {
			cartProductCtx.removeProduct(product.id)
		} else {
			cartProductCtx.addProduct(product, count)
			Vibration.vibrate()
		}
	}

	const pressHandler = (product) => {
		navigation.navigate('ProductDetail', {
			product: product
		})
	}

	const productIsFavorite = favoriteCtx.ids.includes(product.id);
	const favoriteToggle = (id) => {
		if (productIsFavorite) {
			favoriteCtx.removeFavorite(id);
		} else {
			favoriteCtx.addFavorite(id);
		}
	}


	return (
		<TouchableOpacity key={product.id} style={styles.productItem} activeOpacity={0.7} onPress={() => pressHandler(product)}>
			<View style={styles.imageWrapper}>
				<Image
					source={{
						uri: product.imageUrl,
					}}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>

			<View style={styles.infoWrapper}>
				<View style={styles.titleWrapper}>
					<Text style={styles.productTitle} numberOfLines={1}>{product.title}</Text>
					<TouchableOpacity style={styles.favoriteBtn} onPress={() => favoriteToggle(product.id)}>
						{productIsFavorite
							?
							<Ionicons name="heart-sharp" size={32} color={COLORS.mainRed} />
							:
							<Ionicons name="heart-outline" size={32} color={COLORS.mainRed} />
						}
					</TouchableOpacity>
				</View>

				<Text style={styles.productDescription} numberOfLines={2}>{product.description}</Text>
				<Text style={styles.productPrice}>{product.price} <Text>{CURRENCIES[0].symbol}</Text></Text>

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
					<TouchableOpacity style={[styles.toBasket, {backgroundColor: countInCart ? "#12af00" : COLORS.mainRed}]} onPress={() => addToBasket()}>
						{countInCart ?
							(
								<>
									<Text style={styles.toBasketText}>В корзине {countInCart} шт.</Text>
								</>
							)
							:
							(
								<Text style={styles.toBasketText}>В корзину {count * product.price} {CURRENCIES[0].symbol}</Text>
							)
						}
					</TouchableOpacity>
				</View>

			</View>



		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	productItem: {
		flex: 1,
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e0e0e0",
		marginBottom: 20
	},
	titleWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 8
	},
	favoriteBtn: {
		paddingHorizontal: 5
	},
	imageWrapper: {
		height: 170,
		width: "100%",
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		overflow: "hidden"
	},
	image: {
		width: "100%",
		height: "100%"
	},
	infoWrapper: {
		paddingVertical: 15,
		paddingHorizontal: 10
	},
	productTitle: {
		fontWeight: "600",
		fontSize: 18,

	},
	productDescription: {
		marginBottom: 10
	},
	productPrice: {
		fontSize: 22,
		fontWeight: "600",
		marginBottom: 15
	},
	actions: {
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
		paddingHorizontal: 8,
		paddingVertical: 14
	},
	plus: {
		paddingHorizontal: 8,
		paddingVertical: 14
	},
	count: {
		fontSize: 16,
		paddingVertical: 8,
		paddingHorizontal: 6,
		textAlign: "center",
		width: 50
	},
	toBasket: {
		backgroundColor: COLORS.mainRed,
		flex: 1,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
		paddingVertical: 5
	},
	toBasketText: {
		fontSize: 18,
		color: "#FFFFFF"
	},
	inCart: {
		fontSize: 12,
		color: "#FFFFFF",
		marginTop: 1
	}
})

export default ProductListed;