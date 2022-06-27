import { Text, View, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				android_ripple={{
					color: "#640233",
				}}
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},

	buttonInnerContainer: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});

export default PrimaryButton;
