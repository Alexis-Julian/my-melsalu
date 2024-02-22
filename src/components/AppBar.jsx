import React from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: theme.appBar.primary,
		paddingTop: Constants.statusBarHeight + 10,
	},
	scroll: {
		paddingBottom: 15,
	},
	text: {
		color: theme.appBar.secondaryText,
		paddingHorizontal: 15,
	},
	active: {
		color: theme.appBar.primaryText,
	},
});

function AppBarTab({ children, to }) {
	const { pathname } = useLocation();
	const active = pathname === to;

	const textStyles = [styles.text, active && styles.active];

	return (
		<Link to={to} component={TouchableWithoutFeedback}>
			<StyledText style={textStyles}>{children}</StyledText>
		</Link>
	);
}

function AppBar() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal style={styles.scroll}>
				<AppBarTab active to="/">
					Repositories
				</AppBarTab>
				<AppBarTab to="/signin">Sig In</AppBarTab>
			</ScrollView>
		</View>
	);
}

export default AppBar;
