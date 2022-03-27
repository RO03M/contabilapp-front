import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Zoom } from "@mui/material";

const DeleteModal = props => {

    const {
        onClose = () => {},
        onSubmit = () => {},
        ...others
    } = props;

    return (
        <Dialog
            {...others}
            onClose={onClose}
            TransitionComponent={Zoom}
        >
            <DialogTitle>Atenção!</DialogTitle>
            <DialogContent>
                <Typography>
                    Deseja mesmo deletar esses clientes?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    onClick={onClose}
                >
                    Cancelar
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        onSubmit();
                        onClose();
                    }}
                >
                    Deletar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteModal;