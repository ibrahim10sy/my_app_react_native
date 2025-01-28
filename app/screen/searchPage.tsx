import { StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import ThemedText from "../component/ThemedText";
import ScrollView from "../component/ScrollView";
import Row from "../component/Row";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "../component/SearchInput";
import { useState } from "react";



export default function SearchPage () {
    const colors = useThemeColors();
    const [search, setSearch] = useState('')

    return (
        <ScrollView style={{backgroundColor: colors.grayWhite}}> 
            <SearchInput value={search} onChange={setSearch}></SearchInput>
        </ScrollView>
    );
}

const styles =  StyleSheet.create({
    text: {
        fontSize: 16,
        color: "#888",
      },
      row:{
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "center",
      }
} )