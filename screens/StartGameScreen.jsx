import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
	return (
		<View style={styles.inputContainer}>
			<TextInput />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: 24,
		borderRadius: 8,
		marginTop: 100,
		padding: 16,
		backgroundColor: "#72063c",
		elevation: 4,
		shadowColor: "black",
		shadowOffset: {
			height: 2,
			width: 0,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
