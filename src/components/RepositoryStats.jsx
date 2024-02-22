import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousand = (value) => {
	return value >= 1000 ? `${value / 100 / 10}k` : String(value);
};

function RepositoryStats(props) {
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
			<View>
				<StyledText fontWeight="bold">Commits </StyledText>
				<StyledText text="center">{parseThousand(props.commits)}</StyledText>
			</View>
			<View>
				<StyledText fontWeight="bold">Forks </StyledText>
				<StyledText text="center">{parseThousand(props.forks)}</StyledText>
			</View>
			<View>
				<StyledText fontWeight="bold">Stars </StyledText>
				<StyledText text="center">{parseThousand(props.stars)}</StyledText>
			</View>
			<View>
				<StyledText fontWeight="bold">Reviews </StyledText>
				<StyledText text="center">{parseThousand(props.reviews)}</StyledText>
			</View>
			<View>
				<StyledText fontWeight="bold">Propietarios</StyledText>
				<StyledText text="center">{props.propietario}</StyledText>
			</View>
		</View>
	);
}
export default RepositoryStats;
