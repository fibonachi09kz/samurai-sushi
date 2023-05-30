import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";

const ProductDetailScreen = ({ route }) => {

	const product = route.params.product

	return (
		<ScrollView style={styles.main}>
			<Text>{product.title}</Text>
		</ScrollView>
	);
};

ProductDetailScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text>Назад</Text>
			</TouchableOpacity>
		),
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#FFFFFF"
	}
})

export default ProductDetailScreen;