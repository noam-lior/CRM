import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#F7CE3E",
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "theme.palette.background.default",
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
    const clients = props.clients
    const columns=["Name","Surname","Country","First Contact","Email","Sold","Owner"]
    const keys=["name","surname","country","firstContact","emailType","sold","owner"]
    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {columns.map(c=><StyledTableCell align="left">{c}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(row => (
                        <StyledTableRow key={row._id}>
                            {keys.map(key=><StyledTableCell align="left"> {row[key]} </StyledTableCell>)}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}