import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
	const pressHandler = () => {};

	return (
		<Pressable onPress={pressHandler}>
			<View>
				<Text>{children}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#72063c",
	},
});

export default PrimaryButton;
