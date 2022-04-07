import { Box } from "@mui/material";
import Dashboard from "modules/dashboard";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import routes from "./data";

const AllRoutes = props => {
    return (
        <BrowserRouter>
            <Dashboard/>
            <Box
                marginLeft={"3.5em"}
            >
                <Routes>
                    {routes?.map((value, key) => (
                        <Route
                            path={value?.path}
                            element={value?.component}
                            exact={true}
                            key={key}
                        />
                    ))}
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default AllRoutes;