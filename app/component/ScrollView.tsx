import { SafeAreaView, ViewProps, ViewStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";


type Props = ViewProps;

export default function ScrollView({style, ...props}: Props) {
  const colors = useThemeColors();
  return <SafeAreaView style={[styles,style,]} {...props} />;
}

const styles = {
  flex: 1,
  padding:4
} satisfies ViewStyle