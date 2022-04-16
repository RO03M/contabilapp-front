import { Box } from "@mui/material";
import FabModal from "modules/FabModal";
import Formbody from "./Formbody";
import ClientsTable from "./Table";

const Clients = () => {
    return (
        <Box>
            <ClientsTable/>
            <FabModal>
                <Formbody/>
            </FabModal>
        </Box>
    );
}

export default Clients;