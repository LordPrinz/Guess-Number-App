import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "./../components/interface/Title";
import generateRandomBetween from "../utils/generateRandomBetween";
import NumberContainer from "../components/interface/game/NumberContainer";

const GameScreen = ({ userNumber }) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				{/* + - */}
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
