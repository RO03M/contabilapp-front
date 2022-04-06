import { Box, ClickAwayListener, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { pages } from "./data";
import { motion } from "framer-motion";

import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DashboardMenu from "./menu";
import styles from "./index.module.css";

const DRAWER_WIDTH = 12;
const CLOSED_DRAWER_WIDTH = 3.5;

const paperVariants = {
    closed: {
        width: `${CLOSED_DRAWER_WIDTH}em`
    },
    open: {
        width: `${DRAWER_WIDTH}em`,
    }
}

const buttonVariants = {
    closed: {
        x: 0
    },
    open: {
        x: "5.5em"
    }
}

const Dashboard = props => {

    const [open, SetOpen] = useState(false);
    const [menuAnchor, SetMenuAnchor] = useState(null);
    const [activeItems, SetActiveItems] = useState([]);

    const HandleMenuOpen = (e, items) => {
        SetMenuAnchor(e.currentTarget);
        SetActiveItems(items);
    }

    const HandleMenuClose = () => {
        SetMenuAnchor(null);
        SetActiveItems([]);
    }

    return (
        <Box>
            <ClickAwayListener
                onClickAway={() => {
                    SetOpen(false);
                    HandleMenuClose();
                }}
            >
                <Drawer 
                    variant={"permanent"}
                    PaperProps={{
                        component: motion.div,
                        variants: paperVariants,
                        animate: open ? "open" : "closed",
                        style: {
                            overflow: "hidden",
                        }
                    }}
                >
                    <List>
                        <div
                            className={styles.drawerHeader}
                            style={{
                                width: `${CLOSED_DRAWER_WIDTH}em`
                            }}
                        >
                            <IconButton
                                onClick={() => SetOpen(!open)}
                                component={motion.button}
                                variants={buttonVariants}
                                initial={"closed"}
                                animate={open ? "open" : "closed"}
                            >
                                {open ? <ArrowBackIcon/> : <MenuIcon/>}
                            </IconButton>
                        </div>
                        {pages?.map((page, pageKey) => (
                            <ListItem
                                key={pageKey}
                                button
                                className={styles.listItem}
                                onClick={e => HandleMenuOpen(e, page?.items)}
                            >
                                <ListItemIcon>{page?.icon}</ListItemIcon>
                                <ListItemText primary={page?.label}/>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </ClickAwayListener>
            <DashboardMenu
                items={activeItems}
                anchorEl={menuAnchor}
                open={menuAnchor !== null}
                onClose={HandleMenuClose}
                disableScrollLock
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            />
        </Box>
    );
}

export default Dashboard;