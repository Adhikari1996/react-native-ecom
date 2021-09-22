import React from 'react';
import { view, StyleSheet } from 'react-native'
import colors from '../config/colors';

function Card({title,subtitle,image}) {
    return (
        <View style={styles.card}>
           <Image source={require(image)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.while,
        marginBottom:20
    }
})

export default Card;

