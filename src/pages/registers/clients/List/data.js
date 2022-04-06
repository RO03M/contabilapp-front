import ClientsList from "pages/registers/clients/List";
import Settings from "pages/settings";
import Landing from "../../../landing";

const publicRoutes = [
    { path: "/", component: <Landing/> },
    { path: "/settings", component: <Settings/> },
    { path: "/clients", component: <ClientsList/> }
];

export default [
    ...publicRoutes
];