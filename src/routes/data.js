import ClientsPage from "pages/registers/clients";
import Settings from "pages/settings";
import Landing from "../pages/landing";

const publicRoutes = [
    { path: "/", component: <Landing/> },
    { path: "/settings", component: <Settings/> },
    { path: "/clients", component: <ClientsPage/> }
];

export default [
    ...publicRoutes
];