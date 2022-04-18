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

    const [cep, SetCep] = useState(getValues("cep") || "");

    const { data, isLoading } = useQuery(["cep", cep], async () => {
        const tempCep = cep.toString().replace(/[^0-9]/g, "");
        if (tempCep.length != 8) return;
        return await Get(`https://viacep.com.br/ws/${tempCep}/json/`);
    }, {
        onSuccess: (data) => {
            if (!data) return;
            const { localidade: location, uf, bairro: district, logradouro: publicPlace } = data;
            setValue("city", location);
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
                render={({field: { onChange, value }}) => <InputMask
                    // {...register("phone")}
                    mask="(99) 99999-9999"
                    value={value}
                    onChange={onChange}
                >
                    {() => <TextField
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
                render={({ field: { onChange, value } }) => <InputMask
                    mask="(99) 9999-9999"
                >
                    {() => <TextField
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
                    mask="99999-999"
                    onChange={e => SetCep(e.target.value)}
                >
                    {() => <TextField
                        label={"CEP"}
                        placeholder={"CEP"}
                        fullWidth
                        margin="dense"
                    />}
                </InputMask>
                <TextField
                    {...register("publicPlace")}
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
                    label={"Número"}
                    placeholder={"Número"}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    {...register("district")}
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
                    InputLabelProps={{ shrink: true }}
                    label={"Cidade"}
                    placeholder={"Cidade"}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    {...register("uf")}
                    label={"UF"}
                    placeholder={"UF"}
                    fullWidth
                    margin="dense"
                    select
                >
                    <MenuItem
                        value={undefined}
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