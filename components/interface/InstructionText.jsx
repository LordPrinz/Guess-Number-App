import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children }) => {
	return <Text style={styles.intructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
	intructionText: {
		color: Colors.accent500,
		fontSize: 24,
	},
});
