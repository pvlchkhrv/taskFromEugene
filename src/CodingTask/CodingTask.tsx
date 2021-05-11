import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {DataType, ItemType} from '../App';

export type CodingTaskPropsType = {
    data: DataType;
}

function CodingTask(props: CodingTaskPropsType) {

    const rows = props.data;
    return (
        <Paper elevation={3}>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell align="right" >🌟 <b>Stars</b></TableCell>
                            <TableCell align="right"> 🍴 <b>Forks</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row: ItemType) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">🌟 {row.stars}</TableCell>
                                <TableCell align="right">🍴 {row.forks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default CodingTask;
