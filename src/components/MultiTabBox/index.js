import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Hotkeys from "react-hot-keys";

import styles from "./index.module.css";
import Tabs from "./Tabs";

const boxesVariants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            opacity: { duration: 0.5 },
            x: { duration: 0.35 }
        }
    },
    closed: {
        x: -100,
        opacity: 0
    }
}

const MultiTabBox = props => {

    const  {
        children,
        ...others
    } = props;

    const [active, SetActive] = useState(0);

    const handleShortcuts = key => {
        if (key == "right") {
            let tempActive = active + 1;
            if (tempActive > children?.length) tempActive = children?.length;
            SetActive(tempActive);
        } else if (key == "left") {
            let tempActive = active - 1;
            if (tempActive < 0) tempActive = 0;
            SetActive(tempActive);
        }
    }

    return (
        <Hotkeys
            keyName="right,left"
            onKeyDown={handleShortcuts}
        >
            <Box
                display="flex"
                flexDirection={"column"}
            >
                <Tabs
                    items={children}
                    activeStep={active}
                    onChange={SetActive}
                />
                <Box
                    className={styles.boxesContainer}
                    sx={{
                        flex: 4,
                        height: "100%",
                        overflowY: "scroll",
                        overflowX: "hidden"
                    }}
                    {...others}
                >
                    {children?.map((child, childKey) => active == childKey && (
                        <motion.div
                            key={childKey}
                            variants={boxesVariants}
                            initial={"closed"}
                            animate={"open"}
                        >
                            <Typography
                                variant="h5"
                                mt={3}
                            >
                                {child?.props?.label}
                            </Typography>
                            {child}
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Hotkeys>
    );
}

export default MultiTabBox;