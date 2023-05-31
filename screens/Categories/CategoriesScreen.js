import {Text, FlatList, TouchableOpacity, StyleSheet, View} from "react-native";
import {CATEGORIES} from "../../data/placeholder";


const CategoriesScreen = ({ navigation }) => {

	const pressHandler = (category) => {
		navigation.navigate("ProductList", {
			category: category
		})
	}

	return (
		<View style={styles.main}>
			<Text style={styles.title}>Категории</Text>
			<FlatList
				data={CATEGORIES}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.categoryItem}
						activeOpacity={0.7}
						onPress={() => pressHandler(item)
					}>
						<View style={styles.categoryInner}>
							<View>{item.icon()}</View>
							<Text style={styles.categoryTitle}>{item.title}</Text>
						</View>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
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
	categoryItem: {
		padding: 10,
		borderRadius: 6,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#e0e0e0",
		marginBottom: 10
	},
	categoryInner: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16
	},
	categoryTitle: {
		fontWeight: "600",
		fontSize: 18
	}
})

export default CategoriesScreen;