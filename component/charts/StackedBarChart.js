import {View, Text, Dimensions} from 'react-native'
import React from "react";
import {ChartNameStyle, config, data, style} from "../../common/constant";
import ContributionGraph, {ProgressChart, StackedBarChart} from "react-native-chart-kit";

function StackedBarChartDemo ()  {
    return (
        <>
            <Text style={style.header}>Stacked Bar Chart</Text>
            <StackedBarChart
                data={{
                    labels: ['Test1', 'Test2'],
                    legend: ['L1', 'L2', 'L3'],
                    data: [
                        [60, 60, 60],
                        [30, 30, 60],
                    ],
                    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
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

export default StackedBarChartDemo
