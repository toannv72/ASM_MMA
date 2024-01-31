import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';

const PetProfile = ({ handCloseShow }) => {
    return (
        <View style={{backgroundColor: '#fff',}} >

            <View style={styles.header}>
                <Text style={styles.backButton} onPress={handCloseShow}>&lt;</Text>
                <Text style={styles.editButton}>✎</Text>
            </View>
            <Image source={{ uri: 'https://vienmoitruong5014.org.vn/wp-content/uploads/2023/03/anh-cho-con-de-thuong_022907461.jpg' }} style={styles.petImage} />
            <View style={{ borderTopEndRadius: 30, borderTopLeftRadius: 30, backgroundColor: '#fff', marginTop: -30 }}>
                <Text style={styles.petName}>Dongo</Text>
                <View style={styles.healthCondition}>
                    <Card containerStyle={{
                        borderRadius: 10,
                        borderColor: '#000',
                        shadowRadius: 10,
                        padding: 15,
                        height: 60,

                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Card.Title style={{ fontSize: 10, color: '#000', padding: 0 }}>Age</Card.Title>
                            <Card.Title style={{ fontSize: 12, color: '#000', padding: 0 }}>2 year</Card.Title>
                        </View>
                    </Card>
                    <Card containerStyle={{
                        borderRadius: 10,
                        borderColor: '#000',
                        shadowRadius: 10,
                        padding: 15,
                        height: 60,

                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Card.Title style={{ fontSize: 10, color: '#000' }}>Weight</Card.Title>
                            <Card.Title style={{ fontSize: 12, color: '#000' }}>4 kg</Card.Title>
                        </View>
                    </Card>
                    <Card containerStyle={{
                        borderRadius: 10,
                        borderColor: '#000',
                        shadowRadius: 10,
                        padding: 15,
                        height: 60,

                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Card.Title style={{ fontSize: 10, color: '#000' }}>Gender</Card.Title>
                            <Card.Title style={{ fontSize: 12, color: '#000' }}>Male</Card.Title>
                        </View>
                    </Card>
                    <Card containerStyle={{
                        borderRadius: 10,
                        borderColor: '#000',
                        shadowRadius: 10,
                        padding: 15,
                        height: 60,

                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Card.Title style={{ fontSize: 10, color: '#000' }}>Character</Card.Title>
                            <Card.Title style={{ fontSize: 12, color: '#000' }}>Calm</Card.Title>
                        </View>
                    </Card>

                </View>
            </View>
            <Text style={styles.healthActivityTitle}>Health activity</Text>
            <View style={styles.activityItem}>
                <Text>Vaccination</Text>
                <Text>status: not yet</Text>
            </View>
            <View style={styles.activityItem}>
                <Text>Grooming</Text>
                <Text>status: not yet</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    backButton: {
        fontSize: 24,
        color: '#000',
    },
    editButton: {
        fontSize: 24,
        color: 'red',
    },
    petImage: {
        width: '100%',
        height: 200, // Adjust the height as needed
        resizeMode: 'cover',
    },
    petName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    healthCondition: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    conditionItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    healthActivityTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    activityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 5,
    },
});

export default PetProfile;