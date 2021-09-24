import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.logoText}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login user" onPress={() => navigation.navigate('ViewImage')} />
                <AppButton title="Register user" color="secondary" onPress={() => navigation.navigate('ListingDetail')} />
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
        fontSize: 25,
        fontWeight: '600',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})

export default WelcomeScreen;