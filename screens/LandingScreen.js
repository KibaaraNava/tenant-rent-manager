import React from 'react';
import {  Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';


const LandingScreen = () => {

    return(
        <ScrollView contentContainerStyle={styles.container}>
            {/*Create Account Card */}
            <TouchableOpacity style={[styles.cardContainer, styles.signUpCard]}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>
                        SignUp
                    </Text>
                    <Text style={styles.cardDescription}>
                        Hey Alumni! Create your account to join Moringa Connect.
                    </Text>
                </View>
            </TouchableOpacity>
            {/*Login Card */}
            <TouchableOpacity style={[styles.cardContainer, styles.loginCard]}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Login
                    </Text>
                    <Text style={styles.cardDescription}>
                        Hey Alumni! Create your account to join Moringa Connect.
                    </Text>
                </View>
            </TouchableOpacity>
            {/*Explore Card */}
            <TouchableOpacity style={[styles.cardContainer, styles.exploreCard]}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Explore
                    </Text>
                    <Text style={styles.cardDescription}>
                        Moringa Connect offers a variety of features.Swipe to explore!
                    </Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles= StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#F4F4F4',
    },
    cardContainer: {
        width: '90%',
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 5,
    },
    card: {
        padding: 20,
        alignItems: 'center',
        borderRadius: 15,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',

    },
    cardDescription: {
        fontSize: 16,
        color: '#f9f9f9',
        textAlign: 'center',
    },
    signUpCard: {
        backgroundColor: "#4CAF50",//Green
    },
    loginCard: {
        backgroundColor: "#FF5722",//Orange
    },
    exploreCard: {
        backgroundColor: "#3F51B5",//Blue
    }
});

export default LandingScreen;