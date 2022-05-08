import { useState } from "react";
import { Fab, IconButton } from "@mui/material";
import { CLOSED_DRAWER_WIDTH } from "variables";
import { motion } from "framer-motion";
import { closeOpenScaleVariant } from "defaultVariants";

import CheckIcon from '@mui/icons-material/Check';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import GrowCircleContainer from "components/GrowCircleContainer";
import Formbody from "pages/Clients/Formbody";

const Actions = props => {

    const {
        data = {}
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
                paddingLeft={`${CLOSED_DRAWER_WIDTH}em`}
                onClose={CloseEdit}
            >
                <Formbody
                    defaultValues={data}
                />
                <Fab
                    size="medium"
                    component={motion.button}
                    variants={closeOpenScaleVariant}
                    initial={"closed"}
                    animate={open ? "open" : "closed"}
                    onClick={CloseEdit}
                    style={{
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                        zIndex: 10000
                    }}
                >
                    <CheckIcon/>
                </Fab>
            </GrowCircleContainer>
        </>
    );
}

export default Actions;