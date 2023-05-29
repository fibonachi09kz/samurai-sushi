import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import introImage from "../assets/intro.png";
import { COLORS } from "../constants/colors";

const IntroScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<ImageBackground source={introImage} resizeMode="cover" style={styles.image}>
				<View style={styles.footer}>
					<Text style={styles.primaryTitle}>Samurai <Text style={styles.secondaryTitle}>Sushi</Text></Text>
					<Text style={styles.description}>Доставка суши менее чем за 45 минут</Text>
					<TouchableOpacity style={styles.footerButton} activeOpacity={0.6} onPress={() => navigation.navigate("Drawer")}>
						<Text style={styles.footerButtonText}>Начать</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: 'center',
	},
	footer: {
		marginTop: "auto",
		paddingTop: 30,
		paddingHorizontal: 40,
		paddingBottom: 60,
		backgroundColor: "#ffffff",
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		alignItems: "center"
	},
	primaryTitle: {
		fontSize: 32,
		fontWeight: "700",
		marginBottom: 10
	},
	secondaryTitle: {
		color: COLORS.mainRed
	},
	description: {
		fontSize: 16,
		marginBottom: 30
	},
	footerButton: {
		borderRadius: 10,
		backgroundColor: COLORS.mainRed,
		paddingHorizontal: 30,
		paddingVertical: 16,
		width: "100%"
	},
	footerButtonText: {
		color: "#ffffff",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "600"
	}
})

export default IntroScreen;