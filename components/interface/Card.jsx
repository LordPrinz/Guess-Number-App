import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		borderRadius: 8,
		marginTop: 36,
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
});
