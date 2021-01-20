import {
    LineChart,
} from "react-native-chart-kit";
import {View, Text, Dimensions, StyleSheet} from 'react-native'
import React from "react";
import {ChartNameStyle, config, data, style} from "../../common/constant";

function LinearChartDemo ()  {
    return (
        <>
            <Text style={style.header}>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={'Rs'}
                chartConfig={config}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
}
export default LinearChartDemo
