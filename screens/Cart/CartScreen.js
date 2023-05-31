import {View, StyleSheet, ScrollView, Text, FlatList, TouchableOpacity, Image, Vibration} from "react-native";
import {CURRENCIES} from "../../constants/global";
import {useContext, useEffect, useState} from "react";
import { CartContext } from "../../store/context/cart-context";


import { Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {COLORS} from "../../constants/colors";


const CartScreen = ({  }) => {

	const cartCtx = useContext(CartContext);

	const [sum, setSum] = useState(0)

	useEffect(() => {
		setSum(() => {
			let tempSum = 0
			cartCtx.products.forEach(({ product, count }) => {
				tempSum += product.price * count
			})
			return tempSum
		})
	}, [cartCtx])

	function removeItem(id) {
		cartCtx.removeProduct(id)
		Vibration.vibrate()
	}

	const renderRightActions = (progress, dragX, productId) => {

		return (
			<TouchableOpacity style={styles.deleteButton} onPress={() => removeItem(productId)}>
				<Animated.Text style={styles.deleteButtonText}>
					Удалить
				</Animated.Text>
			</TouchableOpacity>
		);
	};

	const renderCartItem = ({ item }) => {
		return (
			<Swipeable
				renderRightActions={(progress, dragX) =>
					renderRightActions(progress, dragX, item.product.id)
				}
			>
				<TouchableOpacity key={item.product.id} style={styles.productItem} activeOpacity={1} >
					<View style={styles.imageWrapper}>
						<Image source={{uri: item.product.imageUrl,}} style={styles.image} resizeMode="cover" />
					</View>

					<View style={styles.infoWrapper}>
						<Text style={styles.productTitle} numberOfLines={1}>{item.product.title}</Text>
						<Text style={styles.productDescription} numberOfLines={2}>{item.product.description}</Text>
						<Text style={styles.productPrice}>{item.product.price} {CURRENCIES[0].symbol}</Text>
						<Text style={styles.productCount}>Количество: {item.count}</Text>
					</View>
				</TouchableOpacity>
			</Swipeable>
		);
	};

	return (
		<ScrollView style={styles.main}>
			<Text style={styles.title}>Корзина</Text>
			{cartCtx.products.map(({ product, count }) => (
				<View key={product.id} style={styles.mainCon}>
					{renderCartItem({ item: { product, count } })}
				</View>
			))}
			<View style={styles.cartBottom}>
				<Text style={styles.cartSum}>Общая стоимость: {sum} {CURRENCIES[0].symbol}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mainCon: {
		marginBottom: 20,
	},
	deleteButton: {
		backgroundColor: COLORS.mainRed,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginLeft: 20,
		borderRadius: 6
	},
	deleteButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
		padding: 20,
	},
	main: {
		paddingHorizontal: 16,
		paddingVertical: 32,
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 12
	},
	productItem: {
		flex: 1,
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e0e0e0",
		backgroundColor: "#FFFFFF"
	},
	imageWrapper: {
		height: 120,
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
		fontSize: 16,
		marginBottom: 8
	},
	productDescription: {
		marginBottom: 10
	},
	productPrice: {
		fontSize: 22,
		fontWeight: "600"
	},
	productCount: {
		fontSize: 16
	},
	cartBottom: {
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: "#ffd7d7",
		marginBottom: 70,
		borderRadius: 6
	},
	cartSum: {
		fontSize: 22,
		fontWeight: "600"
	}
})

export default CartScreen;