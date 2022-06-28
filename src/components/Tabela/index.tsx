import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import linguagensData from '../../linguagens.json';
// import { ILinguagens } from '../../types/ILinguagens';



export default function Tabela() {

    const [linguagens, setLinguagens] = useState(linguagensData);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableBody>
                    {linguagens.map(linguagem => (

                        <TableRow
                            key={linguagem.Language}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="linguagem">
                                {linguagem['Intended use']}
                            </TableCell>
                            <TableCell align="right">{linguagem['Intended use']}</TableCell>
                            <TableCell align='right'>{linguagem.Imperative}</TableCell>
                            <TableCell align='right'>{linguagem['Object-oriented']}</TableCell>
                            <TableCell align='right'>{linguagem.Functional}</TableCell>
                            <TableCell align='right'>{linguagem.Procedural}</TableCell>
                            <TableCell align='right'>{linguagem.Generic}</TableCell>
                            <TableCell align='right'>{linguagem.Reflective}</TableCell>
                            <TableCell align='right'>{linguagem['Event-driven']}</TableCell>
                            <TableCell align='right'>{linguagem['Other paradigm(s)']}</TableCell>
                            <TableCell align='right'>{linguagem['Standardized?']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
