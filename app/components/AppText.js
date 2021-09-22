import React from 'react';
import { Text,StyleSheet,Platform } from 'react-native';

function AppText({ Children }) {
    return (
        <Text>
            {Children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        f
    }
})

export default AppText;