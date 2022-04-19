import { Box, Fab } from "@mui/material";
import { motion, useCycle } from "framer-motion";

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { backgroundVariants, buttonVariants } from "./variants";
import { CLOSED_DRAWER_WIDTH } from "modules/dashboard/data";
import { createContext } from "react";

export const FabModalContext = createContext();

const FabModal = props => {

    const {
        children,
        ...others
    } = props;

    const [modal, ToggleModal] = useCycle(false, true);

    return (
        <>
            <Box
                position={"fixed"}
                bottom={20}
                right={20}
                zIndex={2}
                {...others}
            >
                <Fab
                    size="medium"
                    component={motion.button}
                    variants={buttonVariants}
                    initial={"closed"}
                    animate={!modal ? "open" : "closed"}
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
                        <FabModalContext.Provider
                            value={{
                                open: modal
                            }}
                        >
                            {children}
                        </FabModalContext.Provider>
                    </Box>
                    <Fab
                        size={"medium"}
                        component={motion.button}
                        variants={buttonVariants}
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