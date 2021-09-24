import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        borderRadius: 20,
        marginVertical: 14,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 18,
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})

export default AppButton;