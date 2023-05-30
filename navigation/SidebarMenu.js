import {FlatList, TouchableOpacity, StyleSheet, Text, SafeAreaView, View} from "react-native";
import {CATEGORIES} from "../data/placeholder";

const SidebarMenu = ({ navigation }) => {

	const navigateToCategory = (category) => {
		navigation.navigate('Dashboard', { category });
	};

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<FlatList
					data={CATEGORIES}
					renderItem={(item) => (
						<TouchableOpacity style={styles.menuItem} onPress={() => navigateToCategory('Category 1')}>
							<Text style={styles.menuItemText}>{item.item.title}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</SafeAreaView>
	);
};


const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 20
	},
	menuItem: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		marginBottom: 12,
		borderRadius: 6,
		backgroundColor: "#eeeeee"
	},
	menuItemText: {
		fontSize: 16,
		fontWeight: "500"
	}
})

export default SidebarMenu;