import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fonts.normal,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorSecondary: {
		color: theme.colors.textSecondary,
	},
	bold: {
		fontWeight: theme.fontWeight.bold,
	},
	transform: {
		textTransform: theme.text.capitalize,
	},
	subheading: {
		fontSize: theme.fontSizes.subheading,
	},
	center: {
		textAlign: theme.text.center,
	},
});

function StyledText({
	children,
	color,
	fontSize,
	fontWeight,
	transform,
	style,
	text,
	...restOfProps
}) {
	const textStyles = [
		styles.text,
		color === "primary" && styles.colorPrimary,
		color === "secondary" && styles.colorSecondary,
		fontSize === "subheading" && styles.subheading,
		transform === "capitalize" && styles.transform,
		fontWeight === "bold" && styles.bold,
		text === "center" && styles.center,
		style,
	];

	return <Text style={textStyles}>{children}</Text>;
}

export default StyledText;
