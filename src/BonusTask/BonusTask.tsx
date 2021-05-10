import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import s from './BonusTask.module.css';
import {DataType, ItemType} from '../App';

type PropsType = {
    data: DataType
    isCollapsed: boolean
    onClickHandler: () => void
}

function BonusTask(props: PropsType) {

    const itemsToRenderIfCollapsed = props.data.slice(0, 3).map((row: ItemType) => (
        <TableRow key={row.id}>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">🌟 {row.stars}</TableCell>
            <TableCell align="right">🍴 {row.forks}</TableCell>
        </TableRow>
    ));

    const itemsToRenderIfNotCollapsed = props.data.map((row: ItemType) => (
        <TableRow key={row.id}>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">🌟 {row.stars}</TableCell>
            <TableCell align="right">🍴 {row.forks}</TableCell>
        </TableRow>
    ))


    return (
        <div className={s.container}>
            <Button variant='contained' color='secondary' onClick={props.onClickHandler}>
                {props.isCollapsed ? 'See More' : 'See Less'}
            </Button>
            <Paper elevation={3} className={s.app}>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Name</b></TableCell>
                                <TableCell align="right">🌟 <b>Stars</b></TableCell>
                                <TableCell align="right"> 🍴 <b>Forks</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.isCollapsed ? itemsToRenderIfCollapsed : itemsToRenderIfNotCollapsed
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>

    )
}

export default BonusTask;
