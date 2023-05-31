import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {CATEGORIES} from "../data/placeholder";
import {CURRENCIES} from "../constants/global";

const ProductDetailScreen = ({ route }) => {

	const product = route.params.product
	const category = CATEGORIES.filter((category) => category.id === product.categoryIds)

	return (
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

			<View style={styles.actions}>
				<View>

				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	main: {
		padding: 16,
		flex: 1,
		backgroundColor: "#FFFFFF"
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
	}
})

export default ProductDetailScreen;