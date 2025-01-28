import React from "react";
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Row from "./Row";

type ButtonProps = {
  title: string; // Le texte du bouton
  icon?: string;
  onPress: () => void; // Fonction déclenchée lors du clic sur le bouton
  style?: ViewStyle; // Styles personnalisés pour le bouton
  textStyle?: TextStyle; // Styles personnalisés pour le texte
  disabled?: boolean; // Désactive le bouton
  iconSize?:number,
};

export default function Button({
  title,
  icon,
  onPress,
  style,
  textStyle,
  disabled = false,
  iconSize = 20,
}: ButtonProps) {
  const colors = useThemeColors(); // Récupère les couleurs du thème

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: disabled ? colors.grayBackground : colors.grayWhite },
        style,
      ]}
      activeOpacity={0.7}
      disabled={disabled}
    >
        <Row gap={12}>
        {icon && <Ionicons  name={icon as any} size={30} color="blue"  />}
        <Text style={[styles.text,textStyle]}>{title}</Text>
        </Row>
    
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.5)", // Couleur de l'ombre
    shadowOffset: {
      width: 0, // Déplacement horizontal
      height: 2, // Déplacement vertical
    },
    shadowOpacity: 0.23, // Opacité de l'ombre
    shadowRadius: 2.62, // Flou de l'ombre

    // Ombre pour Android
    elevation: 1, 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily:"Poppins",
    fontStyle: "italic",
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
});
