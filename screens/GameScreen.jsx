import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Alert } from "react-native";
import Title from "./../components/interface/Title";
import generateRandomBetween from "../utils/generateRandomBetween";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/interface/PrimaryButton";
import InstructionText from "../components/interface/InstructionText";
import Card from "../components/interface/Card";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [userNumber, onGameOver, currentGuess]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "grater" && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{
					text: "Sorry!",
					style: "cancel",
				},
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		}

		if (direction === "grater") {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newRndNumber);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
							<Ionicons name="md-remove" />
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(null, "grater")}>
							<Ionicons name="md-add" />
						</PrimaryButton>
					</View>
				</View>
			</Card>
			<View>{/* LOG ROUNDS */}</View>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	instructionText: {
		marginBottom: 12,
	},
});
