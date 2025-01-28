import { View, ViewProps, ViewStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";


type Props = ViewProps

export default function Card ({style, ...props}: Props) {
    const colors = useThemeColors();
    return <View style={[styles]} {...props} />
}

const styles = {
    borderRadius:8,
} satisfies ViewStyle