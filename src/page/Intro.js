import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export const IntroSlider = ({ navigation }) => {
    const [showSlider, setShowSlider] = useState(false);


    const slides = [
        {
            key: '1',
            title: 'Personalize your preferences',
            text: 'Customize your ideal pet by setting species, age, size and temperament',
            image: require('../../assets/1.jpg'),
            backgroundColor: '#59b2ab',
        },
        {
            key: '2',
            title: 'Discover clinic near you',
            text: 'Browse your profile, photo, and descriptions to find clinics that match your cites',
            image: require('../../assets/2.jpg'),
            backgroundColor: '#febe29',
        },
        {
            key: '3',
            title: 'Connect and notify',
            text: 'Connect and notify owners of vaccination schedules and pet services',
            image: require('../../assets/3.jpg'),
            backgroundColor: '#22bcb5',
        },
    ];

    const renderSlide = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={item.image}
                >
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.text}</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    };

    const handleDone = () => {
        // Handle logic when the user completes the intro

        navigation.navigate('Survey')

    };

    const handleSkip = () => {

        navigation.navigate('Homes', { screen: 'home' })
    };
    return (
        <View style={styles.introContainer}>
            {showSlider ? (

                <View>
                    <Text>I am intro component</Text>
                </View>
            ) : (
                <AppIntroSlider
                    // renderPagination={renderPagination}
                    data={slides}
                    renderItem={renderSlide}
                    activeDotStyle={{ backgroundColor: 'white', width: 30 }}
                    onSkip={handleSkip}
                    onDone={handleDone}
                    showPrevButton={true}
                    showSkipButton={true}
                // renderDoneButton={renderDoneButton}
                // renderNextButton={renderNextButton}
                // showPrevButton={true}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    introContainer: {
        flex: 1,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: 'whitesmoke',
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        color: 'white',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 500,
        flex: 1,
    },
});