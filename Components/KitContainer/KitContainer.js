import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/StyledButton';
import styles from './style';

const KitContainer = () => {
    return (
        <>
            <ImageBackground
                source={require('../../assets/images/homeKit1.jpg')}
                style={styles.image}
            />

            <View style={styles.kitContainer}>
                <View style={styles.titles}>
                    <Text style={styles.title}>Home Kit 2021</Text>
                    <Text style={styles.subTitle}>Starting at $59.00</Text>
                </View>
                <StyledButton></StyledButton>
            </View>


        </>
    )
}
export default KitContainer;
