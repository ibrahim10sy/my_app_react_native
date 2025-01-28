import { Colors } from "@/app/constant/Colors";
import { useColorScheme } from "react-native";

export default function useThemeColors() {
    const theme = useColorScheme() ?? 'dark';
    return Colors[theme];
}