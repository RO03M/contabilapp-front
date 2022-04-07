import { IconButton } from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

const Actions = props => {

    const {
        id
    } = props;

    return (
        <>
            <IconButton
                color="warning"
            >
                <VisibilityIcon/>
            </IconButton>
            <IconButton
                color="info"
            >
                <EditIcon/>
            </IconButton>
        </>
    );
}

export default Actions;