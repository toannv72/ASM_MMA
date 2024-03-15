import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import gioHang from '../../assets/gioHang.png';
import dataList from '../../db';
import { FAB, Portal, PaperProvider, Button, RadioButton } from 'react-native-paper';
import { Dialog } from 'react-native-elements';
import { CheckBox } from '@rneui/themed';
export default function HomeScreen2({ navigation }) {
    const [data, setData] = useState([]);
    const [likedProducts, setLikedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState("A");
    const [storedData, setStoredData] = useState([]);
    const scrollViewRef = useRef();
    const [state, setState] = useState({ open: false });
    const [visible1, setVisible1] = useState(false);
    const [categories, setCategories] = useState([
        { id: 1, name: 'Phong lan', checked: false },
        { id: 2, name: 'Địa lan', checked: false },
        { id: 3, name: 'Bán địa lan', checked: false },
        // Thêm các thể loại khác nếu cần
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const toggleDialog = () => setVisible1(!visible1);


    const handleCheckboxToggle = (categoryId) => {
        const updatedCategories = categories.map(category => {
            if (category.id === categoryId) {
                return { ...category, checked: !category.checked };
            }
            return category;
        });
        setCategories(updatedCategories);
    };

    // lọc
    const handleApplyFilter = () => {
        // Thực hiện các xử lý liên quan đến việc áp dụng bộ lọc ở đây
        const selectedCategories = categories.filter(category => category.checked);
        const filteredList = dataList.filter(item => {
            // Kiểm tra xem danh mục của mỗi sản phẩm có tồn tại trong danh sách các danh mục đã chọn hay không
            return selectedCategories.some(selectedCategory => item.category === selectedCategory.name);
        });
        // Cập nhật dữ liệu hiển thị
        if (selectedIndex == 0) {
            const sortedData = sortByPriceAscending(filteredList);
            setData(sortedData);
            loadStoredData(sortedData);
        } else {
            const sortedData = sortByPriceDescending(filteredList);
            setData(sortedData);
            loadStoredData(sortedData);
        }
        toggleDialog();
    };

    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };

    const { open } = state;

    const scrollToTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };

    const loadStoredData = async (data) => {
        try {
            const dataAsyncStorage = await AsyncStorage.getItem('@Like');
            if (dataAsyncStorage !== null) {
                setStoredData(JSON.parse(dataAsyncStorage));
                const resultArray = data.map((element) => {
                    const elementString = JSON.stringify(element);

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
    // bé đến lớn
    const sortByPriceAscending = (data) => {
        const sortedData = [...data]; // Tạo một bản sao của mảng để không ảnh hưởng đến mảng gốc
        return sortedData.sort((a, b) => a.price - b.price);
    };
    // lớn đến bé
    const sortByPriceDescending = (data) => {
        const sortedData = [...data];
        return sortedData.sort((a, b) => b.price - a.price); // Thay đổi hàm so sánh để sắp xếp giảm dần
    };

    // useFocusEffect(
    //     useCallback(() => {
    //         // scrollToTop2()
    //         console.log(dataList);

    //         scrollToTop()
    //         setCurrentPage("A")
    //         const sortedData = sortByPriceAscending(dataList);
    //         setData(sortedData);
    //         loadStoredData(sortedData);
    //         return () => {
    //         };
    //     }, []),

    // );

    useEffect(() => {
        console.log(dataList);

        scrollToTop()
        setCurrentPage("A")
        const sortedData = sortByPriceAscending(dataList);
        setData(sortedData);
        loadStoredData(sortedData);
        return () => {
        };
    }, []);
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
        <PaperProvider >
            <View style={styles.container} >

                <ScrollView ref={scrollViewRef}>
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

                    <View style={{ height:220 }}></View>
                </ScrollView>
                <Portal >
                    <FAB.Group
                        fabStyle={{ marginBottom: 130, marginRight: 15 }}
                        open={open}
                        visible
                        icon={open ? 'plus' : 'menu'}
                        actions={[

                        ]}
                        onStateChange={() => { }}
                        onPress={() => {
                            toggleDialog1()
                        }}
                    />
                </Portal>
                <Dialog
                    isVisible={visible1}
                    onBackdropPress={toggleDialog1}
                >
                    <Dialog.Title title="Lọc" />
                    <View>
                        <RadioButton.Group
                            onValueChange={index => setSelectedIndex(index)}
                            value={selectedIndex}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <RadioButton.Item label="Giá tăng dần" value={0} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <RadioButton.Item label="Giá giảm dần" value={1} />
                            </View>
                        </RadioButton.Group>
                    </View>
                    {categories.map(category => (
                        <CheckBox
                            key={category.id}
                            title={category.name}
                            checked={category.checked}
                            onPress={() => handleCheckboxToggle(category.id)}
                        />
                    ))}
                    <Dialog.Actions>
                        <Button onPress={handleApplyFilter}>Áp dụng</Button>
                    </Dialog.Actions>
                </Dialog>
            </View>
        </PaperProvider>
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