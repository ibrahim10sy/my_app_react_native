import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import Card from "./Card";
import Row from "./Row";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { imageMap } from "../function/getImage";

type Props = ViewProps & {
  title?: string; 
  image?: string;
  lien?: string;
};
// const colors = useThemeColors();
export default function CardPage({ style, title, image,lien,...props }: Props) {
    const colors = useThemeColors();

return (
    <Link href={"/screen/searchPage"}> {/* Lien de redirection */}
        <View style={[styles.container, style]} {...props}>
        <Card style={styles.card}>
            <Row gap={8}>
        
            <Image
             source={image ? imageMap[image] : require("@/assets/images/logo.png")}
            style={styles.image}
            />
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                {title}
            </Text>
        </Row>
        </Card>
    </View>
    </Link>
);
}

const styles = StyleSheet.create({
    container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    elevation: 0.3,
    shadowColor: "rgba(0, 0, 0, 0.20)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 160,
    height: 80,
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "nowrap",
    width: Dimensions.get("window").width * 0.45,
  },
  card: {
    height: 100,
    justifyContent: "center",
    borderRadius: 160,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    resizeMode: "cover",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    flexWrap: "wrap", // Permet le wrapping du texte
    maxWidth: Dimensions.get("window").width * 0.3, 
  },
  row: {
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
});