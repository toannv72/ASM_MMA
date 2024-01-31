import { Card } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const NotiItem = ({ index, children }) => {
    return (
        <View
            style={{
                ...style.viewBackground,
                ...(index % 2 === 0 ? style.viewBackground1 : style.viewBackground2),
            }}
        >
            <Card containerStyle={style.cardContent}>{children}</Card>
        </View>
    );
};

const style = StyleSheet.create({
    viewBackground: {
        height: 80,
        paddingTop: 0,
        marginVertical: 8.5,
        position: 'relative',
        borderRadius: 15,
        elevation: 5, // Tăng độ nâng để tạo bóng mờ (Android)
        shadowColor: 'rgba(0, 0, 1, 1.2)', // Màu của bóng
        shadowOffset: { width: 0, height: 2 }, // Kích thước và hướng của bóng
        shadowOpacity: 0.8, // Độ đậm của bóng
        shadowRadius: 4, // Bán kính của bóng
    },
    viewBackground1: {
        backgroundColor: '#8C8EA3',
    },
    viewBackground2: {
        backgroundColor: '#3A3F65',
    },
    cardContent: {
        borderRadius: 15,
        position: 'absolute',
        top: -15,
        height: '100%',
        width: '95.8%',
    },
});
