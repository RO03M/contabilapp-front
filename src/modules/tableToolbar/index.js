import DeleteIcon from '@mui/icons-material/Delete';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { alpha } from '@mui/material/styles';
import { CLOSED_DRAWER_WIDTH } from 'modules/dashboard/data';

const TableToolbar = props => {

    const {
        numSelected,
        title = "",
        onDelete = () => {}
    } = props;

    if (!numSelected) return null;
    return (
        <>
            <AppBar
                position="fixed"
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginLeft: CLOSED_DRAWER_WIDTH * 1.5,
                        backgroundColor: theme => numSelected > 0 ? alpha(theme.palette.primary.main, 0.8) : "inherit"
                    }}
                >
                    {numSelected > 0 ? (
                        <Typography
                            variant="subtitle1"
                        >
                            {numSelected} {title}(s) selecionados
                        </Typography>
                    ) : (
                        <Typography
                            variant="h6"
                        >
                            {title}
                        </Typography>
                    )}
                    {numSelected > 0 && (
                        <IconButton
                            onClick={onDelete}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default TableToolbar;