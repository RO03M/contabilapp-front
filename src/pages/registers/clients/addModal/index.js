import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField, Zoom } from "@mui/material";
import { useState } from "react";
import { Text2Cep, Text2CpfCnpj, Text2Phone } from "utils/masks";
import { UFList } from "utils/variables";
import { Post } from "requests"

import styles from "./index.module.css";

const AddModal = props => {

    const {
        onSubmit = () => {},
        onClose = () => {},
        ...other
    } = props;

    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [city, SetCity] = useState("");
    const [address, SetAddress] = useState("");
    const [complement, SetComplement] = useState("");
    const [district, SetDistrict] = useState("");
    const [cep, SetCep] = useState("");
    const [cpf, SetCpf] = useState("");
    const [phone, SetPhone] = useState("");
    const [uf, SetUf] = useState(null);

    const Submit = async () => {
        const data = {
            name: name,
            email: email,   
            city: city,
            address: address,
            complement: complement,
            district: district,
            documentNumber: cpf,
            cep: cep,
            phone: phone,
            uf: uf
        };
        
        const response = await Post("/users", JSON.stringify(data));

        onClose();
        onSubmit();
        ResetStates();
    }

    const ResetStates = () => {
        SetName("");
        SetEmail("");
        SetCity("");
        SetAddress("");
        SetComplement("");
        SetDistrict("");
        SetCep("");
        SetCpf("");
        SetPhone("");
        SetUf(null);
    }

    return (
        <Dialog
            {...other}
            onClose={onClose}
            keepMounted={false}
            TransitionComponent={Zoom}
        >
            <DialogTitle>Adicionar Cliente</DialogTitle>
            <DialogContent
                className={styles.dialogContent}
            >
                <TextField
                    label="Nome"
                    fullWidth
                    value={name}
                    onChange={e => SetName(e.target.value)}
                />
                <TextField
                    label="E-mail"
                    fullWidth
                    value={email}
                    onChange={e => SetEmail(e.target.value)}
                />
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                >
                    <TextField
                        label="Cidade"
                        style={{ flex: 1 }}
                        value={city}
                        onChange={e => SetCity(e.target.value)}
                    />
                    <TextField
                        label="Endereço"
                        style={{ flex: 2 }}
                        value={address}
                        onChange={e => SetAddress(e.target.value)}
                    />
                </Stack>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                >
                    <TextField
                        label="Complemento"
                        style={{ flex: 1 }}
                        value={complement}
                        onChange={e => SetComplement(e.target.value)}
                    />
                    <TextField
                        label="Bairro"
                        style={{ flex: 2 }}
                        value={district}
                        onChange={e => SetDistrict(e.target.value)}
                    />
                </Stack>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                >
                    <TextField
                        select
                        value={uf}
                        onChange={e => SetUf(e.target.value)}
                        variant="outlined"
                        label="UF"
                        style={{ flex: 1 }}
                    >
                        <MenuItem value={null}><i>Nenhum</i></MenuItem>
                        {UFList?.map((value, key) => (
                            <MenuItem
                                key={key}
                                value={value}
                            >
                                {value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="CEP"
                        style={{ flex: 2 }}
                        value={cep}
                        onChange={e => SetCep(Text2Cep(e.target.value))}
                    />
                </Stack>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                >
                    <TextField
                        label="Telefone"
                        style={{ flex: 1 }}
                        value={phone}
                        onChange={e => SetPhone(Text2Phone(e.target.value))}
                    />
                    <TextField
                        label="Cpf/Cnpj"
                        style={{ flex: 2 }}
                        value={cpf}
                        onChange={e => SetCpf(Text2CpfCnpj(e.target.value))}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props?.onClose}
                    variant="outlined"
                    color="error"
                >
                    Cancelar
                </Button>
                <Button
                    variant="outlined"
                    onClick={Submit}
                >
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddModal;