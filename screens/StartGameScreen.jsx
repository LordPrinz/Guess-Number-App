import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/interface/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredValue, setEnteredValue] = useState("");

	const numberInputHandler = (enteredText) => {
		setEnteredValue(enteredText);
	};

	const confirmInputHandler = () => {
		const chosenNumber = +enteredValue;

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number!", "Number must be between 1 and 99", [
				{
					text: "Ok",
					style: "destructive",
					onPress: resetInputHandler,
				},
			]);
			return;
		}

		onPickNumber(chosenNumber);
	};

	const resetInputHandler = () => {
		setEnteredValue("");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.numberInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={numberInputHandler}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		borderRadius: 8,
		marginTop: 100,
		padding: 16,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: {
			height: 2,
			width: 0,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});
