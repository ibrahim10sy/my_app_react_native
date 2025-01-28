import { FlatList, StyleSheet } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import CardPage from "./CardPage";

// const colors = useThemeColors();
export default function CardList() {
  const colors = useThemeColors();
  return (
    <FlatList 
    data={[
        { id: 1, name: "Intrant agricole", image: "physo" },
        { id: 2, name: "Produit Agricole & Elevage", image: "agri" },
        { id: 6, name: "Matériel & Equipement", image: "equip" },
        { id: 3, name: "Magasin", image: "mag" },
        { id: 4, name: "Moyen de Transport", image: "trans" },
        { id: 5, name: "Matériel de Location", image: "loc" },
    ]}
    numColumns={2}
    contentContainerStyle={[styles.gridGap, styles.list]}
    columnWrapperStyle={styles.gridGap} 
    keyExtractor={(item) => item.id.toString()}
    renderItem={ ({item}) => (
        <CardPage title={item.name} image={item.image} />
        )}
/>
);
}

const styles = StyleSheet.create({
   
        body: {
        flex: 1,
        marginTop: 20
      },
      gridGap:{
        gap: 8,
      },
      list :{
        marginTop: 25,
        padding: 5,
      }
});
