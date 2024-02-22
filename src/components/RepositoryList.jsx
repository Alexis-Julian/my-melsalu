import React from "react";
import { FlatList, Text } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./Repositoryitem";

export default function RepositoryList() {
	return (
		<FlatList
			data={repositories}
			ItemSeparatorComponent={() => <Text> </Text>}
			renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
		></FlatList>
	);
}
