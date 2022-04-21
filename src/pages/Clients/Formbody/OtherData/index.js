import { Box, TextField, FormControlLabel, Checkbox } from "@mui/material";

const OtherData = props => {

    const {
        register
    } = props;

    return (
        <Box>
            <TextField
                {...register("stateSub")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Inscrição estadual"}
                placeholder={"Inscrição estadual"}
            />
            <TextField
                {...register("citySub")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Inscrição municipal"}
                placeholder={"Inscrição municipal"}
            />
            <TextField
                {...register("coml")}
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
                {...register("cnae")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"CNAE"}
                placeholder={"CNAE"}
            />
            <TextField
                {...register("iva")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"IVA"}
                placeholder={"IVA"}
            />
            <TextField
                {...register("snCode")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Código de acesso SN"}
                placeholder={"Código de acesso SN"}
            />
            <TextField
                {...register("usernameSupervisor")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Username posto fiscal"}
                placeholder={"Username posto fiscal"}
            />
            <TextField
                {...register("passwordSupervisor")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Senha posto fiscal"}
                placeholder={"Senha posto fiscal"}
            />
            <TextField
                {...register("fees")}
                sx={{
                    width: "50%"
                }}
                margin="dense"
                label={"Valor Honorários"}
                placeholder={"Valor Honorários"}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        {...register("enabledCompany")}
                    />
                }
                label={"Empresa ativa"}
            />
        </Box>
    );
}

export default OtherData;