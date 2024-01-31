import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function CustomButton({ title, onPress, height, backgroundColor }) {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        // Thực hiện các hành động khác khi nút được bấm vào
        onPress();
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{ height: height, backgroundColor:  backgroundColor || '#3A3F65', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

// Sử dụng CustomButton trong component cha của bạn
// Ví dụ:
// <CustomButton title="Log in" onPress={() => navigation.navigate('Home')} height={300} />
