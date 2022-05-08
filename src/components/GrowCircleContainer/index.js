import { Box, Fab } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { backgroundVariants } from "./variants";
import { closeOpenScaleVariant } from "defaultVariants";

import Hotkeys from "react-hot-keys";
import CloseIcon from '@mui/icons-material/Close';

const GrowCircleContainer = props => {
    
    const {
        open = false,
        anchorEl = null,
        children,
        closeButton = true,
        onClose = () => {},
        ...others
    } = props;
    
    if (anchorEl === null) return null;

    const bounds = anchorEl.getBoundingClientRect();

    const custom = {
        x: bounds.x - bounds.width / 2,
        y: bounds.y + bounds.height / 2
    };
    
    return (
        <Hotkeys
            keyName="esc"
            onKeyDown={onClose}
        >
            <Box
                id={`growCircleContainer${Date.now()}`}
                position={"fixed"}
                zIndex={2}
            >
                <Box
                    id="circleBackground"
                    position="fixed"
                    top={0}
                    left={0}
                    bottom={0}
                    width={"100%"}
                    component={motion.div}
                    variants={backgroundVariants}
                    initial={"closed"}
                    animate={open ? "open" : "closed"}
                    bgcolor={"background.paper"}
                    custom={custom}
                    {...others}
                >
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                exit={{ opacity: 0 }}
                            >
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {open && closeButton && (
                            <Fab
                                size={"medium"}
                                component={motion.button}
                                variants={closeOpenScaleVariant}
                                initial={"closed"}
                                animate={"open"}
                                exit={"closed"}
                                onClick={onClose}
                                sx={{
                                    position: "absolute",
                                    right: 50 + 15,
                                    top: 15
                                }}
                            >
                                <CloseIcon/>
                            </Fab>
                        )}
                    </AnimatePresence>
                </Box>
            </Box>
        </Hotkeys>
    );
}

export default GrowCircleContainer;