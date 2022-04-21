import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { Text2CpfCnpj } from "utils/masks";

const PersonalData = props => {

    const {
        register
    } = props;

    const [document, SetDocument] = useState("");

    return (
        <Box>
            <Box
                display="flex"
            >
                <TextField
                    {...register("name")}
                    label="Nome"
                    placeholder="Nome"
                    margin="dense"
                    fullWidth
                />
                <TextField
                    {...register("document")}
                    fullWidth
                    label="CPF/CNPJ"
                    placeholder="CPF/CNPJ"
                    value={document}
                    onChange={e => SetDocument(Text2CpfCnpj(e.target.value))}
                    margin="dense"
                />
            </Box>
            <TextField
                {...register("email")}
                label={"E-mail"}
                placeholder={"E-mail"}
                margin="dense"
                fullWidth
            />
        </Box>
    );
}

export default PersonalData;