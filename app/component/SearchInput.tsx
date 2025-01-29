import { TextInput, View, Image, StyleSheet, Pressable } from "react-native";
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

export default function SearchInput({ value, onChange }: Props) {
  const colors = useThemeColors();

  return (
    <View style={{ flex: 1 }}>
      {/* Barre de recherche fixe */}
      <View style={[styles.headerContainer]}>
        <Row style={styles.header} gap={8}>
          <Pressable onPress={router.back}>
            <Ionicons name="arrow-back" size={28} color={colors.grayDark} />
          </Pressable>
          <Row gap={8} style={[styles.wrapper]}>
            <Ionicons name="search" size={24} color={colors.grayDark} />
            <TextInput 
              onChangeText={onChange} 
              value={value} 
              placeholder="Rechercher un produit" 
              style={styles.input} 
            />
          </Row>
        </Row>
      </View>

      {/* Contenu défilant */}
      <ScrollView style={{ paddingTop: 80 }}>
        <View>
          <CardProduct title="Pomme" localite="Bamako" prix="1000" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // S'assurer que la barre reste au-dessus
    backgroundColor: "#ffffff",
    padding: 10,
  },
  header: {
    margin: 10,
  },
  wrapper: {
    borderRadius: 26,
    backgroundColor: "#f9f9f9",
    height: 50,
    paddingHorizontal: 12,
    width: "100%",
  },
  input: {
    fontSize: 14,
    lineHeight: 16,
    height: 40,
    flex: 1,
  },
});
