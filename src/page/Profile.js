import React, { useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { getData } from '../api/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileSettingScreen({ navigation }) {
  const [checkedList, setCheckedList] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [storedData, setStoredData] = useState([]);

  const checkAll = storedData.length === checkedList.length;

  const onCheckboxPress = (value) => {
    const updatedCheckedList = [...checkedList];
    const index = updatedCheckedList.indexOf(value);
    
    if (index !== -1) {
      // Remove the item if it's already checked
      updatedCheckedList.splice(index, 1);
    } else {
      // Add the item if it's not checked
      updatedCheckedList.push(value);
    }

    setCheckedList(updatedCheckedList);
  };
  const onCheckAllPress = () => {
    setCheckedList(checkAll ? [] : storedData.map(data => data.id));
  };

  const loadStoredData = async () => {
    try {
      const dataAsyncStorage = await AsyncStorage.getItem('@Like');
      if (dataAsyncStorage !== null) {
        setStoredData(JSON.parse(dataAsyncStorage));
      
        const resultArray = JSON.parse(dataAsyncStorage).map((element) => {
          const elementString = JSON.stringify(element);
          return JSON.parse(dataAsyncStorage).some((item) => JSON.stringify(item) === elementString);
        });
        setLikedProducts(resultArray)
      } else {
        setStoredData([]);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setCheckedList([])
      loadStoredData();
      return () => {
      };
    }, []),

  );
  const handleLike = (index, product) => {
    const updatedLikedProducts = [...likedProducts];
    updatedLikedProducts[index] = !updatedLikedProducts[index];
    setLikedProducts(updatedLikedProducts);
    // Kiểm tra xem sản phẩm đã được thích hay chưa
    const isLiked = storedData.some(item => item.id === product.id);

    // Nếu chưa tồn tại, thì thêm vào mảng storedData
    if (!isLiked) {
      setStoredData([...storedData, product])
      const updatedStoredData = [...storedData, product];
      AsyncStorage.setItem('@Like', JSON.stringify(updatedStoredData));

      return
    }
    return

  };
  const handleUnlike = (index, product) => {
    const updatedLikedProducts = [...likedProducts];
    updatedLikedProducts[index] = !updatedLikedProducts[index];
    setLikedProducts(updatedLikedProducts);
    // Loại bỏ sản phẩm khỏi mảng storedData
    const updatedStoredData = storedData.filter(item => item.id !== product.id);
    setStoredData(updatedStoredData)
    AsyncStorage.setItem('@Like', JSON.stringify(updatedStoredData));

    return

  };
  return (
    <View style={styles.container} >
      <View>
        <CheckBox
          title="Check all"
          checked={checkAll}
          onPress={onCheckAllPress}
        />

        <ScrollView >
          <View style={{ flexDirection: 'column-reverse', rowGap: 10, padding: 14 }}>
            {storedData.map((data, index) => (
              <View style={{ padding: 10 }}>
                <CheckBox
                  key={data.id}
                  checked={checkedList.includes(data.id)}
                  onPress={() => onCheckboxPress(data.id)}
                />
                <TouchableOpacity
                  style={styles.origin}
                  key={index}
                  onPress={() => {
                    navigation.navigate("Detail", { itemData: data.id });
                  }}
                >
                  <Image source={{ uri: data.image }} style={styles.image} />
                  <View style={{ padding: 10 }} >
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{data.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View>
                        <Text>{`Xuất xứ : ${data.origin}`}</Text>
                        <Text>{`Thể loại: ${data.category}`}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={{ marginTop: -50, marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end', }}>
                  {likedProducts[index] ? <Entypo style={{ padding: 5 }} pointerEvents="none" onPress={() => handleUnlike(index, data)} name="heart" size={40} color="red" /> : <Entypo style={{ padding: 5 }} pointerEvents="none" onPress={() => handleLike(index, data)} name="heart-outlined" size={40} color="#555555" />}
                </View>
              </View>
            ))}
          </View>
          <View style={{ height: 120 }}></View>
        </ScrollView>
        {/* {plainOptions.map((option) => (
          <View>
            <CheckBox
              key={option}
              title={option}
              checked={checkedList.includes(option)}
              onPress={() => onCheckboxPress(option)}
            />
          </View>
        ))} */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#78b2a2",
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,

  },
  origin: {

    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 10, // Bóng đổ cho Android
    shadowColor: '#000', // Màu của bóng đổ cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});