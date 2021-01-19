import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';


import { generateRows } from '../../../demo-data/generator';

export default () => {
    const [columns] = useState([
        { name: 'name', title: 'Name' },
        { name: 'gender', title: 'Gender' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
    ]);
    const [rows] = useState(generateRows({ length: 8 }));

    return (
        <Paper>
            <Grid
                rows={rows}
                columns={columns}
            >
                <SortingState
                    defaultSorting={[{ columnName: 'city', direction: 'asc' }]}
                />
                <IntegratedSorting />
                <Table />
                <TableHeaderRow showSortingControls />
            </Grid>
        </Paper>
    );
};