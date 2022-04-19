import { Box, List, ListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "./index.module.css";

const boxesVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            opacity: { duration: 0.5 },
            y: { duration: 0.35 }
        }
    },
    closed: {
        y: 100,
        opacity: 0
    }
}

const MultiTabBox = props => {

    const  {
        children,
        ...others
    } = props;

    const [active, SetActive] = useState(0);

    return (
        <Box
            display="inline-flex"
            {...others}
        >
            <List
                sx={{
                    flex: 1
                }}
            >
                {children?.map((child, childKey) => (
                    <ListItem
                        onClick={() => SetActive(childKey)}
                        key={childKey}
                        button
                    >
                        {child?.props?.label}
                    </ListItem>
                ))}
            </List>
            <Box
                className={styles.boxesContainer}
                sx={{
                    flex: 4,
                    height: "100%",
                    overflowY: "scroll"
                }}
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
    );
}

export default MultiTabBox;