import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Stack, TextField, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { Text2Cep, Text2CpfCnpj, Text2Phone } from "utils/masks";
import { UFList } from "utils/variables";
import { Patch, Get } from "requests";

import styles from "./index.module.css";

const EditModal = props => {

    const {
        id,
        client = {},
        onSubmit = () => {},
        onClose = () => {},
        ...other
    } = props;

    const [name, SetName] = useState(client?.name);
    const [city, SetCity] = useState(client?.city);
    const [address, SetAddress] = useState(client?.address);
    const [complement, SetComplement] = useState(client?.complement);
    const [district, SetDistrict] = useState(client?.district);
    const [cep, SetCep] = useState(client?.cep);
    const [cpf, SetCpf] = useState(client?.cpf);
    const [phone, SetPhone] = useState(client?.phone);
    const [uf, SetUf] = useState(client?.uf || null);

    const Submit = async () => {
        const data = {
            name: name,
            city: city,
            address: address,
            complement: complement,
            district: district,
            documentNumber: cpf,
            cep: cep,
            phone: phone,
            uf: uf
        };
        console.log(JSON.stringify(data));
        const response = await Patch(`/users?id=${id}`, JSON.stringify(data));
        onClose();
        onSubmit();
    }

    // const GetData = async () => {
    //     let response = await Get(`/users/${id}`);
    //     if (response?.success) {
    //         const { user } = response;
    //         SetName(user?.name);
    //         SetCity(user?.city);
    //         SetAddress(user?.address);
    //         SetComplement(user?.complement);
    //         SetDistrict(user?.district);
    //         SetCep(user?.cep);
    //         SetCpf(user?.document_number);
    //         SetPhone(user?.phone);
    //         SetUf(user?.uf);
    //     }
    // }

    // useEffect(GetData, []);

    return (
        <Dialog
            {...other}
            onClose={onClose}
            TransitionComponent={Zoom}
        >
            <DialogTitle>Editar cliente</DialogTitle>
            <DialogContent
                className={styles.dialogContent}
            >
                <TextField
                    label="Nome"
                    fullWidth
                    value={name}
                    onChange={e => SetName(e.target.value)}
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

export default EditModal;