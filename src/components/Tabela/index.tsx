import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@mui/material';

interface Props {
    nomeLinguagem: string | undefined,
    linguagemImperativa: string | undefined,
    linguagemOO: string | undefined,
    linguagemFuncional: string | number[] | undefined,
    linguagemProcedural: string | undefined
}

export default function Tabela({
    nomeLinguagem,
    linguagemImperativa,
    linguagemOO,
    linguagemFuncional,
    linguagemProcedural
}: Props) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {nomeLinguagem && <TableCell align="center" sx={{fontWeight: 'bold'}}>Nome</TableCell>}
                        {linguagemImperativa && <TableCell align="center" sx={{fontWeight: 'bold'}}>Uso Imperativo</TableCell>}
                        {linguagemOO && <TableCell align="center" sx={{fontWeight: 'bold'}}>Orientação a Objeto</TableCell>}
                        {linguagemFuncional && <TableCell align="center" sx={{fontWeight: 'bold'}}>Functional</TableCell>}
                        {linguagemProcedural && <TableCell align="center" sx={{fontWeight: 'bold'}}>Procedural</TableCell>}
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {nomeLinguagem && <TableCell align="center">{nomeLinguagem}</TableCell>}
                        {linguagemImperativa && <TableCell align='center'>{linguagemImperativa}</TableCell>}
                        {linguagemOO && <TableCell align='center'>{linguagemOO}</TableCell>}
                        {linguagemFuncional && <TableCell align='center'>{linguagemFuncional}</TableCell>}
                        {linguagemProcedural && <TableCell align='center'>{linguagemProcedural}</TableCell>}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
