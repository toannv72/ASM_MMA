import { StyleSheet, View, Text, ScrollView, Image, Keyboard } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { getData } from '../api/api';
import { useFocusEffect } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import gioHang from '../../assets/gioHang.png';

export default function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState("A");
    const [storedData, setStoredData] = useState([]);

    const loadStoredData = async (data) => {
        try {
            const dataAsyncStorage = await AsyncStorage.getItem('@Like');
            if (dataAsyncStorage !== null) {
                setStoredData(JSON.parse(dataAsyncStorage));
                const resultArray = data.map((element) => {
                    const elementString = JSON.stringify(element);
                    console.log(element);
                    return JSON.parse(dataAsyncStorage).some((item) => item.id === element.id);
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
            setCurrentPage("A")
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
    const renderContent = () => {
        switch (currentPage) {
            case "A":
                getData('/orchids')
                    .then((data) => {
                        setData(data.data);
                        loadStoredData(data.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                return;
            case "B":
                getData('/orchids?category=Quý Hiếm')
                    .then((data) => {
                        setData(data.data);
                        loadStoredData(data.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                return;
            case "C":
                getData('/orchids?category=lâu năm')
                    .then((data) => {
                        setData(data.data);
                        loadStoredData(data.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                return;
            default:
                return;
        }
    };
    useEffect(() => {
        renderContent();
    }, [currentPage]);

    const getButtonStyle = (page) => {

        return currentPage === page ? styles.selectedButton : styles.button;
    };
    const getTextStyle = (page) => {
        return currentPage === page ? styles.selectedButtonText : styles.buttonText;
    };
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
    const handleSearchbarFocus = () => {

        navigation.navigate("Search", { itemData: 1 });
    };

    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={{ marginTop: 30, marginLeft: 20, marginRight: 20, padding: 15, borderWidth: 2, borderColor: 'gray', borderRadius: 15, backgroundColor: "white" }}
                onPress={handleSearchbarFocus}
            >
                <Text>Search</Text>
            </TouchableOpacity>
            <SafeAreaView>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.tab}>
                        <TouchableOpacity
                            style={getButtonStyle("A")}
                            onPress={() => setCurrentPage("A")}
                        >
                            <Text style={getTextStyle("A")}>Tất cả</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={getButtonStyle("B")}
                            onPress={() => setCurrentPage("B")}
                        >
                            <Text style={getTextStyle("B")}>Quý hiếm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={getButtonStyle("C")}
                            onPress={() => setCurrentPage("C")}
                        >
                            <Text style={getTextStyle("C")}>Lâu năm</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <ScrollView >
                <View style={{ flexDirection: 'column-reverse', rowGap: 10, padding: 14 }}>
                    {data.length == 0 ? <View>

                        <View>
                            <Image
                                style={{ width: "100%", height: 400 }}
                                source={gioHang}
                            />
                            <Text style={{ color: '#fff', fontSize: 20, padding: 30, textAlign: 'center' }}>
                               
                            </Text>
                        </View>

                    </View> : <></>}
                    {data.map((data, index) => (
                        <View style={{ padding: 10 }} key={index}>
                            <TouchableOpacity
                                style={styles.origin}

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
    },
    tab: {
        flexDirection: "row",
        marginLeft: 10,
    },
    button: {
        width: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    selectedButton: {
        width: 120,
        backgroundColor: "#000",
        borderRadius: 10,
        padding: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    buttonText: {
        padding: 5,
        fontWeight: "400",
        fontSize: 16,
        color: "#000",
        textAlign: "center",
    },
    selectedButtonText: {
        padding: 5,
        fontWeight: "400",
        fontSize: 16,
        color: "white",
        textAlign: "center",
    },
    content: {
        padding: 10,
    },
});