import ProgressChart, {
    BarChart,
    LineChart, PieChart,
} from "react-native-chart-kit";
import {View, Text, Dimensions} from 'react-native'
import React from "react";
import {ChartNameStyle, config, data, style} from "../../common/constant";

function PieChartDemo ()  {

    const data = [
        {
            name: "January",
            population: 20.10,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "February",
            population: 81.13,
            color: "#ff6f00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "March",
            population: 68.16,
            color: "#a521b0",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "April",
            population: 55.19,
            color: "#e160ea",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "May",
            population: 12.3,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "June",
            population: 12.3,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    return (
        <>
            <Text style={style.header}>Pie Chart</Text>
            <PieChart
                data={data}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={config}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </>
    );
}

export default PieChartDemo
