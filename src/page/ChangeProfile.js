import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function ChangeProfile({ navigation }) {
  const [name, setName] = useState("Toannv");
  const [phone, setPhone] = useState("0345821712");
  const [dob, setDob] = useState("2000-2-1T20:35:52.184Z");
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedGender, setSelectedGender] = useState("null");
  const [selectedLocation, setSelectedLocation] = useState(
    "placeholder_location"
  );
  const [quote, setQuote] = useState("");

  const [avatarSource, setAvatarSource] = useState('https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/376577375_998270051209102_4679797004619533760_n.jpg?alt=media&token=90d94961-bc1b-46e4-b60a-ad731606b13b');
console.log(dob);
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const getColor = (value) => {
    switch (value) {
      case "male":
        return "#24252B";
      case "female":
        return "#24252B";
      default:
        return "#24252B";
    }
  };

  const locationOptions = [
    { label: "Location 1", value: "location1" },
    { label: "Location 2", value: "location2" },
  ];
  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setAvatarSource(result);
    }

  };
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.image,
          marginBottom: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 432,
          height: 250,
          marginTop: 20,
        }}
      >

        <Image
          source={{ uri: avatarSource?.assets ? avatarSource?.assets[0]?.uri : 'https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/376577375_998270051209102_4679797004619533760_n.jpg?alt=media&token=90d94961-bc1b-46e4-b60a-ad731606b13b' }}
      
          style={{
            ...styles.image,
            marginBottom: 20,
            width: "100%",
            height: "100%",
          }}
        />

      </View>

      <View style={styles.backIconContainer}>
        <IconButton
          style={styles.backIcon}
          icon="arrow-left"
          size={35}
          // color="#fff"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>

      <View style={styles.cameraIconContainer}>
        <IconButton
          style={{ ...styles.cameraIcon, marginBottom: 555 }}
          icon="camera"
          size={35}
          onPress={handleChoosePhoto}
        />
      </View>

      <View
        style={{
          ...styles.searchSection,
          backgroundColor: "#E9E7E7",
          borderRadius: 40,
        }}
      >
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: "#E9E7E7",
            borderRadius: 40,
            fontSize: 18,
          }}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          mode="outlined"
          left={
            <TextInput.Icon
              icon="account-circle"
              size={35}
              style={{
                marginTop: 22,
              }}
            />
          }
          value={name}
        />
      </View>

      <View
        style={{
          ...styles.searchSection,
          fontSize: 18,
          marginTop: 5,
        }}
      >
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: "#E9E7E7",
            fontSize: 18,
          }}
          placeholder="Phone Number"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          mode="outlined"
          left={
            <TextInput.Icon
              icon="phone"
              size={35}
              style={{
                marginTop: 22,
              }}
            />
          }
        />
      </View>

      <View style={styles.rowContainer}>
        <View
          style={{
            ...styles.searchSection,
            width: 180,
            backgroundColor: "#E9E7E7",
            marginTop: 5,
          }}
        >
          <TouchableOpacity onPress={showDatepicker}>
            <TextInput
              mode="outlined"
              style={{
                ...styles.input,
                backgroundColor: "#E9E7E7",
              }}
              onFocus={showDatepicker}
              value={dob ? new Date(dob).toLocaleDateString() : ""}
              placeholder="Select date..."
              placeholderTextColor="#24252B"
              editable={false}
              left={
                <TextInput.Icon
                  icon="calendar"
                  size={35}
                  style={{ marginTop: 22 }}
                />
              }
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dob ? new Date(dob) : new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <View
          style={{
            ...styles.dropdownSection,
            backgroundColor: "#E9E7E7",
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 4,
            marginTop: 5,
          }}
        >
          <IconButton
            icon="human-male"
            size={35}
            style={{ marginBottom: 10 }}
          />
          <View style={{ flex: 1 }}>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              items={genderOptions}
              onValueChange={(value) => {
                setSelectedGender(value);
              }}
              value={selectedGender}
              placeholder={{}}
              style={{
                inputAndroid: { fontSize: 18, color: getColor(selectedGender) },
                placeholder: {
                  fontSize: selectedGender ? 18 : 20,
                  color: getColor(selectedGender),
                },
              }}
            >
              {!selectedGender && (
                <Text style={{ fontSize: 20, color: "black" }}>
                  Select a gender...
                </Text>
              )}
            </RNPickerSelect>
          </View>
        </View>
      </View>

      <View
        style={{
          ...styles.dropdownSection,
          width: "100%",
          backgroundColor: "#E9E7E7",
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 4,
        }}
      >
        <IconButton
          style={styles.searchIcon}
          icon="map-legend"
          size={35}
          color="#8C8EA3"
        />
        <RNPickerSelect
          useNativeAndroidPickerStyle={false}
          items={locationOptions}
          onValueChange={(value) => {
            setLocation(value);
            setSelectedLocation(value);
          }}
          value={selectedLocation}
          placeholder={{
            label: "Select a location...",
            value: undefined,
          }}
          style={{
            inputAndroid: { fontSize: 18 }, // only for Android
            placeholder: {
              fontSize: 18,
              color: "#24252B", // Đổi màu của placeholder ở đây
            },
          }}
        />
      </View>
      <View
        style={{
          width: 379,
          height: 150,
          backgroundColor: "#E9E7E7",
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 4,
          marginTop: 10,
        }}
      >
        <TextInput
          style={{
            ...styles.input,
            backgroundColor: "#E9E7E7",
            borderRadius: 40,
          }}
          onChangeText={(text) => setQuote(text)}
          value={quote}
          placeholder="something..."
          placeholderTextColor="#24252B"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  dropdownSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    width: "48%", // Set width as per your requirement
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  image: {
    width: 432,
    height: 250,
    marginBottom: 20,
  },
  backIconContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    padding: 10,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 16,
    marginBottom: 16,
  },
  cameraIcon: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: "#E9E7E7",
  },
});
