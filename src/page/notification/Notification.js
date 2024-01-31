import { AntDesign, Entypo, Feather, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from '@rneui/base';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { NotiItem } from './NotiItem';
import { NotiCreating } from './NotiCreating';

const typeIcon = {
    appointment: <FontAwesome name="stethoscope" size={24} color="black" />,
    vaccination: <Fontisto name="injection-syringe" size={23} color="black" />,
    hotel: <FontAwesome name="building" size={20} color="black" />,
    grooming: <Fontisto name="scissors" size={20} color="black" />,
};

const list = [
    {
        type: 'appointment',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'vaccination',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'hotel',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'grooming',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'appointment',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'vaccination',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'hotel',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
    {
        type: 'grooming',
        date: new Date(2023, 10, 26, 13, 0, 0, 0),
    },
];

const timeFormat = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
});

const dateFormat = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const Notification = ({ navigation }) => {
    const [notiCreating, setNotiCreating] = useState(false);

    function handleNotiCreating() {
        notiCreating ? setNotiCreating(false) : navigation.goBack();
    }

    return (
        <View style={style.main}>
            <View style={style.titleAndDate}>
                <View style={style.titleAndRollback}>
                    <Button style={style.rollbackBtn} onPress={handleNotiCreating}>
                        <AntDesign name="left" size={22} color="#8C8EA3" />
                    </Button>
                    <Text style={style.title}>Notification</Text>
                </View>
                <View style={style.selectedDate}>
                    <Card containerStyle={{ ...style.selectedDateContent, ...style.cartShadow }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{
                                flexDirection: 'row', 
                            }}>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Wed</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>24</Card.Title>
                                    </View>
                                </Card>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Thu</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>25</Card.Title>
                                    </View>
                                </Card>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Fri</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>26</Card.Title>
                                    </View>
                                </Card>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Sat</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>27</Card.Title>
                                    </View>
                                </Card>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Sun</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>28</Card.Title>
                                    </View>
                                </Card>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Mon</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>29</Card.Title>
                                    </View>
                                </Card>
                                <Card containerStyle={{
                                    borderRadius: 15,
                                    borderColor: '#8C8EA3',
                                    shadowRadius: 4,
                                    padding: 10,
                                    height: 80,
                                    width: 80,

                                }}>
                                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>Sun</Card.Title>
                                        <Card.Title style={{ fontSize: 20, color: '#000' }}>30</Card.Title>
                                    </View>
                                </Card>
                            </View>
                        </ScrollView>

                    </Card>
                </View>
            </View>
            {!notiCreating ? (
                <Card containerStyle={{ ...style.list, ...style.cartShadow }}>
                    <View style={style.listHeader}>
                        <View style={style.titleAndInsertBtn}>
                            <Text style={style.listTitle}>Task</Text>
                            <Button style={style.addBtn} onPress={() => setNotiCreating(true)}>
                                <AntDesign name="pluscircleo" size={20} color="#8C8EA3" />
                            </Button>
                        </View>
                        <View>
                            <Text style={style.listDescription}>Add daily reminders and set shedule</Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView style={style.listContent}>
                            {list.map((item, index) => (
                                <NotiItem key={index} index={index}>
                                    <View style={style.itemContent}>
                                        <View style={style.taskType}>
                                            {typeIcon[item.type]}
                                            <Text style={style.typeTitle}>
                                                Booked {capitalizeFirstLetter(item.type)}
                                            </Text>
                                        </View>
                                        <View style={style.taskDateAndTime}>
                                            <View style={style.BellIconAndTime}>
                                                <FontAwesome name="bell-o" size={24} color="black" />
                                                <Text>{timeFormat.format(item.date)}</Text>
                                            </View>
                                            <Text>{dateFormat.format(item.date)}</Text>
                                        </View>
                                    </View>
                                </NotiItem>
                            ))}
                        </ScrollView>
                    </View>
                </Card>
            ) : (
                <NotiCreating />
            )}
        </View>
    );
};

const style = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 10,
    },

    titleAndDate: {
        width: '100%',
    },

    titleAndRollback: {
        height: 48,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },

    rollbackBtn: {
        position: 'absolute',
        left: -10,
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },

    title: {
        position: 'absolute',
        right: 0,
        left: 0,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '600',
    },

    selectedDate: {
        width: '100%',
        height: 136,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    selectedDateContent: {
        width: '100%',
        height: '100%',
    },

    cartShadow: {
        borderRadius: 15,
        elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
        shadowColor: 'rgba(0, 0, 1, 1.2)', // Màu của bóng
        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
        shadowOpacity: 0.8, // Độ đậm của bóng
        shadowRadius: 4, // Bán kính của bóng
    },

    list: {
        width: '100%',
    },

    listHeader: {
        width: '100%',
    },

    titleAndInsertBtn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    listTitle: {
        fontSize: 32,
        fontWeight: '500',
    },

    addBtn: {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    listDescription: {
        fontSize: 16,
        fontWeight: '700',
        color: '#8C8EA3',
        marginBottom: 5,
    },

    listContent: {
        width: '100%',
        height: 395,
    },

    itemContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    taskType: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },

    typeTitle: {
        fontSize: 16,
        fontWeight: '700',
    },

    taskDateAndTime: {
        display: 'flex',
    },

    BellIconAndTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
});
