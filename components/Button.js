import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS } from "../constants";

export const CircularButton = ({ imageURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={styles.circularButton} onPress={handlePress}>
      <Image
        style={styles.circularButtonImage}
        source={imageURL}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectangleButton = () => {
  return (
    <View>
      <Text>Rectangle Button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    width: 40,
    height: 40,
    top: 10,
    right: 10,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  circularButtonImage: {
    width: 24,
    height: 24,
  },
});
