import { IconButton, Menu, MenuItem } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import { useNavigate } from "react-router";

const SettingsMenu = () => {

    const [open, SetOpen] = useState(false);
    const [anchor, SetAnchor] = useState(null);

    const navigate = useNavigate();

    const MenuOpen = e => {
        SetOpen(true);
        SetAnchor(e.currentTarget);
    }

    const MenuClose = e => {
        SetOpen(false);
        SetAnchor(null);
    }

    return (
        <>
            <IconButton
                onClick={MenuOpen}
            >
                <SettingsIcon/>
            </IconButton>
            <Menu
                anchorEl={anchor}
                open={open}
                onClose={MenuClose}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "left"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            
                style={{
                    zIndex: 1600
                }}
            >
                <MenuItem
                    onClick={() => navigate("/settings")}
                >
                    Configurações
                </MenuItem>
                <MenuItem>
                    Valores globais
                </MenuItem>
            </Menu>
        </>
    );
}

export default SettingsMenu;