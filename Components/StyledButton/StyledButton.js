import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

const StyledButton = (props) => {
    const { type, contant, onPress } = props;

    const bgColor = type === 'primary' ? 'blue' : 'maroon';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: bgColor }]}
                onPress={() => onPress()}
            >
                <Text style={styles.text}>{contant}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
