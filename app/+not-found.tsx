import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen(){
    return (
        <>
        <Stack.Screen options={{ title : "Oops ! not found ! "}} />
        <View style={styles.container}>
            <Text>404: Not Found</Text>
            <Link href="/" style={styles.button}></Link>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        textDecorationLine:"underline",
        backgroundColor: "#25292e"
    },
    button : {
        fontSize: 20,
        textDecorationLine:"underline",
        color: "#fff"
    }
})