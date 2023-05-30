import {Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const RecommendedItem = ({ pressHandler, product }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={pressHandler} activeOpacity={0.7}>

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
				<Text style={styles.title} numberOfLines={1}>{product.title}</Text>
				<Text style={styles.description} numberOfLines={2}>{product.description}</Text>
			</View>

		</TouchableOpacity>
	);
};


const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		overflow: "hidden",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#e5e5e5",
		width: 220
	},
	imageWrapper: {
		height: 100,
		width: "100%"
	},
	image: {
		width: "100%",
		height: "100%"
	},
	infoWrapper: {
		paddingVertical: 15,
		paddingHorizontal: 10
	},
	title: {
		fontWeight: "600",
		fontSize: 16,
		marginBottom: 8
	},
	description: {

	}
})

export default RecommendedItem