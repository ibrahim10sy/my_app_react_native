import {TextInput, View,FlatList, Image, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import useThemeColors from "../hook/useThemeColors";
import Row from "./Row";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ScrollView from "./ScrollView";
import CardProduct from "./CardProduct";
import { useInfiniteFecthQuery } from "../hook/useFetcthStock";
import { useState } from "react";
import { getStockImage } from "../constant/BaseUrl";
import { Stock } from "../model/Stock";

type Props = {
  value: string,
  onChange: (s: string) => void
}

export default function SearchInput({ value, onChange }: Props) {
  const colors = useThemeColors();
  const {data, isFetching, fetchNextPage} = useInfiniteFecthQuery('/getStocksByPaysWithPagination')
  const stocks = data?.pages.flatMap(page => page.results.map(r => r.stock)) ?? [];
  const [search, setSearch] = useState('')
  const filteredStock =  stocks.filter(p => p.nomProduit!.includes(search.toLowerCase()))
  console.log(stocks)

  return (
    <View style={{ flex: 1 }}>
      {/* Barre de recherche fixe */}
      <View style={[styles.headerContainer]}>
        <Row style={styles.header} gap={8}>
          <Pressable onPress={router.back}>
            <Ionicons name="arrow-back" size={28} color={colors.grayDark} />
          </Pressable>
          <Row gap={8} style={[styles.wrapper]}>
            <Ionicons name="search" size={24} color={colors.grayDark} />
            <TextInput 
              onChangeText={onChange} 
              value={value} 
              placeholder="Rechercher un produit" 
              style={styles.input} 
            />
          </Row>
        </Row>
      </View>

      {/* Contenu défilant */}
      <ScrollView style={{ paddingTop: 80 }}>
        <View>
          <FlatList
            data={filteredStock}
            numColumns={2}
            contentContainerStyle={[styles.gridGap, styles.list]}
            columnWrapperStyle={styles.gridGap} 
            keyExtractor={(item : Stock) => item.idStock?.toString() || 'default_key'}
            ListFooterComponent={
              isFetching ? <ActivityIndicator  color={colors.tint} /> : null
            }
            onEndReached={search ? undefined : () => fetchNextPage()}
            renderItem={({ item }: { item: Stock }) => (
              <CardProduct title={item.nomProduit} localite={item.origineProduit} prix={item.prix?.toString()}  style={{flex:1/3}} />
              )}
        />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // S'assurer que la barre reste au-dessus
    backgroundColor: "#ffffff",
    padding: 10,
  },
  header: {
    margin: 10,
  },
  wrapper: {
    borderRadius: 26,
    backgroundColor: "#f9f9f9",
    height: 50,
    paddingHorizontal: 12,
    width: "100%",
  },
  input: {
    fontSize: 14,
    lineHeight: 16,
    height: 40,
    flex: 1,
  },
  
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
