import {
	Text,
	View,
	Pressable,
	StyleSheet,
	useWindowDimensions,
} from "react-native";

import Colors from "./../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
	const { width } = useWindowDimensions();

	const paddingVertical = width < 500 ? 8 : 16;

	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				android_ripple={{
					color: Colors.primary600,
				}}
				style={({ pressed }) =>
					pressed
						? [
								styles.buttonInnerContainer,
								styles.pressed,
								{ paddingVertical: paddingVertical },
						  ]
						: [styles.buttonInnerContainer, { paddingVertical: paddingVertical }]
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
		backgroundColor: Colors.primary500,
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
