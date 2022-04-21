import { Box, Table, TableBody, TableContainer } from "@mui/material";
import { useCallback, useState } from "react";
import Head from "./Head";
import Board from "./Board";
import TableToolbar from "modules/tableToolbar";
import { useQuery } from "react-query";
import { Get } from "requests";
import { API_URL } from "variables";
import Paginate from "components/Paginate";

const ClientsTable = () => {

    const [toDelete, SetToDelete] = useState([]);
    const [page, SetPage] = useState(1);

    const HandleSelect = useCallback(id => SetToDelete([...toDelete, id]), [toDelete]);
    const HandleUnselect = useCallback(id => SetToDelete([...toDelete.filter(x => x !== id)]), [toDelete]);

    const { isLoading, data } = useQuery(["clients", page], async () => await Get(`${API_URL}/clients?page=${page}`));
    const {
        clients: {
            docs: clients = [],
            pages: maxPage = 1
        } = {}
    } = data || {};

    console.log(maxPage);

    return (
        <Box>
            <TableToolbar
                title={"Clientes"}
                numSelected={toDelete?.length}
            />
            <TableContainer sx={{ overflowX: "initial" }}>
                <Table
                    stickyHeader
                >
                    <Head/>
                    <TableBody>
                        {clients?.map((clients, clientsKey) => (
                            <Board
                                key={clients?.id}
                                onSelect={HandleSelect}
                                onUnselect={HandleUnselect}
                                {...clients}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Paginate
                page={page}
                onChange={SetPage}
                count={maxPage}
            />
        </Box>
    );
}

export default ClientsTable;