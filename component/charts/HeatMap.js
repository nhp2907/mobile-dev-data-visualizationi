import {Text, Dimensions} from 'react-native'
import React from "react";
import {config, style} from "../../common/constant";
import {
    ContributionGraph,
} from 'react-native-chart-kit';

function HeatMapDemo ()  {
    return (
        <>
            <Text style={style.header}>Contribution Graph</Text>
            <ContributionGraph
                values={[
                    {date: '2019-01-02', count: 1},
                    {date: '2019-01-03', count: 2},
                    {date: '2019-01-04', count: 3},
                    {date: '2019-01-05', count: 4},
                    {date: '2019-01-06', count: 5},
                    {date: '2019-01-30', count: 2},
                    {date: '2019-01-31', count: 3},
                    {date: '2019-03-01', count: 2},
                    {date: '2019-04-02', count: 4},
                    {date: '2019-03-05', count: 2},
                    {date: '2019-02-30', count: 4},
                ]}
                endDate={new Date('2019-04-01')}
                numDays={105}
                width={Dimensions.get('window').width - 16}
                height={220}
                chartConfig={config}
            />
        </>
    );
}

export default HeatMapDemo
