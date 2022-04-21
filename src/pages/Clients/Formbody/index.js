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
import { useMutation } from "react-query";
import { Post } from "requests";
import { API_URL } from "variables";

const Formbody = props => {

    const { register, handleSubmit, setValue, getValues, control } = useForm();
    const fabModal = useContext(FabModalContext);

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

    const Submit = e => {
        console.log(e);
        submitMutation.mutate(e);
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