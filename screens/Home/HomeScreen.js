import {ScrollView, StyleSheet, Text} from "react-native";
import CategoriesBlock from "../../components/CategoriesBlock/CategoriesBlock";
import RecommendedBlock from "../../components/RecommendedBlock/RecommendedBlock";
import PromoSlider from "../../components/PromoSlider/PromoSlider";


const HomeScreen = () => {
	return (
		<ScrollView style={styles.main}>
			{/*<CategoriesBlock />*/}
			<PromoSlider />
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