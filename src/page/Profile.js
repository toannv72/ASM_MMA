import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Avatar, Text, List, Icon, IconButton } from "react-native-paper";
import Model from "../Components/Modal";
import { useNavigation } from "@react-navigation/native";
export default function ProfileSettingScreen({  }) {
  const [expanded, setExpanded] = useState({});
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  const list2 = [
    {
      name: "My Pet",
      icon: "dog",
    },
    {
      name: "Password",
      icon: "fingerprint",
    },
    {
      name: "Payment Method",
      icon: "credit-card",
    },
    {
      name: "Support",
      icon: "lifebuoy",
    },
  ];

  const handClose = () => {
    setShow(false);
  };
  const log = (item) => {
    // Only navigate when "Password" is pressed
    if (item.name === "Password") {
      navigation.navigate("Password", { item });
    }
    if (item.name === "Logout") {
      navigation.navigate("login");
    }
  };
  const hadShow = () => {
    setShow(true);
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#F6F6F6" }}
      contentContainerStyle={styles.container}
    >
      {/* Thêm IconButton cho biểu tượng arrow-left */}
      <IconButton
        icon="arrow-left"
        size={35}
        style={styles.backIcon}
        onPress={() => navigation.navigate("Home")}
      />

      <Text
        style={{
          fontSize: 26,
          textAlign: "center",
          margin: 50,
          fontWeight: "bold",
        }}
      >
        Profile
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar.Image
          size={100}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/376577375_998270051209102_4679797004619533760_n.jpg?alt=media&token=90d94961-bc1b-46e4-b60a-ad731606b13b",
          }}
          style={{ marginLeft: 25 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingRight: 150,
          }}
        >
          <View>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 28,
                fontWeight: "bold",
                marginLeft: 7,
              }}
            >
              Toannv
            </Text>
            <Text style={{ marginTop: 10, fontSize: 16, marginLeft: 7 }}>
              {" "}
              2-2-2000
            </Text>
          </View>
          <IconButton
            icon="pen"
            size={35}
            style={{
              marginBottom: 60,
            }}
            onPress={() => navigation.navigate("ChangeProfile")}
          />
        </View>
      </View>
      <View style={{ height: 35 }} />

      {list2.map((item, index) => (
        <View key={index}>
          <List.Item
            title={item.name}
            left={(props) => <List.Icon {...props} icon={item.icon} />}
            right={(props) => <List.Icon {...props} icon="arrow-right" />}
            onPress={() => log(item)}
            titleStyle={styles.titleStyle}
            style={{
              backgroundColor: "#F6F6F6",
              fontWeight: "bold",
              marginBottom: 5,
            }}
          />
          {index < list2.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
      <View style={styles.separator} />
      <List.Item
        title="Logout"
        right={(props) => <List.Icon {...props} icon="logout" />}
        onPress={()=>navigation.navigate("Login")}
        titleStyle={{ fontSize: 19, fontWeight: "bold", marginLeft: 40 }}
      />
      <View style={styles.updateAccountContainer}>
        <List.Item
          title={
            <Text style={styles.updateAccountText} onPress={hadShow}>
              Update Your Account
            </Text>
          }
         
          style={styles.updateAccount}
        />
      </View>
      <Model shows={show} handClose={handClose} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 16,
  },
  updateAccountContainer: {
    height: 200,
    justifyContent: "center",
    width: 220,
    height: 140,
    marginLeft: 75,
    marginVertical: 10,
  },
  updateAccount: {
    backgroundColor: "#C660F6",
    alignItems: "center",
    borderRadius: 10,
  },
  updateAccountText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: 700,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 19,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC", // Màu của đường kẻ
    marginVertical: 5,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 1,
  },
});
