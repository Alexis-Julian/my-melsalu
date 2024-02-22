import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

function RepositoryItemHeader(props) {
	return (
		<View style={{ flexDirection: "row", gap: 5 }}>
			<Image style={styles.image} source={{ uri: props.imagenPerfil }} />
			<View style={{ gap: 10 }}>
				<StyledText
					transform="capitalize"
					fontSize="subheading"
					fontWeight="bold"
				>
					{props.nombre}
				</StyledText>
				<StyledText style={styles.languages}>{props.lenguajes[0]}</StyledText>
			</View>
		</View>
	);
}

function RepositoryItem(props) {
	return (
		<View key={props.id} style={styles.container}>
			<RepositoryItemHeader {...props} />
			<RepositoryStats {...props} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		gap: 5,
	},
	languages: {
		padding: 4,
		backgroundColor: theme.colors.primary,
		alignSelf: "flex-start",
		borderRadius: 4,
		overflow: "hidden",
	},
	image: {
		height: 48,
		width: 48,
		borderRadius: 4,
	},
});

/* Forma no recomendada para hacer estilos  */

/* const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
	},
	strong: {
		color: "#09f",
		fontWeight: "bold",
		marginBottom: 5,
	},
	uppercase: {
		textTransform: "uppercase",
	},
}); */

export default RepositoryItem;
