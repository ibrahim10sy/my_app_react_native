import { Image, StyleSheet, View } from "react-native";

// const blurhash =
//   '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Avatar (){
    return (
    <View style={styles.container}>
    {/* <Image
    source={require("@/assets/images/profil.png")}
    style={styles.image}
    //   placeholder={{ blurhash }}
    //   contentFit="cover"
    //   transition={1000}
    /> */}
  </View>
);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      backgroundColor: '#0553',
    },
});