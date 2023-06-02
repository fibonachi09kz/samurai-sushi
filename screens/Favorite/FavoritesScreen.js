import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProductListed from "../../components/Product/ProductListed";
import {useContext} from "react";
import {FavoritesContext} from "../../store/context/favorite-context";
import {PRODUCTS} from "../../data/placeholder";
import {COLORS} from "../../constants/colors";

const FavoritesScreen = ({ navigation }) => {

	const favoriteCtx = useContext(FavoritesContext)

	const filteredProducts = PRODUCTS.filter((product) =>
		favoriteCtx.ids.includes(product.id)
	);

	const pressHandler = (product) => {
		navigation.push("ProductDetail", {
			product: product
		})
	}

	if (filteredProducts.length === 0) {
		return (
			<View style={styles.favoritesEmpty}>
				<Text style={styles.favoritesEmptyText}>Избранных товаров нет</Text>
				<TouchableOpacity style={styles.favoritesEmptyBtn} onPress={() => navigation.navigate("HomeStack")}>
					<Text style={styles.favoritesEmptyBtnText}>Перейти к покупкам</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<ScrollView style={styles.main}>
			<Text style={styles.title}>Избранное</Text>
			<View style={styles.items}>
				{filteredProducts.map((item) => (
					<ProductListed key={item.id} product={item} />
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 16,
		paddingVertical: 32,
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	items: {
		paddingBottom: 50
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
		marginBottom: 12
	},
	favoritesEmpty: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFFFFF",
		paddingVertical: 16
	},
	favoritesEmptyText: {
		fontSize: 24,
		fontWeight: "500",
		textAlign: "center"
	},
	favoritesEmptyBtn: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: COLORS.mainRed,
		borderRadius: 6,
		marginTop: 20
	},
	favoritesEmptyBtnText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "500"
	},
})

export default FavoritesScreen;
