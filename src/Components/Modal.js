import React, { useEffect, useState } from "react";
import checkIcon from "../../assets/check.png";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Model({ shows, handClose }) {
  const [modalVisible, setModalVisible] = useState(shows);
  const navigation = useNavigation();
  useEffect(() => {
    setModalVisible(shows);
  }, [shows]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View style={styles.modalBackGround}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.quit}
              onPress={() => {
                setModalVisible(false);
                handClose();
              }}
            >
              <Text style={styles.header}>X</Text>
            </TouchableOpacity>
            <Text style={styles.title}>User Pro</Text>
            <Text style={styles.price}>109.000vnđ</Text>
            <Text style={styles.paid}>Paid every 3 months</Text>
            <View style={styles.mainContent}>
              <Image source={checkIcon} style={styles.icon} />
              <Text style={styles.content}>
                Get advice directly from experts
              </Text>
            </View>
            <View style={styles.mainContent}>
              <Image source={checkIcon} style={styles.icon} />
              <Text style={styles.content}>Create unlimited pet profile</Text>
            </View>
            <View style={styles.mainContent}>
              <Image source={checkIcon} style={styles.icon} />
              <Text style={styles.content}>
                Get 15 voucher pet food every moth
              </Text>
            </View>
            <View style={styles.mainContent}>
              <Image source={checkIcon} style={styles.icon} />
              <Text style={styles.content}>15% renewal discount</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handClose();
                navigation.navigate("CheckOut");
              }}
            >
              <Text style={styles.name}>Get Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "#45464FCC",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#37383D",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  quit: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
  },
  title: {
    width: "100%",
    height: "auto",
    fontWeight: "700",
    fontSize: 54,
    textAlign: "center",
    color: "#D46FD0",
  },
  price: {
    marginBottom: 10,
    width: "100%",
    height: "auto",
    fontWeight: "700",
    fontSize: 42,
    textAlign: "center",
    color: "#F6F6F6",
  },
  paid: {
    width: 150,
    marginBottom: 20,
    textAlign: "center",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C8EA3",
    borderRadius: 8,
  },
  mainContent: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
  },
  content: {
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 5,
    color: "white",
  },
  button: {
    width: "70%",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#2151FF",
  },
  name: {
    fontWeight: "700",
    fontSize: 40,
    color: "white",
    padding: 20,
  },
});
