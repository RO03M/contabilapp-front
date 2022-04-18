import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import MultiTabBox from "components/MultiTabBox";
import PersonalData from "./PersonalData";
import ContactData from "./ContactData";
import OtherData from "./OtherData";

const Formbody = props => {

    const { register, handleSubmit, setValue, getValues, control } = useForm();

    const Submit = e => {
        console.log(e);
    }

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(Submit)}
            display="flex"
            flexDirection={"column"}
        >
            <MultiTabBox
                width="80%"
            >
                <PersonalData
                    label="Dados pessoais"
                    register={register}
                />
                <ContactData
                    label="Dados de contato"
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    control={control}
                />
                <OtherData
                    label="Dados burocráticos"
                    register={register}
                />
            </MultiTabBox>
            <Button
                type="submit"
            >
                Submit
            </Button>
        </Box>
    );
}

export default Formbody;