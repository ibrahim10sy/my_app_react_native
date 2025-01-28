import { Image, StyleSheet, Text, View } from "react-native";
import ScrollView from "../component/ScrollView";
import Row from "../component/Row";
import ThemedText from "../component/ThemedText";
import Card from "../component/Card";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "../hook/useThemeColors";
import Button from "../component/Button";
import Caroussel from "../component/Caroussel";
import SearchBar from "../component/SearchBar";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import CardPage from "../component/CardPage";
import CardList from "../component/CardList";

export default function Index() {
  const navigation = useNavigation();
   const colors = useThemeColors();

   

  return (
    <ScrollView> 
      <Card >
        <Row style={styles.header} >
        <Image
            source={require("@/assets/images/logo.png")}
            style={styles.image}
            />
        {/* <ThemedText variant="subtitle1" >Mon appli</ThemedText> */}
        <Button
        icon="log-in-outline"
        iconSize={30}
        title="Se connecter"
        onPress={() => alert("Bouton cliqué !")}
        style={{ backgroundColor: colors.grayWhite }}
        textStyle={{ color: "blue" }}
      />
        </Row>
      </Card>
      <Caroussel /> 
      {/* SearchBar */}
      <View style={styles.searchBarWrapper}>
        <SearchBar />
      </View>
      <View >
        <CardList />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header:{
      // flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 12,
      paddingBottom: 8,
      justifyContent: 'space-between',
     alignItems: 'center',
    //  alignSelf:'center'
      // paddingVertical: 0,
    },
    image: {
      // flex: 1,
      width: 82,
      height: 52,
      // borderRadius: 20,
      // backgroundColor: '#0553',
    },
    searchBarWrapper: {
      marginHorizontal: 12, // Ajoute un espacement horizontal
      marginTop: 20,
    },
});