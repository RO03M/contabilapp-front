import Dashboard from "modules/dashboard";
import Header from "modules/header";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import routes from "../pages/registers/clients/List/data";

const AllRoutes = props => {
    return (
        <BrowserRouter>
            {/* <Header/> */}
            <Dashboard/>
            <div
                style={{ marginLeft: "3.5em" }}
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
            </div>
        </BrowserRouter>
    );
}

export default AllRoutes;