import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import IntroScreen from "./screens/IntroScreen";
import { COLORS } from "./constants/colors";
import IconButton from "./components/IconButton";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.mainRedSecond },
				headerTintColor: 'white',
				headerShown: false,
				sceneContainerStyle: { backgroundColor: '#ffffff' },
				drawerContentStyle: { backgroundColor: COLORS.drawerBackground },
				drawerInactiveTintColor: COLORS.mainText,
				drawerActiveTintColor: COLORS.mainText,
				drawerActiveBackgroundColor: COLORS.drawerActiveBackground,
				headerTitle: '',
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
					headerShown: true,
					headerRight: () => <Ionicons name="basket" size={24} color="white" style={{paddingHorizontal: 16}} />
				}}
			/>
		</Drawer.Navigator>
	);
}

const App = () => {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.mainRed },
						headerTintColor: 'white',
						contentStyle: { backgroundColor: '#ffffff' },
					}}
				>

					<Stack.Screen
						name="Intro"
						component={IntroScreen}
						options={{
							headerShown: false
						}}
					/>

					<Stack.Screen
						name="Drawer"
						component={DrawerNavigator}
						options={{
							headerShown: false,
						}}
					/>

				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});

export default App
