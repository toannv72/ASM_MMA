import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button, ProgressBar, Searchbar } from 'react-native-paper';

import { useCallback, useEffect, useState } from 'react';
import { Card } from '@rneui/themed';
import PetProfile from './PetProfile';
import { getData } from '../api/api';
import { useFocusEffect } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Notification({ navigation }) {
    const [data, setData] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [storedData, setStoredData] = useState([]);
    const [run, setRun] = useState(true);

    const loadStoredData = async (data) => {
        try {
            const dataAsyncStorage = await AsyncStorage.getItem('@Like');
            if (dataAsyncStorage !== null) {
                setStoredData(JSON.parse(dataAsyncStorage));
                console.log(JSON.parse(dataAsyncStorage));
                const resultArray = data.map((element) => {
                    const elementString = JSON.stringify(element);
                    return JSON.parse(dataAsyncStorage).some((item) => JSON.stringify(item) === elementString);
                });

                console.log(JSON.parse(dataAsyncStorage));
                console.log('thứ tự like ',resultArray);
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
            getData('/orchids')
            .then((data) => {
                setData(data.data);
                loadStoredData(data.data);

                })
                .catch((error) => {
                    console.log(error);
                })

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

            <ScrollView >
                <View style={{ flexDirection: 'column-reverse', rowGap: 10, padding: 14 }}>
                    {data.map((data, index) => (
                        <View style={styles.origin} key={index}>
                            <Image source={{ uri: data.image }} style={styles.image} />
                            <View style={{ padding: 10 }}>
                                <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{data.name}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View >
                                        <Text>{`Xuất xứ : ${data.origin}`}</Text>
                                        <Text>{`Thể loại: ${data.category}`}</Text>
                                    </View>
                                    <View >
                                        {likedProducts[index] ? <Entypo onPress={() => handleUnlike(index, data)} name="heart-outlined" size={40} color="red" /> : <Entypo onPress={() => handleLike(index, data)} name="heart-outlined" size={40} color="#555555" />}
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ height: 120 }}></View>
            </ScrollView>
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