import { useEffect, useState } from "react";
import { Box, Fab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddModal from "./addModal";
import Board from "./board";
import TableToolbar from "modules/tableToolbar";
import DeleteModal from "./deleteModal";
import { Get } from "requests";

const ClientsPage = () => {
    
    const [modal, SetModal] = useState(false);
    const [deleteModal, SetDeleteModal] = useState(false);
    const [clients, SetClients] = useState([]);
    const [search, SetSearch] = useState("");
    const [itemsToDelete, SetItemsToDelete] = useState([]);
    
    const GetData = async () => {
        const response = await Get("/users");
        SetClients([...response?.users]);
        console.log([...response]);
    }

    const Delete = async () => {
        // await Delete(itemsToDelete);
        GetData();
        SetItemsToDelete([]);
    }

    const HandleItemSelect = id => SetItemsToDelete([...itemsToDelete, id]);

    const HandleItemUnselect = id => SetItemsToDelete([...itemsToDelete.filter(x => x !== id)]);

    useEffect(GetData, [search]);
    
    return (
        <Box
            position="relative"
        >
            <TableToolbar
                title={"Clientes"}
                numSelected={itemsToDelete?.length}
                onDelete={() => SetDeleteModal(true)}
            />
            <DeleteModal
                open={deleteModal}
                onClose={() => SetDeleteModal(false)}
                onSubmit={Delete}
            />
            <TextField
                label="Pesquisar"
                value={search}
                onChange={e => SetSearch(e.target.value)}
                className={"simple"}
                variant="filled"
                fullWidth
            />
            <TableContainer component={Paper}>
                <Table size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>Nome</TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>Endereço</TableCell>
                            <TableCell>Complemento</TableCell>
                            <TableCell>Bairro</TableCell>
                            <TableCell>UF</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>Cpf/Cnpj</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clients.map((client, clientKey) => (
                            <Board
                                key={client?.id}
                                id={client?.id}
                                name={client?.name}
                                city={client?.city}
                                address={client?.address}
                                complement={client?.complement}
                                district={client?.district}
                                uf={client?.uf}
                                cep={client?.cep}
                                phone={client?.phone}
                                documentNumber={client?.document_number}
                                onSelect={HandleItemSelect}
                                onUnselect={HandleItemUnselect}
                                onDataAlter={GetData}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                hidden={clients?.length !== 0}
            >
                <Typography
                    align="center"
                    mt={5}
                >
                    Sem resultados
                </Typography>
            </Box>
            <Fab
                style={{
                    position: "fixed",
                    bottom: 15,
                    right: 25
                }}
                size={"medium"}
                color={"primary"}
                onClick={() => SetModal(true)}
            >
                <AddIcon/>
            </Fab>
            <AddModal
                open={modal}
                onClose={() => SetModal(false)}
                onSubmit={GetData}
            />
        </Box>
    );
}

export default ClientsPage;