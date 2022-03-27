import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import DashboardMenu from "./menu";

import { pages } from "./data";
import styles from "./index.module.css";

const DRAWER_WIDTH = 12;
const CLOSED_DRAWER_WIDTH = 3.5;

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
            <Drawer 
                variant={"permanent"}
                PaperProps={{
                    style: {
                        width: open ? `${DRAWER_WIDTH}em` : `${CLOSED_DRAWER_WIDTH}em`,
                        overflow: "hidden",
                        transition: ".2s"
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
                        >
                            <MenuIcon/>
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