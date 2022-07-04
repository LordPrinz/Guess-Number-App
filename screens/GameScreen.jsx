import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "./../components/interface/Title";
import generateRandomBetween from "../utils/generateRandomBetween";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/interface/PrimaryButton";

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
			<View>
				<Text>Higher or lower?</Text>
				<PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>-</PrimaryButton>
				<PrimaryButton onPress={nextGuessHandler.bind(null, "grater")}>+</PrimaryButton>
			</View>
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
});
