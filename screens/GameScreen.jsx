import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	View,
	StyleSheet,
	Alert,
	FlatList,
	useWindowDimensions,
} from "react-native";
import Title from "./../components/interface/Title";
import generateRandomBetween from "../utils/generateRandomBetween";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/interface/PrimaryButton";
import InstructionText from "../components/interface/InstructionText";
import Card from "../components/interface/Card";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState([initialGuess]);

	const { width } = useWindowDimensions();

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [userNumber, onGameOver, currentGuess]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

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
		setGuessRounds((prevState) => [newRndNumber, ...prevState]);
	};

	const guessRoundsListLength = guessRounds.length;

	let content = (
		<>
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
		</>
	);

	if (width > 500) {
		content = (
			<>
				<View style={styles.buttonContainerWide}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
							<Ionicons name="md-remove" />
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(null, "grater")}>
							<Ionicons name="md-add" />
						</PrimaryButton>
					</View>
				</View>
			</>
		);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{content}
			<View style={styles.listContainer}>
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRoundsListLength - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
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
	buttonContainerWide: {
		flexDirection: "row",
		alignItems: "center",
	},

	listContainer: {
		flex: 1,
		padding: 16,
	},
});
