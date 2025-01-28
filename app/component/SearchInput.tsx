import { TextInput, View ,Image,StyleSheet} from "react-native"
import useThemeColors from "../hook/useThemeColors";
import Row from "./Row";
import { Ionicons } from "@expo/vector-icons";


type Props = {
    value: string,
    onChange: (s: string) => void
}

export  default function SearchInput({value, onChange}: Props) {
    const colors = useThemeColors();
    return <Row gap={8} style={[styles.wrapper , ]}>
    <Ionicons name="search" size={24} color={colors.grayDark} />
    <TextInput onChangeText={onChange} value={value} placeholder="Rechercher un produit" />
    </Row>

}

const styles = StyleSheet.create({
    wrapper : {
        flex: 1,
        borderRadius: 16,
        height: 32,
        paddingHorizontal:12
    },
    input: {
        flex: 1,
        fontSize: 10,
        lineHeight:16,
        height: 16,
    }
})