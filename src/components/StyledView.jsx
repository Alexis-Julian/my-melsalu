import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	direction: {
		flexDirection: "row",
	},
});

function StyledView({ children, flex, ...restOfProps }) {
	const viewStyle = [flex === "row" && styles.direction];
	return (
		<View style={viewStyle} {...restOfProps}>
			{children}
		</View>
	);
}

export default StyledView;
