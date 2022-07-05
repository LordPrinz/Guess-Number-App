import { useState } from "react";
import {
	TextInput,
	View,
	StyleSheet,
	Alert,
	useWindowDimensions,
	KeyboardAvoidingView,
} from "react-native";
import Card from "../components/interface/Card";
import InstructionText from "../components/interface/InstructionText";
import PrimaryButton from "../components/interface/PrimaryButton";
import Title from "../components/interface/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
	const [enteredValue, setEnteredValue] = useState("");

	const numberInputHandler = (enteredText) => {
		setEnteredValue(enteredText);
	};

	const { width, height } = useWindowDimensions();

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

	const marginTopDistance = height < 380 ? 30 : 100;

	return (
		<KeyboardAvoidingView style={styles.screen}>
			<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
				<Title>Guess My Number</Title>
				<Card>
					<InstructionText>Enter a Number</InstructionText>
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
				</Card>
			</View>
		</KeyboardAvoidingView>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center",
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
