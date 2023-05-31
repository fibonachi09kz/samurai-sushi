import {ScrollView, StyleSheet, Text} from "react-native";
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import RecommendedBlock from "../../components/RecommendedBlock/RecommendedBlock";


const HomeScreen = () => {
	return (
		<ScrollView style={styles.main}>
			<CategoriesBlock />
			<RecommendedBlock />
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#FFFFFF"
	}
})
export default HomeScreen;