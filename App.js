import { StatusBar } from "expo-status-bar";
import {
	Alert,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	TouchableNativeFeedback,
} from "react-native";

import { NativeRouter } from "react-router-native";

import Main from "./src/components/Main";

export default function App() {
	return (
		<NativeRouter>
			<Main />
		</NativeRouter>
	);
}

/* ---Notas--- */
/* El onPress no puedo estar en cualquier componente solo puede estar en los Touchable*/
/* View es para crear vistas para el usuario (div) y se comporta con flex-box */
