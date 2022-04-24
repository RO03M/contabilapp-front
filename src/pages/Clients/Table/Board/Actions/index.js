import { useRef, useState } from "react";
import { IconButton } from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import GrowCircleContainer from "components/GrowCircleContainer";
import Formbody from "pages/Clients/Formbody";
import { CLOSED_DRAWER_WIDTH } from "variables";

const Actions = props => {

    const {
        id
    } = props;

    const [open, SetOpen] = useState(false);
    const [anchorEl, SetAnchorEl] = useState(null);

    const OpenEdit = e => {
        SetAnchorEl(e.currentTarget);
        SetOpen(true);
    }
    
    const CloseEdit = () => {
        SetOpen(false);
    }

    return (
        <>
            <IconButton
                color="warning"
            >
                <VisibilityIcon/>
            </IconButton>
            <IconButton
                color="info"
                onClick={OpenEdit}
            >
                <EditIcon/>
            </IconButton>
            <GrowCircleContainer
                open={open}
                anchorEl={anchorEl}
                marginLeft={`${CLOSED_DRAWER_WIDTH}em`}
                onClose={CloseEdit}
            >
                <Formbody/>
            </GrowCircleContainer>
        </>
    );
}

export default Actions;