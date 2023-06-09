import React, { useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	View,
	Button,
	TextInput,
	StyleSheet,
	Text,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import MaskInput from 'react-native-mask-input';

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().required("Password is required"),
	phone: Yup.string().test(
		"phone",
		"Phone number is required",
		(value) => value && value.replace(/[^0-9]/g, "").length === 11
	),
});

const LoginScreen = () => {
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [confirm, setConfirm] = useState(false);

	const handleFormSubmit = (values) => {
		console.log(values);
		// Perform form submission logic here
	};

	const [phone, setPhone] = useState('');

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

				<Formik
					initialValues={{
						email: "",
						password: "",
						phone: "",
					}}
					validationSchema={validationSchema}
					onSubmit={handleFormSubmit}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
						<View style={styles.formContainer}>
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
							<MaskInput
								value={phone}

								onChangeText={(masked, unmasked) => {
									setPhone(masked); // you can use the unmasked value as well

									// assuming you typed "9" all the way:
									console.log(masked); // (99) 99999-9999
									console.log(unmasked); // 99999999999
								}}
								style={styles.input}
								mask={['(', /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
							/>
							{errors.phone && (
								<Text style={styles.errorText}>{errors.phone}</Text>
							)}
							<TextInput
								style={styles.input}
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								value={values.password}
							/>
							{errors.password && (
								<Text style={styles.errorText}>{errors.password}</Text>
							)}
							<Button onPress={handleSubmit} title="Submit" />
						</View>
					)}
				</Formik>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	errorText: {
		color: "red",
		marginBottom: 10,
	},
});

export default LoginScreen;