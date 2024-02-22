import { View, Text } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";

export default function Main() {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} />
				<Route path="/signin" element={<Text>Working on it</Text>} />
				<Route path="*" element={<RepositoryList />} />
			</Routes>
		</View>
	);
}
