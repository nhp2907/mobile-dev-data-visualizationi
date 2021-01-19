import React from 'react'
import {ScrollView, StyleSheet, Text} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";

function ChartScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Chart</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }, text: {
        color: 'black'
    }
})

export default ChartScreen;