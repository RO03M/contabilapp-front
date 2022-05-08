import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import Actions from "./Actions";

const Board = props => {

    const {
        // id,
        // name,
        // email,
        // document,
        // city,
        // phone,
        data = {},
        onSelect = () => {},
        onUnselect = () => {},
        ...others
    } = props;

    const [checked, SetChecked] = useState(false);

    const HandleCheckbox = e => {
        SetChecked(e.target.checked);
        if (e.target.checked) onSelect(data?.id);
        else onUnselect(data?.id);
    }

    return (
        <TableRow id={data?.id}>
            <TableCell>
                <Checkbox
                    checked={checked}
                    onChange={HandleCheckbox}
                />
            </TableCell>
            <TableCell>{data?.name}</TableCell>
            <TableCell>{data?.email}</TableCell>
            <TableCell>{data?.document}</TableCell>
            <TableCell>{data?.city}</TableCell>
            <TableCell>{data?.phone}</TableCell>
            <TableCell>
                <Actions
                    data={data}
                />
            </TableCell>
        </TableRow>
    );
}

export default Board;