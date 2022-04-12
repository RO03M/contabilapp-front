import { Box } from "@mui/material";
import AddButton from "./AddButton";
import ClientsTable from "./Table";

const Clients = () => {
    return (
        <Box>
            <ClientsTable/>
            <AddButton/>
        </Box>
    );
}

export default Clients;