import { Stack } from "expo-router";
import { LogBox } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


LogBox.ignoreAllLogs(true);

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
    <Stack
    screenOptions={{
      headerShown: false,
    }}
  > 
    <Stack.Screen 
    name="(tabs)"
    options={{
      headerShown: false,
    }}
    />

    <Stack.Screen 
        name="+not-found"
        options={{
          
        }}
        />
      <StatusBar style="auto" />
  </Stack>;
  </QueryClientProvider>
  );
  
}
