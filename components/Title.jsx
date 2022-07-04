import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.accent500,
		textAlign: "center",
		borderWidth: 2,
		borderColor: "#ddb52f",
		padding: 12,
	},
});

export default Title;
