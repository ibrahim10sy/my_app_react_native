import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function Caroussel() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
         <Image 
         source={require("@/assets/images/koumi1.png")}
         style={styles.image}
         />
        </View>
        <View style={styles.page} key="2">
        <Image 
         source={require("@/assets/images/koumi2.jpg")}
         style={styles.image}
         />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 16,
    height: 220,
    paddingVertical: 20,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%", // Largeur personnalisée
    height: 220, // Hauteur personnalisée
    // resizeMode: "contain", // Permet de garder le ratio de l'image
  },
});
