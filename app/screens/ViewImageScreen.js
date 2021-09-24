import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
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
        top: 9,
        left: 20,
        position: 'absolute'
    },
    deleteIcon: {
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