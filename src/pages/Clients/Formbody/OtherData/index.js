import { Box, TextField } from "@mui/material";

const OtherData = props => {

    const {
        register
    } = props;

    return (
        <Box>
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Inscrição estadual"}
                placeholder={"Inscrição estadual"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Inscrição municipal"}
                placeholder={"Inscrição municipal"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Registro junta coml"}
                placeholder={"Registro junta coml"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Capital social"}
                placeholder={"Capital social"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"CNAE"}
                placeholder={"CNAE"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"IVA"}
                placeholder={"IVA"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Código de acesso SN"}
                placeholder={"Código de acesso SN"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Username posto fiscal"}
                placeholder={"Username posto fiscal"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Senha posto fiscal"}
                placeholder={"Senha posto fiscal"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Sindicato"}
                placeholder={"Sindicato"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Valor Honorários"}
                placeholder={"Valor Honorários"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Empresa Ativa/Inativa"}
                placeholder={"Empresa Ativa/Inativa"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Cód.Contribuinte Municipal"}
                placeholder={"Cód.Contribuinte Municipal"}
            />
            <TextField
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Senha Acesso Municipal"}
                placeholder={"Senha Acesso Municipal"}
            />
        </Box>
    );
}

export default OtherData;