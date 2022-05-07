import { Box, Paper, Step, StepLabel, Stepper } from "@mui/material";

const Tabs = props => {

    const {
        items,
        onChange = () => {},
        ...others
    } = props;

    return (
        <Box
            component={Paper}
            padding={3}
        >
            <Stepper
                alternativeLabel
                {...others}
            >
                {items?.map((item, itemKey) => (
                    <Step
                        key={itemKey}
                        onClick={() => onChange(itemKey)}
                    >
                        <StepLabel>
                            {item?.props?.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default Tabs;