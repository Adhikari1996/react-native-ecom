import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        width: 30,
        height: 30,
        backgroundColor: colors.primary,
        top: 9,
        left: 20,
        position: 'absolute'
    },
    deleteIcon: {
        width: 30,
        height: 30,
        backgroundColor: colors.secondary,
        top: 9,
        right: 20,
        position: 'absolute'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;