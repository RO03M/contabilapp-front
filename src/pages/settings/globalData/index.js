import { FormControl, InputLabel, MenuItem, MenuList, Select, Stack, TextField } from "@mui/material";
import { useState } from "react";

import { UFList } from "utils/variables";

const GlobalData = () => {

    const [uf, SetUF] = useState("SP");

    return (
        <Stack
            direction={"column"}
            spacing={2}
        >
            <TextField
                variant="outlined"
                label="Nome de usuário"
            />
            <TextField
                variant="outlined"
                label="Cidade"
            />
            <TextField
                variant="outlined"
                label="CEP"
            />
            <TextField
                select
                value={uf}
                onChange={e => SetUF(e.target.value)}
                variant="outlined"
                label="UF"
                MenuProps={{
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "left"
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "right"
                    },
                    getContentAnchorEl: null
                }}
            >
                {UFList?.map((value, key) => (
                    <MenuItem
                        key={key}
                        value={value}
                    >
                        {value}
                    </MenuItem>
                ))}
            </TextField>
        </Stack>
    );
}

export default GlobalData;