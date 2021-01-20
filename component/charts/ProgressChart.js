import {View, Text, Dimensions} from 'react-native'
import React from "react";
import {ChartNameStyle, config, data, style} from "../../common/constant";
import ContributionGraph, {ProgressChart} from "react-native-chart-kit";

function ProgressChartDemo ()  {
    return (
        <>
            <Text style={style.header}>Progress Chart</Text>
            <ProgressChart
                data={[0.4, 0.6, 0.8]}
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

export default ProgressChartDemo
