import { Box, Table, TableBody, TableContainer } from "@mui/material";
import { useCallback, useState } from "react";
import Head from "./Head";
import Board from "./Board";
import TableToolbar from "modules/tableToolbar";

const ClientsTable = () => {

    const [clients, SetClients] = useState(new Array(100).fill({ name: "dummie" }));
    const [toDelete, SetToDelete] = useState([])

    const HandleSelect = useCallback(id => SetToDelete([...toDelete, id]), [toDelete]);

    const HandleUnselect = useCallback(id => SetToDelete([...toDelete.filter(x => x !== id)]), [toDelete]);

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