import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircularButton, RectangleButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const NFTCards = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardViewStyle}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={data.image}
          resizeMode="cover"
        />
      </View>
      <CircularButton imageURL={assets.heart} />
      <SubInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  cardViewStyle: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  imageContainer: {
    width: "100%",
    height: 250,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});

export default NFTCards;
