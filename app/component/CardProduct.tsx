import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, ViewProps, ViewStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import Card from "./Card";
import Row from "./Row";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { imageMap } from "../function/getImage";
import ThemedText from "./ThemedText";

type Props = ViewProps & {
  title?: string; 
  localite?: string; 
  prix?: string; 
  idStock?: string;
  lien?: string;
};

export default function CardPage({ style, title,localite, prix, idStock,lien,...props }: Props) {
    const colors = useThemeColors();

return (
    <Link href={"/screen/searchPage"} style={{marginTop:40,paddingHorizontal:10}}> {/* Lien de redirection */}
        <View style={[styles.container, style]} {...props}>
        <Card style={styles.card}>
            <View style={styles.img}>
                <Image
                    source={require('@/assets/images/pomme.png')} // Adjust the path based on your project structure
                    style={styles.image}
                />
            </View>
            <View>
                <ThemedText variant="subtitle1"  style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                    {title}
                </ThemedText>
            <Row gap={5} style={styles.rowStyle}>
            <Ionicons name="location" size={22} color={'orange'} />
            <ThemedText variant="subtitle2"  style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                    {localite}
                </ThemedText>
            </Row>
            <Row gap={5} style={styles.rowStyle}>
                <Ionicons name="cash" size={22} color={'orange'} />
            <ThemedText variant="subtitle2"  style={styles.text} numberOfLines={2} ellipsizeMode="tail">
                    {prix} Fcfa
                </ThemedText>
            </Row>
            </View>
            
        </Card>
    </View>
    </Link>
);
}

const styles = StyleSheet.create({
    container: {
    borderRadius: 10,
    //  marginTop: 100,
    // paddingHorizontal: 10,
    // paddingVertical: 20,
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    elevation: 0.3,
    shadowColor: "rgba(0, 0, 0, 0.20)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 160,
    height: Dimensions.get("window").width * 0.50,
    // alignContent: "center",
    // justifyContent: "center",
    flexWrap: "nowrap",
    width: Dimensions.get("window").width * 0.45,
  },
  card: {
    backgroundColor: "#f9f9f9",
  },
  img: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.2,
  },
  image: {
    width: "50%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
   },
  text: {
    padding:10,
    flexWrap: "wrap", // Permet le wrapping du texte
    maxWidth: Dimensions.get("window").width * 0.3, 
  },
  row: {
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowStyle: {
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal:10
  },
});