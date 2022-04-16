import { Box, Fab } from "@mui/material";
import { motion, useCycle } from "framer-motion";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { backgroundVariants, closeButtonVariants } from "./variants";
import { CLOSED_DRAWER_WIDTH } from "modules/dashboard/data";

const FabModal = props => {

    const {
        children
    } = props;

    const [modal, ToggleModal] = useCycle(false, true);

    return (
        <>
            <Box
                position={"fixed"}
                bottom={20}
                right={20}
                zIndex={2}
            >
                <Fab
                    size="medium"
                    onClick={ToggleModal}
                >
                    <AddIcon/>
                </Fab>
                <Box
                    position="fixed"
                    top={0}
                    left={0}
                    bottom={0}
                    width={"100%"}
                    component={motion.div}
                    variants={backgroundVariants}
                    initial={"closed"}
                    animate={modal ? "open" : "closed"}
                    bgcolor={"background.paper"}
                >
                    <Box
                        marginLeft={`${CLOSED_DRAWER_WIDTH}em`}
                    >
                        {children}
                    </Box>
                    <Fab
                        size={"medium"}
                        component={motion.button}
                        variants={closeButtonVariants}
                        onClick={ToggleModal}
                        sx={{
                            position: "absolute",
                            right: 15,
                            top: 15
                        }}
                    >
                        <CloseIcon/>
                    </Fab>
                </Box>
            </Box>
        </>
    );
}

export default FabModal;