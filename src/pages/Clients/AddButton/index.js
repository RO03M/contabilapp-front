import { Box, Fab } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { CLOSED_DRAWER_WIDTH } from "variables";
import { closeOpenScaleVariant } from "defaultVariants";

import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import GrowCircleContainer from "components/GrowCircleContainer";
import Formbody from "../Formbody";
import { useMutation } from "react-query";

const AddButton = props => {

    const [anchorEl, setAnchorEl] = useState(null);

    const openModal = e => setAnchorEl(e.currentTarget);
    const closeModal = () => setAnchorEl(null);

    const submitMutation = useMutation(async data => {
        data = JSON.stringify(data);
        return await Post(`${API_URL}/clients`, data);
    }, {
        onSuccess: (data) => {
            console.log("success! " + data);
        },
        onError: (data) => {
            console.log("error! :c " + data);
        }
    });

    return (
        <>
            <Fab
                size="medium"
                component={motion.button}
                variants={closeOpenScaleVariant}
                initial={"closed"}
                animate={!Boolean(anchorEl) ? "open" : "closed"}
                onClick={openModal}
                style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20
                }}
            >
                <AddIcon/>
            </Fab>
            <GrowCircleContainer
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                paddingLeft={`${CLOSED_DRAWER_WIDTH}em`}
                onClose={closeModal}
            >
                <Formbody/>
                {/* TODO add button to formbody as a submit */}
                <Fab
                    size="medium"
                    component={motion.button}
                    variants={closeOpenScaleVariant}
                    initial={"closed"}
                    animate={Boolean(anchorEl) ? "open" : "closed"}
                    onClick={closeModal}
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

export default AddButton;