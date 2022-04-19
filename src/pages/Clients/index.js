import { Box } from "@mui/material";
import FabModal from "modules/FabModal";
import Formbody from "./Formbody";
import ClientsTable from "./Table";

const Clients = () => {
    return (
        <Box>
            <ClientsTable/>
            <FabModal
                // height="100%"
            >
                <Formbody/>
            </FabModal>
        </Box>
    );
}

export default Clients;