import { Box, Table, TableBody, TableContainer } from "@mui/material";
import { useCallback, useState } from "react";
import Head from "./Head";
import Board from "./Board";
import TableToolbar from "modules/tableToolbar";
import { useQuery } from "react-query";
import { Get } from "requests";
import { API_URL } from "variables";

const ClientsTable = () => {

    const [clients, SetClients] = useState([]);
    const [toDelete, SetToDelete] = useState([]);

    const HandleSelect = useCallback(id => SetToDelete([...toDelete, id]), [toDelete]);
    const HandleUnselect = useCallback(id => SetToDelete([...toDelete.filter(x => x !== id)]), [toDelete]);

    const { isLoading, data } = useQuery(["clients"], async () => await Get(`${API_URL}/clients`));
    console.log(data);

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
                                key={clientsKey}
                                onSelect={HandleSelect}
                                onUnselect={HandleUnselect}
                                {...clients}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default ClientsTable;