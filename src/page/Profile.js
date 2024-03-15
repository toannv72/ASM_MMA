import React, { useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { CheckBox, Dialog } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { getData } from '../api/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import gioHang from '../../assets/gioHang.png';
import dataList from '../../db';

export default function ProfileSettingScreen({ navigation }) {
  const [checkedList, setCheckedList] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [ShowSelect, setShowSelect] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  let pressTimer;
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
        const storedData = JSON.parse(dataAsyncStorage);
        console.log('storedData', storedData);
        setLikedProducts(storedData);
        fetchDataForLikedProducts(storedData)
      } else {
        setLikedProducts([]);
        fetchDataForLikedProducts(null)
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const fetchDataForLikedProducts = async (storedData) => {
    try {
      const productDataArray = [];
      for (const product of storedData) {
        try {
          const filteredList = await dataList.filter(item => item.id === product.id);
          productDataArray.push(...filteredList);
        } catch (error) {
          console.error('Error filtering data:', error);
        }
      }
      console.log('Product data array:', productDataArray);
      setStoredData(productDataArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log('====================================');
  console.log(storedData);
  console.log('====================================');
  useFocusEffect(
    useCallback(() => {
      setCheckedList([])
      loadStoredData();

      setShowSelect(false);
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

  const handlePressIn = () => {
    pressTimer = setTimeout(() => {
      setShowSelect(true);
      setPressed(true);
    }, 1000); // Thời gian giữ để được xem là long press (1000 miliseconds = 1 giây)
  };

  const handlePressOut = () => {
    clearTimeout(pressTimer);
    setPressed(false);
    // navigation.navigate("Detail", { itemData: data });
  };
  const handlePress = (data) => {
    if (!pressed) {
      // Chỉ chuyển trang nếu người dùng không nhấn giữ
      navigation.navigate("Detail", { itemData: data });
    }
  };

  const handleDeleteSelectedItems = () => {
    // Lọc các mục chưa được chọn và cập nhật storedData
    const updatedStoredData = storedData.filter(data => !checkedList.includes(data.id));
    setStoredData(updatedStoredData);
    // Đặt lại checkedList về mảng trống
    setCheckedList([]);
    setShowSelect(false);
    // Lưu trạng thái mới của storedData vào AsyncStorage
    AsyncStorage.setItem('@Like', JSON.stringify(updatedStoredData));
  };
  return (
    <View style={styles.container} >
      <View style={{ marginTop: 20 }}>
        {ShowSelect || <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', backgroundColor: '#fff', padding: 10, margin: 10 }}>
          <Text style={{ fontSize: 20 }}>Danh sách yêu thích</Text>
          {storedData.length != 0 ? <Text style={{ fontSize: 20 }} onPress={() => setShowSelect(true)}>Sửa</Text> : <></>}
        </View>}
        {!ShowSelect ||
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
            <CheckBox
              style={{ backgroundColor: '#78b2a2' }}
              title={!checkAll ? "Chọn tất cả " : "Bỏ chọn tất cả"}
              checked={checkAll}
              size={30}
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
              onPress={onCheckAllPress}
            />
            {checkedList.length !== 0 ? <Button onPress={toggleDialog1} style={{ backgroundColor: 'red', borderRadius: 10, margin: 9, justifyContent: 'space-between', alignContent: 'center', color: '#000' }}>
              <Text style={{ color: '#fff', marginTop: 5 }}>Xóa {checkedList.length}</Text>
            </Button> : <></>}
            <Button onPress={() => setShowSelect(false)} style={{ backgroundColor: '#057594', margin: 9, borderRadius: 10, color: '#000' }}>
              <Text style={{ color: '#fff', padding: 0, }}>Hủy</Text>
            </Button>
          </View>
        }

        <ScrollView >
          <View style={{ flexDirection: 'column-reverse', rowGap: 10, padding: 14 }}>
            {storedData.length == 0 ? <View>
              <View>
                <Image
                  style={{ width: "100%", height: 400 }}
                  source={gioHang}
                />
                <Text style={{ color: '#fff', fontSize: 20, padding: 30, textAlign: 'center' }}>
                  Danh sách yêu thích trống!
                </Text>
              </View>

            </View> : <></>}
            {storedData.map((data, index) => (
              <View style={{ padding: 0, flexDirection: 'row', }} key={index}>
                {!ShowSelect || <CheckBox
                  size={30}
                  iconType="material-community"
                  checkedIcon="checkbox-outline"
                  uncheckedIcon={'checkbox-blank-outline'}
                  style={{ padding: 0, margin: 0 }}
                  key={`checkbox_${data.id}`}
                  checked={checkedList.includes(data.id)}
                  onPress={() => onCheckboxPress(data.id)}
                />}
                <TouchableOpacity
                  style={styles.origin}
                  key={data.id}
                  onPress={() => handlePress(data.id)}
                  onPressIn={() => handlePressIn()}
                  onPressOut={() => handlePressOut()}
                  activeOpacity={0.6}
                >
                  <Image source={{ uri: data.image }} style={styles.image} />
                  <View style={{ padding: 10 }} >
                    <Text style={ShowSelect ? { ...styles.title, } : { ...styles.title, width: 250 }} numberOfLines={1} ellipsizeMode="tail">{data.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View>
                        <Text>{`Xuất xứ : ${data.origin}`}</Text>
                        <Text>{`Thể loại: ${data.category}`}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>
            ))}
          </View>
          <View style={{ height: 170 }}></View>
        </ScrollView>

        <Dialog
          isVisible={visible1}
          onBackdropPress={toggleDialog1}
        >
          <Dialog.Title title="Xác nhận xóa " />
          <Text>Bạn có chắc muốn xóa những sản phẩm đã chọn</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button onPress={() => {
              handleDeleteSelectedItems(),
                toggleDialog1()
            }} style={{ backgroundColor: 'red', margin: 9, borderRadius: 10, color: '#000' }}><Text style={{ color: '#fff' }}>Xác nhận</Text></Button>
            <Button onPress={toggleDialog1} style={{ backgroundColor: '#057594', margin: 9, borderRadius: 10, color: '#000' }}><Text style={{ color: '#fff' }}>Hủy</Text></Button>
          </View>
        </Dialog>
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
    width: 100,
    height: 100,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 180,
    marginVertical: 5,

  },
  origin: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    // borderRadius: 20,
    elevation: 10, // Bóng đổ cho Android
    shadowColor: '#000', // Màu của bóng đổ cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  checkbox: {
    backgroundColor: '#78b2a2', // Sử dụng màu nền mong muốn
  },
});