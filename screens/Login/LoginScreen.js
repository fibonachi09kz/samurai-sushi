import {useContext, useState} from "react";
import {
	SafeAreaView,
	ScrollView,
	View,
	TextInput,
	StyleSheet,
	Text, TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import {COLORS} from "../../constants/colors";
import {loginUser} from "../../utils/auth";
import {AuthContext} from "../../store/context/auth-context";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Неверный email").required("Email обязателен к заполнению"),
	password: Yup.string().required("Пароль обязателен к заполнению"),
});

const LoginScreen = ({ navigation }) => {

	const authCtx = useContext(AuthContext)

	const [error, setError] = useState(false);
	const [loader, setLoader] = useState(false);

	const loginHandler = async (values) => {
		let { email, password } = values;
		email = email.trim();
		password = password.trim();

		try {
			setLoader(true)
			setError(false)
			const token = await loginUser('signInWithPassword', email, password)
			setLoader(false)
			authCtx.authenticate(token)
		} catch (error) {
			setError(true)
			setLoader(false)
		}

	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				keyboardShouldPersistTaps="handled"
			>
				<View style={styles.logoContainer}>

				</View>

				<View style={styles.textContainer}>
					<Text style={styles.title}>Добро пожаловать!</Text>
					<Text style={styles.subtitle}>
						Чтобы продолжить, войдите в аккаунт!
					</Text>
				</View>


				{error && <Text style={styles.authError}>Неправильный логин или пароль, попробуйте ещё раз</Text> }

				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					validationSchema={validationSchema}
					onSubmit={loginHandler}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
						<View style={styles.formContainer}>

							<View style={styles.inputContainer}>
								<Text style={styles.inputLabel}>E-mail</Text>
								<TextInput
									style={styles.input}
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.email}
									placeholder="danya.fibonachi@example.com"
								/>
								{errors.email && (
									<Text style={styles.errorText}>{errors.email}</Text>
								)}
							</View>

							<View style={styles.inputContainer}>
								<Text style={styles.inputLabel}>Пароль</Text>
								<TextInput
									secureTextEntry={true}
									style={styles.input}
									onChangeText={handleChange("password")}
									onBlur={handleBlur("password")}
									value={values.password}
									placeholder="Введите пароль"
								/>
								{errors.password && (
									<Text style={styles.errorText}>{errors.password}</Text>
								)}
							</View>

							{loader ?
								<View style={styles.regStatus}>
									<Text style={styles.regStatusText}>Вход ...</Text>
								</View>
								:
								<TouchableOpacity onPress={handleSubmit} style={styles.submitBtn} activeOpacity={0.7}>
									<Text style={styles.submitBtnText}>Войти</Text>
								</TouchableOpacity>
							}
						</View>

					)}
				</Formik>
				<View style={styles.bottomText}>
					<TouchableOpacity onPress={() => navigation.navigate("Registration")}>
						<Text style={styles.relinkText}>Зарегистрироваться</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff"
	},
	scrollView: {
		flexGrow: 1,
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	logoContainer: {
		alignItems: "center",
		marginBottom: 20,
	},
	textContainer: {
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: "#888",
	},
	formContainer: {
		marginBottom: 10,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 2,
	},
	errorText: {
		color: COLORS.mainRed,
		fontSize: 12
	},
	inputContainer: {
		marginBottom: 10
	},
	inputLabel: {
		fontSize: 14,
		marginBottom: 3
	},
	relinkText: {
		fontSize: 16,
		textAlign: "center",
		color: COLORS.mainRed,
		fontWeight: "500"
	},
	submitBtn: {
		padding: 10,
		borderWidth: 1,
		borderColor: COLORS.mainRed,
		backgroundColor: COLORS.mainRed,
		borderRadius: 5,
		marginTop: 10
	},
	submitBtnText: {
		textAlign: "center",
		fontSize: 18,
		color: "#FFFFFF",
		fontWeight: "500"
	},
	regStatus: {
		padding: 10,
		borderWidth: 1,
		borderColor: COLORS.mainRed,
		backgroundColor: COLORS.mainRed,
		borderRadius: 5,
		marginTop: 10
	},
	regStatusText: {
		textAlign: "center",
		fontSize: 18,
		color: "#FFFFFF",
		fontWeight: "500"
	},
	authError: {
		fontSize: 14,
		color: COLORS.mainRed,
		marginBottom: 8
	}
});

export default LoginScreen;