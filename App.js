import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigation";

const App = () => {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</>

	);
}

export default App;
