import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Input } from '@rneui/themed';
import { Button, TextInput } from 'react-native-paper';

export const NotiCreating = () => {
    const [option, setOption] = useState('');
    return (
        <View style={style.main}>
            <Card containerStyle={{ ...style.category, ...style.cartShadow }}>
                <Text style={style.cateTitle}>Choose category</Text>
                <View style={style.cateOptions}>
                    <Button
                        style={option === 'Grooming' ? style.optionhightlight : style.option}
                        onPress={() => setOption('Grooming')}
                    >
                        <Text style={{ color: option === 'Grooming' ? '#F6F6F6' : 'black' }}>Grooming</Text>
                    </Button>
                    <Button
                        style={option === 'Medicine' ? style.optionhightlight : style.option}
                        onPress={() => setOption('Medicine')}
                    >
                        <Text style={{ color: option === 'Medicine' ? '#F6F6F6' : 'black' }}>Medicine</Text>
                    </Button>
                    <Button
                        style={option === 'Appoint' ? style.optionhightlight : style.option}
                        onPress={() => setOption('Appoint')}
                    >
                        <Text style={{ color: option === 'Appoint' ? '#F6F6F6' : 'black' }}>Appoint</Text>
                    </Button>
                    <Button
                        style={option === 'Vaccine' ? style.optionhightlight : style.option}
                        onPress={() => setOption('Vaccine')}
                    >
                        <Text style={{ color: option === 'Vaccine' ? '#F6F6F6' : 'black' }}>Vaccine</Text>
                    </Button>
                </View>
            </Card>
            <View style={style.detail}>
                <Text style={style.titleDetail}>Enter Details</Text>
                <View style={{ display: 'flex', gap: 15 }}>
                    <TextInput placeholder="Name" style={{ backgroundColor: '#F6F6F6', borderWidth: 1 }}></TextInput>
                    <TextInput
                        placeholder="Number of usage"
                        style={{ backgroundColor: '#F6F6F6', borderWidth: 1 }}
                    ></TextInput>
                    <TextInput placeholder="Age" style={{ backgroundColor: '#F6F6F6', borderWidth: 1 }}></TextInput>
                </View>
                <View style={style.reminder}>
                    <Button style={style.reminderBtn}>
                        <Text style={{ color: '#FFF', fontWeight: '700', fontSize: 20 }}>Set Reminder</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    main: {
        width: '100%',
        height: 511,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    detail: {
        width: '100%',
    },

    category: {
        width: '100%',
    },

    cartShadow: {
        borderRadius: 15,
        elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
        shadowColor: 'rgba(0, 0, 1, 1.2)', // Màu của bóng
        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
        shadowOpacity: 0.8, // Độ đậm của bóng
        shadowRadius: 4, // Bán kính của bóng
    },

    cateTitle: {
        fontSize: 32,
        fontWeight: '500',
        marginLeft: 20,
        marginBottom: 10,
    },

    cateOptions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    option: {
        borderWidth: 2,
        borderColor: '#8C8EA3',
    },

    optionhightlight: {
        borderWidth: 2,
        borderColor: '#8C8EA3',
        backgroundColor: '#8C8EA3',
    },

    titleDetail: {
        fontSize: 32,
        fontWeight: '500',
        marginLeft: 40,
        marginBottom: 10,
    },

    reminder: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },

    reminderBtn: {
        width: '50%',
        borderRadius: 10,
        borderColor: '#8C8EA3',
        backgroundColor: '#8C8EA3',
    },
});
