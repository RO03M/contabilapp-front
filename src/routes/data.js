import ClientsTable from "pages/Clients/Table";
import Settings from "pages/settings";
import Landing from "../pages/landing";

const publicRoutes = [
    { path: "/", component: <Landing/> },
    { path: "/settings", component: <Settings/> },
    { path: "/clients", component: <ClientsTable/> }
];

export default [
    ...publicRoutes
];