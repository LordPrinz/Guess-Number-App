import { Text, View } from "react-native";

const PrimaryButton = ({ children }) => {
	return (
		<View>
			<Text>{children}</Text>
		</View>
	);
};

export default PrimaryButton;
