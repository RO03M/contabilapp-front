import { Box, MenuItem, TextField } from "@mui/material";
import { Get } from "requests";

import InputMask from "react-input-mask";
import { useQuery } from "react-query";
import { useState } from "react";
import { UFList } from "utils/variables";
import { Controller } from "react-hook-form";

const ContactData = props => {

    const {
        getValues,
        setValue,
        control,
        register
    } = props;

    const [cep, SetCep] = useState("");

    const { data, isLoading } = useQuery(["cep", cep], async () => {
        const tempCep = cep.toString().replace(/[^0-9]/g, "");
        if (tempCep.length != 8) return;
        return await Get(`https://viacep.com.br/ws/${tempCep}/json/`);
    }, {
        onSuccess: (data) => {
            if (!data) return;
            const { localidade: location, uf, bairro: district, logradouro: publicPlace } = data;
            setValue("city", location, { shouldTouch: true });
            setValue("district", district);
            setValue("publicPlace", publicPlace);
            setValue("uf", uf);
        }
    });

    console.log(getValues("cep"));

    return (
        <Box>
            <Controller
                control={control}
                name="phone"
                defaultValue={""}
                render={({field: { onChange, value }}) => <InputMask
                    mask="(99) 99999-9999"
                    value={value}
                    onChange={onChange}
                >
                    {() => <TextField
                        InputLabelProps={{ shrink: true }}
                        label={"Celular"}
                        placeholder={"Celular"}
                        fullWidth
                        margin="dense"
                    />}
                </InputMask>}
            />
            
            <Controller
                control={control}
                name={"deskPhone"}
                defaultValue={""}
                render={({ field: { onChange, value } }) => <InputMask
                    mask="(99) 9999-9999"
                    value={value}
                    onChange={onChange}
                >
                    {() => <TextField
                        InputLabelProps={{ shrink: true }}
                        label={"Telefone"}
                        placeholder={"Telefone"}
                        fullWidth
                        margin="dense"
                    />}
                </InputMask>}
            />
            <Box display="flex">
                <InputMask
                    {...register("cep")}
                    defaultValue={""}
                    mask="99999-999"
                    onChange={e => SetCep(e.target.value)}
                    value={cep}
                >
                    {() => <TextField
                        InputLabelProps={{ shrink: true }}
                        label={"CEP"}
                        placeholder={"CEP"}
                        fullWidth
                        margin="dense"
                    />}
                </InputMask>
                <TextField
                    {...register("publicPlace")}
                    defaultValue={""}
                    InputLabelProps={{ shrink: true }}
                    label={"Logradouro"}
                    placeholder={"Logradouro"}
                    fullWidth
                    margin="dense"
                />
            </Box>
            <Box display="flex">
                <TextField
                    {...register("number")}
                    InputLabelProps={{ shrink: true }}
                    defaultValue={""}
                    label={"Número"}
                    placeholder={"Número"}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    {...register("district")}
                    defaultValue={""}
                    InputLabelProps={{ shrink: true }}
                    label={"Bairro"}
                    placeholder={"Bairro"}
                    fullWidth
                    margin="dense"
                />
            </Box>
            <Box display="flex">
                <TextField
                    {...register("city")}
                    defaultValue={""}
                    InputLabelProps={{ shrink: true }}
                    label={"Cidade"}
                    placeholder={"Cidade"}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    {...register("uf")}
                    InputLabelProps={{ shrink: true }}
                    defaultValue={""}
                    label={"UF"}
                    placeholder={"UF"}
                    fullWidth
                    margin="dense"
                    select
                >
                    <MenuItem
                        value={""}
                    >
                        <i>Nenhum</i>
                    </MenuItem>
                    {UFList?.map((uf, key) => (
                        <MenuItem
                            key={key}
                            value={uf}
                        >
                            {uf}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </Box>
    );
}

export default ContactData;