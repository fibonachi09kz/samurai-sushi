import {createStackNavigator} from "@react-navigation/stack";
import {Text} from "react-native";
import TabNavigation from "./TabsNavigation";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Tabs"
			component={TabNavigation}
			options={{
				headerTitle: () => <Text>TITLE</Text>,
			}}
		/>
		<Stack.Screen
			name="ProductDetail"
			component={ProductDetailScreen}
			options={{
				headerTitle: () => <Text>TITLE</Text>,
				
			}}
		/>
	</Stack.Navigator>
);

export default StackNavigator;