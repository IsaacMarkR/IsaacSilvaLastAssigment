import React from 'react';
import { useCart } from './CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const tableStyle = {
    backgroundColor: '#f0f0f0',
};

const headerCellStyle = {
    backgroundColor: '#d0d0d0',
    color: '#000000'
};

function CartResume() {
    const { items, removeItem } = useCart();

    return (
        <TableContainer component={Paper} style={tableStyle}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={headerCellStyle}>Producto</TableCell>
                        <TableCell align="right" style={headerCellStyle}>Cantidad</TableCell>
                        <TableCell align="right" style={headerCellStyle}>Acciones</TableCell>
                        <TableCell align="right" style={headerCellStyle}>Foto</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row">
                                {item.title}
                            </TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => removeItem(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell align="right">
                                <img src={item.imageUrl} alt={item.title} style={{ width: '50px', height: '50px' }} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export { CartResume };