import { Box, Pagination } from "@mui/material";

const Paginate = props => {

    const {
        count,
        onChange = () => {},
        ...others
    } = props;

    const HandleChange = (_, value) => onChange(value);

    if (!count || count == 1) return null;
    return (
        <Box
            padding={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Pagination
                onChange={HandleChange}
                count={count}
                {...others}
            />
        </Box>
    );
}

export default Paginate;