import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.userText} onPress={() => navigation.navigate('ViewImage')}>Login User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.userText}>Register User</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        borderRadius: 20,
        marginVertical: 14,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        borderRadius: 20,
    },
    userText: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 18,
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        top: '10%',
        position: 'absolute',
        alignItems: 'center'
    },
    logoText: {
        color: '#fc5c65',
        top: 18,
        ...Platform.select({
            ios: {
                fontSize: 25,
                fontFamily: 'Avenir',
                fontWeight: '600'
            },
            android: {
                fontSize: 25,
                fontFamily: 'Roboto',
                fontWeight: '600'
            }
        })
        // fontSize: 16
    }
})

export default WelcomeScreen;