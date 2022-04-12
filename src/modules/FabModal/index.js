import { Box, Dialog, Fab } from "@mui/material";
import { motion } from "framer-motion";

import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

const dialogVariants = {
    closed: {
        width: 0,
        height: 0
    },
    opened: {
        width: "100%",
        height: "100%",
        transition: {
            duration: .5
        }
    }
}

const FabModal = props => {

    const [modal, SetModal] = useState(false);

    const OpenModal = () => SetModal(true);
    const CloseModal = () => SetModal(false);

    return (
        <>
            <Box
                position={"fixed"}
                bottom={20}
                right={20}
                zIndex={9999}
            >
                <Fab
                    size="medium"
                    onClick={OpenModal}
                >
                    <AddIcon/>
                </Fab>
                <Dialog
                    disablePortal
                    fullScreen
                    onClose={CloseModal}
                    open={modal}
                    PaperComponent={motion.div}
                    PaperProps={{
                        initial: "closed",
                        animate: modal ? "opened" : "closed",
                        variants: dialogVariants,
                        style: {
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            backgroundColor: "red"
                        }
                    }}
                >
                    <p>teste</p>
                </Dialog>
            </Box>
        </>
    );
}

export default FabModal;