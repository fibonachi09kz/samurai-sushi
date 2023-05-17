import { PRODUCTS } from "../data/global";
import { FlatList, Text } from "react-native";


const CatalogScreen = () => {
	return (
		<FlatList
			data={PRODUCTS}
			renderItem={(product) => <Text>{product.item.title}</Text>}
			keyExtractor={(product) => product.id}
		/>
	)
}


export default CatalogScreen;