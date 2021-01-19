import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

function GridScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Grid</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }, text: {
        color: 'black'
    }
})

export default GridScreen;