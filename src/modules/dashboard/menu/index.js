import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";

const DashboardMenu = props => {

    const {
        items = [],
        ...other
    } = props;

    const navigate = useNavigate();

    return (
        <Menu
            {...other}
        >
            {items?.map((item, itemKey) => (
                <MenuItem
                    key={itemKey}
                    onClick={() => item?.link && navigate(item?.link)}
                >
                    {item?.label}
                </MenuItem>
            ))}
        </Menu>
    );
}

export default DashboardMenu;