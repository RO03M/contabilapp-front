import { TextField, Button, Box, Fab } from "@mui/material";
import { useForm } from "react-hook-form";
import { FabModalContext } from "modules/FabModal";
import { useContext } from "react";
import { motion } from "framer-motion";

import CheckIcon from '@mui/icons-material/Check';
import MultiTabBox from "components/MultiTabBox";
import PersonalData from "./PersonalData";
import ContactData from "./ContactData";
import OtherData from "./OtherData";
import { submitButton } from "./variants";

const Formbody = props => {

    const { register, handleSubmit, setValue, getValues, control } = useForm();
    const fabModal = useContext(FabModalContext);

    const Submit = e => {
        console.log(e);
    }

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(Submit)}
            display="flex"
            flexDirection={"column"}
            // height="100%"
        >
            <MultiTabBox
                width="80%"
            >
                <PersonalData
                    label="Dados pessoais"
                    register={register}
                />
                <ContactData
                    label="Dados de contato"
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    control={control}
                />
                <OtherData
                    label="Dados burocráticos"
                    register={register}
                />
            </MultiTabBox>
            <Fab
                size={"medium"}
                component={motion.button}
                variants={submitButton}
                initial={false}
                animate={fabModal?.open ? "open" : "closed"}
                sx={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                    zIndex: 2
                }}
            >
                <CheckIcon/>
            </Fab>
        </Box>
    );
}

export default Formbody;