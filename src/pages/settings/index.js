import { Box, Typography } from "@mui/material";
import GlobalData from "./globalData";

const Settings = () => {
    return (
        <Box>
            <Typography
                variant="h5"
                align="center"
                mt={3}
            >
                Configurações gerais
            </Typography>
            <GlobalData/>
        </Box>
    );
}

export default Settings;