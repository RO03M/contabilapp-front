import { Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import EditModal from "./editModal";

const Board = props => {

    const {
        id,
        name,
        city,
        address,
        complement,
        district,
        uf,
        cep,
        phone,
        documentNumber,
        onSelect = () => {},
        onUnselect = () => {},
        onDataAlter = () => {},
        ...others
    } = props;

    const [selected, SetSelected] = useState(false);
    const [modal, SetModal] = useState(false);

    useEffect(() => selected ? onSelect(id) : onUnselect(id), [selected]);

    return (
        <>
            <TableRow>
                <TableCell>
                    <Checkbox
                        checked={selected}
                        onChange={e => SetSelected(e.target.checked)}
                    />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{city}</TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{complement}</TableCell>
                <TableCell>{district}</TableCell>
                <TableCell>{uf}</TableCell>
                <TableCell>{cep}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{documentNumber}</TableCell>
                <TableCell>
                    <IconButton
                        color="primary"
                        onClick={() => SetModal(true)}
                    >
                        <CreateIcon
                            fontSize={"small"}
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
            <EditModal
                open={modal}
                id={id}
                onClose={() => SetModal(false)}
                onSubmit={onDataAlter}
                client={{
                    name: name,
                    city: city,
                    address: address,
                    complement: complement,
                    district: district,
                    cep: cep,
                    cpf: documentNumber,
                    phone: phone,
                    uf: uf
                }}
            />
        </>
    );
}

export default Board;