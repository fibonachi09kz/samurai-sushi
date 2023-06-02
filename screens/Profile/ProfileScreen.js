import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useLayoutEffect} from "react";
import {Ionicons} from "@expo/vector-icons";


const ProfileScreen = ({ navigation }) => {

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<TouchableOpacity>
						<Ionicons name="settings-outline" size={24} color="black" style={styles.settingsBtn} />
					</TouchableOpacity>
				);
			},
		});
	}, [navigation]);

	return (
		<ScrollView style={styles.main}>
			<Text style={styles.title}>Привет, Данила</Text>
			<View>
				<ScrollView
					horizontal
					contentContainerStyle={{gap: 20}}
				>
					<TouchableOpacity>
						<Text>Samurai-коины</Text>
						<Text>1490</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>История заказов</Text>
						<Text>13 заказов</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text>3 адреса</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</ScrollView>
	);
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
	settingsBtn: {
		marginHorizontal: 16
	}
})


export default ProfileScreen;