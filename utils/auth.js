import axios from "axios";

const apiKey = "AIzaSyBNQks08ed_ImHSh4m62QW4DQYon6OqFIY"

export const createUser = async (email, password) => {
	const response =  await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
		{
			email: email,
			password: password,
			returnSecureToken: true
		}
	)
	return response.data.idToken
}

export const loginUser = async (mode, email, password) => {
	const response = await axios.post(
		`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${apiKey}`,
		{
			email: email,
			password: password,
			returnSecureToken: true
		}
	)
	return response.data.idToken
}
