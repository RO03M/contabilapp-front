import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { Text2CpfCnpj } from "utils/masks";

const PersonalData = props => {

    const {
        register,
        errors
    } = props;

    const [document, SetDocument] = useState("");

    return (
        <Box>
            <Box
                display="flex"
            >
                <TextField
                    {...register("name", {
                        required: "Insira um nome"
                    })}
                    helperText={errors?.name?.message}
                    error={Boolean(errors?.name)}
                    label="Nome"
                    placeholder="Nome"
                    margin="dense"
                    fullWidth
                />
                <TextField
                    {...register("document", {
                        required: "O CPF/CNPJ é necessário"
                    })}
                    helperText={errors?.document?.message}
                    error={Boolean(errors?.document)}
                    fullWidth
                    label="CPF/CNPJ"
                    placeholder="CPF/CNPJ"
                    value={document}
                    onChange={e => SetDocument(Text2CpfCnpj(e.target.value))}
                    margin="dense"
                />
            </Box>
            <TextField
                {...register("email", {
                    required: "O e-mail é necessário"
                })}
                helperText={errors?.email?.message}
                error={Boolean(errors?.email)}
                label={"E-mail"}
                placeholder={"E-mail"}
                margin="dense"
                fullWidth
            />
        </Box>
    );
}

export default PersonalData;