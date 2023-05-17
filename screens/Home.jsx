import {FlatList, Pressable, Text, View} from "react-native"
import {PRODUCTS} from "../data/global";
import {StatusBar} from "expo-status-bar";


const HomeScreen = ({ navigation }) => {

	const pressHandler = () => {
		navigation.navigate('CatalogScreen')
	}

	return (
		<>
			<StatusBar style="auto" />
			<View>
				<Text>Главный экран</Text>
				<FlatList
					data={PRODUCTS}
					renderItem={(product) => <Pressable onPress={pressHandler}><Text>{product.item.title}</Text></Pressable>}
					keyExtractor={(product) => product.id}
				/>
			</View>
		</>

	)
}


export default HomeScreen;