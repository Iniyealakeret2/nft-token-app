import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";

export const NFTTitle = () => {
  return (
    <View>
      <Text>NFTTitle</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>EthPrice</Text>
    </View>
  );
};

export const ImgComp = ({ imageURL, index }) => {
  return (
    <Image
      source={imageURL}
      resizemode="contain"
      style={[
        { marginLeft: index === 0 ? 0 : -SIZES.font },
        styles.imgCompStyle,
      ]}
    />
  );
};

export const People = () => {
  return (
    <View style={styles.peopleContainer}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imageURL, index) => (
          <ImgComp imageURL={imageURL} index={index} key={`people ${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={styles.endDateStyle}>
      <Text style={styles.endDateText}>Ending in</Text>
      <Text style={styles.endDateTime}>4hr 30mins</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styles.subInfoContainer}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  subInfoContainer: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  peopleContainer: {
    flexDirection: "row",
  },
  imgCompStyle: {
    width: 48,
    height: 48,
  },
  endDateStyle: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    maxWidth: "50%",
    borderRadius: SIZES.base,
  },
  endDateText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  endDateTime: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});
