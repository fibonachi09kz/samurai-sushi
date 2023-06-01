import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from "react-native";
import {CATEGORIES, PRODUCTS} from "../data/placeholder";
import {CURRENCIES} from "../constants/global";
import {AntDesign} from "@expo/vector-icons";
import {COLORS} from "../constants/colors";
import ProductListed from "../components/Product/ProductListed";

const ProductList = ({ navigation, route }) => {

	const filteredProducts = PRODUCTS.filter((item) => item.categoryIds === route.params.category.id)
	const currentCategory = route.params.category;

	const pressHandler = (product) => {
		navigation.push("ProductDetail", {
			product: product
		})
	}

	return (
		<ScrollView style={styles.main}>
			<Text style={styles.title}>{currentCategory.title}</Text>
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
	}
})

export default ProductList;