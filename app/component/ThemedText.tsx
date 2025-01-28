import { StyleSheet, TextProps ,Text} from "react-native";
import { Colors } from "../constant/Colors";
import useThemeColors from "../hook/useThemeColors";

const styles = StyleSheet.create({
    body: {
        fontSize:10,
        lineHeight:16
    },
    headline: {
        fontSize:28,
        lineHeight:32,
        fontWeight:"bold",
    },
    caption:{
        fontSize:8,
        lineHeight:12,
    },
    subtitle1:{
        fontSize:14,
        lineHeight:16,
        fontWeight:"bold",
    },
    subtitle2:{
        fontSize:12,
        lineHeight:16,
        fontWeight:"bold",
    }
    ,
    subtitle3:{
        fontSize:10,
        lineHeight:16,
        fontWeight:"bold",
    },
    error: {
        fontSize: 14,
        color: Colors.light.tint
    },
   
    warning: {
        fontSize: 14,
        color: Colors.light.tint
    },
    link: {
        fontSize: 14,
        color: Colors.light.tint
    },
})


type Props = TextProps & {
    variant? : keyof typeof styles,
    colorss? : keyof typeof Colors['light']
}

export default function ThemedText({ variant, colorss, style, ...props } : Props) {
    const colors = useThemeColors();
    return <Text style={[styles[variant ?? 'body'],{color:colors[colorss ?? 'grayDark']},style]} {...props} />
}