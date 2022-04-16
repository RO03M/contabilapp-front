import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Formbody = props => {

    const [document, SetDocument] = useState("");

    const { register, handleSubmit } = useForm();

    const Submit = e => {
        console.log(e);
    }

    return (
        <form
            onSubmit={handleSubmit(Submit)}
        >
            <TextField
                {...register("name")}
                label="Nome"
                placeholder="Nome"
            />
            <TextField
                label="CPF/CNPJ"
                {...register("document")}
                value={document}
                onChange={e => SetDocument(e.target.value)}
            />
            <Button
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}

export default Formbody;