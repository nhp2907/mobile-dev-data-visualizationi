import {
    BarChart,
    LineChart,
} from "react-native-chart-kit";
import {View, Text, Dimensions} from 'react-native'
import React from "react";
import {ChartNameStyle, config, data, style} from "../../common/constant";

function BarChartDemo ()  {
    return (
        <>
            <Text style={style.header}>Bar Chart</Text>
            <BarChart
                data={{
                    labels:
                        ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={220}
                yAxisLabel={'Rs'}
                chartConfig={config}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
}

export default BarChartDemo
