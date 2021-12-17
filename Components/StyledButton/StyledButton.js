import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './style'

const StyledButton = () => {
    return (
        <View>
            <Pressable
                style={styles.button}
                onPress={() => {
                    console.warn('hey there')
                }}
            >
                <Text>Custome Order</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
