import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import Actions from "./Actions";

const Board = props => {

    const {
        id,
        name,
        email,
        document,
        city,
        phone,
        onSelect = () => {},
        onUnselect = () => {},
        ...others
    } = props;

    const [checked, SetChecked] = useState(false);

    const HandleCheckbox = e => {
        SetChecked(e.target.checked);
        if (e.target.checked) onSelect(id);
        else onUnselect(id);
    }

    return (
        <TableRow id={id}>
            <TableCell>
                <Checkbox
                    checked={checked}
                    onChange={HandleCheckbox}
                />
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{document}</TableCell>
            <TableCell>{city}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>
                <Actions
                    id={id}
                />
            </TableCell>
        </TableRow>
    );
}

export default Board;