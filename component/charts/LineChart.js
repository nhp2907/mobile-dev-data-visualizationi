import {
    BarChart,
    LineChart,
} from "react-native-chart-kit";
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import React from "react";
import {ChartNameStyle, config, data, style} from "../../common/constant";

function LineChartDemo ()  {
    return (
        <>
            <Text style={styles.header}>Line Chart</Text>
            <LineChart
                data={{
                    labels:
                        ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                            strokeWidth: 2,
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={config}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
}

export default LineChartDemo

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

