import { Box, Table, TableBody, TableContainer, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Post, Get } from "requests";
import { API_URL } from "variables";

import Head from "./Head";
import Board from "./Board";
import TableToolbar from "modules/tableToolbar";
import Paginate from "components/Paginate";

const ClientsTable = () => {

    const [toDelete, SetToDelete] = useState([]);
    const [page, SetPage] = useState(1);

    const HandleSelect = useCallback(id => SetToDelete([...toDelete, id]), [toDelete]);
    const HandleUnselect = useCallback(id => SetToDelete([...toDelete.filter(x => x !== id)]), [toDelete]);

    const { isLoading, data } = useQuery(["clients", page], async () => await Get(`${API_URL}/clients?page=${page}`));
    const {
        clients = [],
        pagination: {
            lastPage: maxPage = 1
        } = {}
    } = data || {};

    const { mutate: deleteMutation } = useMutation(async () => {
        const form = new FormData();
        for (let i = 0; i < toDelete.length; i++) form.append("ids[]", toDelete[i]);

        return await Post(`${API_URL}/clients/delete`, form);
    }, {
        onSuccess: () => {
            SetToDelete([]);
        }
    });

    return (
        <Box>
            <TableToolbar
                title={"Clientes"}
                numSelected={toDelete?.length}
                onDelete={deleteMutation}
            />
            <TableContainer sx={{ overflowX: "initial" }}>
                <Table
                    stickyHeader
                >
                    <Head/>
                    <TableBody>
                        {clients?.map((clients, clientsKey) => (
                            <Board
                                key={clientsKey}
                                onSelect={HandleSelect}
                                onUnselect={HandleUnselect}
                                {...clients}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {clients?.length == 0 && (
                <Typography
                    align="center"
                    mt={5}
                >
                    Nenhum cliente encontrado
                </Typography>
            )}
            <Paginate
                page={page}
                onChange={SetPage}
                count={maxPage}
            />
        </Box>
    );
}

export default ClientsTable;