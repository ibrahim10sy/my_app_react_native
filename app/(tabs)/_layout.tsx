import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import useThemeColors from "../hook/useThemeColors";

export default function TabsLayout() {
  const colors = useThemeColors();
  return (
  <Tabs
     screenOptions={
        {
            tabBarActiveTintColor : "#ffd33d"
        }
     }
  > 

    <Tabs.Screen 
    name="index"
    options={{
      headerShown: false,
      sceneStyle : {
      backgroundColor: colors.grayWhite,
      
    },
      tabBarIcon: (
        {focused , color}) => 
        <Ionicons 
        name={focused ? "home-sharp" : "home-outline"} 
        color={color}
        size={25} />
    }}
    />
    <Tabs.Screen 
    name="profil"
    options={{
      
      headerTitle: "Profile",
      title: "Profil",
      headerTitleAlign: "center",
      sceneStyle : {
        backgroundColor: "white",
        
      },
      tabBarIcon: (
        {focused , color}) => 
        <Ionicons 
        name={focused ? "person-add-sharp" : "person-add-outline"} 
        color={color}
        size={25} />
    }}
    />
    <Tabs.Screen 
    name="+not-found"
    options={{
      
    }}
    />
  </Tabs>
  );
}