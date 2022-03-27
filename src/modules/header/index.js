import { AppBar, Button, IconButton, TextField, Toolbar, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router";
import SideNavigator from "./sideNavigator";
import TopNavigator from "./topNavigator";
import MenuIcon from '@mui/icons-material/Menu';

import { pages } from "./data";
// import logo from "logo.svg";
import styles from "./index.module.css";
import SettingsMenu from "./settingsMenu";
// import ProfileMenu from "modules/profileMenu";

const Header = () => {

    const [expanded, SetExpanded] = useState(false);
    const [activeItems, SetActiveItems] = useState([]);

    const matchesXs = useMediaQuery("(max-width: 960px)");

    const navigate = useNavigate();

    const HandleDropdownToggle = () => SetExpanded(!expanded)
    const HandleDropdownClose = () => SetExpanded(false)

    const HandleItemClick = page => {
        if (page?.link) {
            navigate(page?.link);
            return;
        }
        const items = page?.items || [];
        HandleDropdownToggle();
        SetActiveItems([...items]);
    }

    return (
        <Box
            style={{
                display: "flex"
            }}
        >
            <AppBar
                position="fixed"
                style={{
                    zIndex: 1500
                }}
            >
                <Toolbar>
                    <Box
                        display={{ xs: "block", md: "none" }}
                        style={{
                            marginRight: 5
                        }}
                    >
                        <IconButton onClick={HandleDropdownToggle}>
                            <MenuIcon htmlColor="white"/>
                        </IconButton>
                    </Box>
                    {/* <div
                        style={{
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundImage: `url(${logo})`,
                            width: "10em",
                            height: "2em"
                        }}
                        onClick={() => navigate("/")}
                    /> */}
                    <Box
                        display={{ xs: 'none', md: 'flex' }}
                        style={{
                            flexGrow: 1
                        }}
                    >
                        {pages?.map((page, pageKey) => (
                            <Button
                                style={{ my: 2, color: 'white', display: 'block' }}
                                onClick={() => HandleItemClick(page)}
                                key={pageKey}
                            >
                                {page?.label}
                            </Button>
                        ))}
                    </Box>
                    <div className={styles.rightContainer}>
                        {/* <Box>
                            <TextField 
                                placeholder="Buscar..."
                                variant="outlined"
                                label="buscar"
                                color="secondary"
                            />
                        </Box> */}
                        {/* <Box>
                            <ProfileMenu/>
                        </Box> */}
                        <Box>
                            <SettingsMenu/>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
            {matchesXs ? 
            (<SideNavigator
                open={expanded}
                pages={pages}
                onClose={HandleDropdownClose}
                disableScrollLock
            />)
            :
            (<TopNavigator
                open={expanded}
                items={activeItems}
                onClose={HandleDropdownClose}
                disableScrollLock
            />)}
            <Toolbar/>
        </Box>
    );
}

export default Header;