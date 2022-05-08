import { Box } from "@mui/material";
import GrowCircleContainer from "components/GrowCircleContainer";
import FabModal from "modules/FabModal";
import AddButton from "./AddButton";
import Formbody from "./Formbody";
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