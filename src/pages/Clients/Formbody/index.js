import { TextField, Button, Box } from "@mui/material";
import MultiTabBox from "components/MultiTabBox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Text2CpfCnpj } from "utils/masks";

const Formbody = props => {

    const [document, SetDocument] = useState("");

    const { register, handleSubmit } = useForm();

    const Submit = e => {
        console.log(e);
    }

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(Submit)}
            display="flex"
            flexDirection={"column"}
        >
            <MultiTabBox
                width="80%"
            >
                <Box
                    label="Dados pessoais"
                >
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
                        label={"E-mail"}
                        placeholder={"E-mail"}
                        margin="dense"
                        fullWidth
                    />
                </Box>
                <Box
                    label="Informações de contato"
                >
                    <TextField
                        label={"Celular"}
                        placeholder={"Celular"}
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        label={"Telefone"}
                        placeholder={"Telefone"}
                        fullWidth
                        margin="dense"
                    />
                    <Box display="flex">
                        <TextField
                            label={"CEP"}
                            placeholder={"CEP"}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label={"Logradouro"}
                            placeholder={"Logradouro"}
                            fullWidth
                            margin="dense"
                        />
                    </Box>
                    <Box display="flex">
                        <TextField
                            label={"Número"}
                            placeholder={"Número"}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label={"Bairro"}
                            placeholder={"Bairro"}
                            fullWidth
                            margin="dense"
                        />
                    </Box>
                    <Box display="flex">
                        <TextField
                            label={"Cidade"}
                            placeholder={"Cidade"}
                            fullWidth
                            margin="dense"
                        />
                        <TextField
                            label={"UF"}
                            placeholder={"UF"}
                            fullWidth
                            margin="dense"
                        />
                    </Box>
                </Box>
                {/* <TextField
                    label={"Inscrição estadual"}
                    placeholder={"Inscrição estadual"}
                />
                <TextField
                    label={"Inscrição municipal"}
                    placeholder={"Inscrição municipal"}
                />
                <TextField
                    label={"Registro junta coml"}
                    placeholder={"Registro junta coml"}
                />
                <TextField
                    label={"Capital social"}
                    placeholder={"Capital social"}
                />
                <TextField
                    label={"CNAE"}
                    placeholder={"CNAE"}
                />
                <TextField
                    label={"IVA"}
                    placeholder={"IVA"}
                />
                <TextField
                    label={"Código de acesso SN"}
                    placeholder={"Código de acesso SN"}
                />
                <TextField
                    label={"Username posto fiscal"}
                    placeholder={"Username posto fiscal"}
                />
                <TextField
                    label={"Senha posto fiscal"}
                    placeholder={"Senha posto fiscal"}
                />
                <TextField
                    label={"Sindicato"}
                    placeholder={"Sindicato"}
                />
                <TextField
                    label={"Valor Honorários"}
                    placeholder={"Valor Honorários"}
                />
                <TextField
                    label={"Empresa Ativa/Inativa"}
                    placeholder={"Empresa Ativa/Inativa"}
                />
                <TextField
                    label={"Cód.Contribuinte Municipal"}
                    placeholder={"Cód.Contribuinte Municipal"}
                />
                <TextField
                    label={"Senha Acesso Municipal"}
                    placeholder={"Senha Acesso Municipal"}
                /> */}
            </MultiTabBox>
            <Button
                type="submit"
            >
                Submit
            </Button>
        </Box>
    );
}

export default Formbody;