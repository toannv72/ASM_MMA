import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import CustomButton from '../Components/CustomButton';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { postData } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from './Profiles';
export default function LoginScreen({ }) {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [storedData, setStoredData] = useState([]);
  
    const handleProfileNavigation = () => {
        // Chuyển đến trang Profile trong Tab Navigation
        navigation.navigate('SignUp');
    };
    // AsyncStorage.removeItem('@myKey');
    // console.log('data user ', storedData)
    useEffect(() => {
        const loadStoredData = async () => {
            try {
                // Load data from AsyncStorage
                const data = await AsyncStorage.getItem('@myKey');
                if (data !== null) {
                    setStoredData(JSON.parse(data));
                    console.log('Data User successfully:', data);
                } else {
                    console.log('No data found in AsyncStorage.');
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };
        loadStoredData();

    }, [email]);
    const handleLogin = () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email.');
            emailInputRef.current.focus();
            return;
        }

        if (!password) {
            Alert.alert('Error', 'Please enter your password.');
            passwordInputRef.current.focus();
            return;
        }

        postData('/users/login', {
            "email": email,
            "password": password,
        })
            .then((e) => {
                console.log("data", JSON.stringify([e]));
                AsyncStorage.setItem('@myKey', JSON.stringify([e]));
                console.log('Data saved successfully!');
                navigation.navigate('Homes', { screen: 'home' })

            })
            .catch((error) => {
                // navigation.navigate('Homes', { screen: 'home' })
                console.log(error);
                Alert.alert('Error', 'Wrong account or password!');
            });

    };

    return (
        <View style={styles.container}>
            {/* <ProfileScreen /> */}
            <View style={styles.body}>
                <Text style={{ fontSize: 26, marginTop: 30, }}> Well come back </Text>
                <View style={{ margin: 20 }} />


                <TextInput
                    ref={emailInputRef}
                    label="Email"
                    mode="outlined"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"
                    left={<TextInput.Icon icon="email" />}
                    onSubmitEditing={() => passwordInputRef.current.focus()}
                />
                <View style={{ margin: 10 }} />
                <TextInput
                    ref={passwordInputRef}
                    label="Password"
                    mode="outlined"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                    onSubmitEditing={handleLogin}
                    left={<TextInput.Icon icon="lock" />}

                />
                <View style={{ margin: 10 }} />
                <CustomButton
                    title='Log in'
                    height={50}
                    onPress={() => handleLogin()} />
                <View>
                    <View style={{ margin: 10 }} />

                    <Text style={{ textAlign: 'right' }}>For got your password ?</Text>
                </View>
                <View style={{ margin: 10 }} />
                <View>
                    <Text style={{ textAlign: 'center' }}>-------------------   or continue with   -------------------</Text>
                </View>
                <View style={{ margin: 10 }} />
                <Text style={{ textAlign: 'center' }} onPress={handleProfileNavigation}>Don’t have account? Signup</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    body: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start',

    }
});
