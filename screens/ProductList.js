import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {CATEGORIES, PRODUCTS} from "../data/placeholder";
import {CURRENCIES} from "../constants/global";

const ProductList = ({ navigation, route }) => {

	const filteredProducts = PRODUCTS.filter((item) => item.categoryIds === route.params.category.id)
	const currentCategory = route.params.category;

	const pressHandler = (product) => {
		navigation.push("ProductDetail", {
			product: product
		})
	}

	return (
		<View style={styles.main}>
			<Text style={styles.title}>{currentCategory.title}</Text>
			<FlatList
				data={filteredProducts}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.productItem} activeOpacity={0.7} onPress={() => pressHandler(item)}>
						<View style={styles.imageWrapper}>
							<Image
								source={{
									uri: item.imageUrl,
								}}
								style={styles.image}
								resizeMode="cover"
							/>
						</View>

						<View style={styles.infoWrapper}>
							<Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
							<Text style={styles.productDescription} numberOfLines={2}>{item.description}</Text>
							<Text style={styles.productPrice}>{item.price} <Text>{CURRENCIES[0].symbol}</Text></Text>
						</View>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
				numColumns={2}
				columnWrapperStyle={{gap: 20}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
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
		borderColor: "#e0e0e0"
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
	}
})

export default ProductList;