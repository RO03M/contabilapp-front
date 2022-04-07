import { TableCell, TableHead, TableRow } from "@mui/material";

const Head = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell/>
                <TableCell>Nome</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>CPF/CNPJ</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Celular</TableCell>
                <TableCell>Ações</TableCell>
            </TableRow>
        </TableHead>
    );
}

export default Head;