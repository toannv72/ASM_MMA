import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import checkIcon from "../../../assets/check.png";
export default function Complete({ navigation }) {
  return (
    <View style={styles.centeredView}>
      <Image source={checkIcon} style={styles.icon} />
      <Text style={styles.title}>Successful Payment</Text>
      <Text style={styles.subTitle}>
        You have successfully paid <Text style={styles.pro}>User Pro </Text>
        package
      </Text>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    width: "100%",
    height: "100%",
    display: "flex",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 10,
    backgroundColor: "#FFFBF5",
  },
  icon: {
    width: 335,
    height: 335,
  },
  title: { fontWeight: "600", fontSize: 28 },
  subTitle: {
    width: "80%",
    fontWeight: "400",
    fontSize: 23.2,
    textAlign: "center",
  },
  pro: { fontWeight: "600", fontSize: 26, color: "#D46FD0" },

  backBtn: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 32,
    padding: 10,
    borderColor: "#FEA623",
  },
  back: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    color: "#FEA623",
  },
});
