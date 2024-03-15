import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button, ProgressBar, Searchbar } from 'react-native-paper';

import { useCallback, useEffect, useState } from 'react';
import { Card, Divider } from '@rneui/themed';
import PetProfile from './PetProfile';
import { getData } from '../api/api';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import notF from '../../assets/notF.png';
import dataList from '../../db';
import { Rating } from 'react-native-elements';

export default function Detail({ navigation }) {
    const [data, setData] = useState({});
    const [likedProducts, setLikedProducts] = useState(null);
    const [storedData, setStoredData] = useState([]);
    const route = useRoute();
    const { itemData } = route.params;
    const loadStoredData = async (data) => {
        try {
            const dataAsyncStorage = await AsyncStorage.getItem('@Like');
            setStoredData(JSON.parse(dataAsyncStorage));

            if (dataAsyncStorage !== null) {
                const storedData = JSON.parse(dataAsyncStorage);
                // Check if the data.id is present in the storedData array
                const isLiked = storedData.some((item) => item.id === data.id);
                setLikedProducts(isLiked);
            } else {
                setStoredData([]);
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            const filteredList = dataList.filter(item => item.id === itemData)
            setData(...filteredList);
            loadStoredData(...filteredList);


            return () => {
            };
        }, []),

    );
    const handleLike = (index, product) => {

        setLikedProducts(!likedProducts);
        // Kiểm tra xem sản phẩm đã được thích hay chưa
        const isLiked = storedData.some(item => item.id === product.id);
        // Nếu chưa tồn tại, thì thêm vào mảng storedData
        if (!isLiked) {
            const updatedStoredData = [...storedData, product];
            AsyncStorage.setItem('@Like', JSON.stringify(updatedStoredData));
            return
        }
        return

    };
    const handleUnlike = (index, product) => {
        setLikedProducts(!likedProducts);
        // Loại bỏ sản phẩm khỏi mảng storedData
        const updatedStoredData = storedData.filter(item => item.id !== product.id);
        setStoredData(updatedStoredData)
        AsyncStorage.setItem('@Like', JSON.stringify(updatedStoredData));
        return
    };
    return (
        <View style={styles.container} >
            {data.id == null ?
                <View>
                    <Image
                        style={{ width: "100%", height: 400 }}
                        source={notF}
                    />
                    <Text style={{ color: '#fff', fontSize: 20, padding: 30, textAlign: 'center' }}>
                        Không Tìm Thấy Sản Phẩm
                    </Text>
                </View>
                :
                <ScrollView >
                    <View style={{ flexDirection: 'column-reverse', rowGap: 10, padding: 14 }}>

                        <View style={styles.origin}>
                            <Image source={{ uri: data.image }} style={styles.image} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ ...styles.origin, rowGap: 10, padding: 14, width: '95%', }}>
                            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{data.name}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View >
                                <Rating showRating fractions={1} startingValue={1.3} />
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{`Xuất xứ : ${data.origin}`}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{`Thể loại: ${data.category}`}</Text>
                                </View>
                                <View >
                                    {likedProducts ? <Entypo onPress={() => handleUnlike("index", data)} name="heart" size={40} color="red" /> : <Entypo onPress={() => handleLike("index", data)} name="heart-outlined" size={40} color="#555555" />}
                                </View>
                            </View>
                            <View>
                                <Divider width={2} inset={true} insetType="middle" />
                                <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Chi tiết:</Text>
                                <Text style={{ fontSize: 20 }}>

                                    {data.detail}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 120 }}></View>
                </ScrollView>}

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
        borderRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        fontSize: 25,
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