import { TextInput, View ,Image,StyleSheet, Pressable} from "react-native"
import useThemeColors from "../hook/useThemeColors";
import Row from "./Row";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ScrollView from "./ScrollView";
import CardProduct from "./CardProduct";


type Props = {
    value: string,
    onChange: (s: string) => void
}

export  default function SearchInput({value, onChange}: Props) {
    const colors = useThemeColors();
    return <ScrollView>
    <Row style={styles.header} gap={8}>
            <Pressable onPress={router.back}>
                <Ionicons name="arrow-back" size={28} color={colors.grayDark} />
            </Pressable>
        <Row gap={8} style={[styles.wrapper , ]}>
            <Ionicons name="search" size={24} color={colors.grayDark} />
            <TextInput onChangeText={onChange} value={value} placeholder="Rechercher un produit" />
        </Row>
    </Row>
    <View>
        <CardProduct title="Pomme" localite="Bamako" prix="1000"/>
    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    header: {
        margin:10,
    }, 
    wrapper : {
        // flex: 1,
        borderRadius: 26,
        backgroundColor: "#f9f9f9",
        height: 50,
        paddingHorizontal:12,
        marginTop:10,
        width: "100%",
    },
    input: {
        fontSize: 10,
        lineHeight:16,
        height: 16,
    }
})