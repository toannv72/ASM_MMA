import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from 'react';

export default function ComInput({ label, theme }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleButtonPress = () => {
        // Xử lý dữ liệu khi nút được nhấn
        console.log('Input Value:', inputValue);
    };
    return (
        <View style={styles.buttonContainer}>
            <TextInput

                style={styles.input}
                placeholder="Nhập dữ liệu"
                onChangeText={handleInputChange}
                value={inputValue}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
});