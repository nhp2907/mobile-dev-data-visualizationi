import React from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import LinearChartDemo from "../charts/LinearChart";
import LineChartDemo from "../charts/LineChart";
import BarChartDemo from "../charts/BarChart";
import ProgressChartDemo from "../charts/ProgressChart";
import StackedBarChartDemo from "../charts/StackedBarChart";
import PieChartDemo from "../charts/PieChart";
import HeatMapDemo from "../charts/HeatMap";

function ChartScreen(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <LinearChartDemo />
                        <LineChartDemo/>
                        <ProgressChartDemo />
                        <BarChartDemo />
                        <StackedBarChartDemo />
                        <PieChartDemo />
                        <HeatMapDemo />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ChartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 16,
    },
});
