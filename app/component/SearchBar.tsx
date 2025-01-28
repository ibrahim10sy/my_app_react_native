import { StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import Card from "./Card";
import Row from "./Row";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = ViewProps & {
  title?: string; // Optionnel : Titre ou texte à afficher dans la barre
};
// const colors = useThemeColors();
export default function SearchBar({ style, title = "Quel produit recherchez-vous ? ", ...props }: Props) {
  const colors = useThemeColors();
  return (
    <Link href="/screen/searchPage"> {/* Lien de redirection */}
      <View style={[styles.container, style]} {...props}>
        <Card style={styles.card}>
          <Row style={styles.row}>
            <Row gap={16}>
              {/* Icône de recherche */}
              <Ionicons name="search" size={24} color={colors.grayDark} />
              {/* Titre passé en props */}
              <Text style={styles.text}>{title}</Text>
            </Row>
            {/* Flèche à droite */}
            <Ionicons name="chevron-forward" size={24} color={colors.grayDark} />
          </Row>
        </Card>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1/2,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: "#f4f6f6",
    // borderWidth: 1,
    borderColor: "#ccc",
    elevation: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 160,
    height: 50, // Fixe la hauteur
    marginVertical: 10, 
    alignContent:"center",
    justifyContent: "center",
    // alignItems: "center",
    width: "100%", // Fixe la largeur

  },
  card: {
    height: 100,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 160,
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 16,
    color: "#888",
  },
  row:{
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
