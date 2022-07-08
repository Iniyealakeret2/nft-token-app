import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCards, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCards data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={styles.flatListBackgound}>
          <View style={styles.darkBackgroundView} />
          <View style={styles.lightBackgroundView} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flatListBackgound: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  darkBackgroundView: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  lightBackgroundView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
