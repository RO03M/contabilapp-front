import Clients from "pages/Clients";
import Settings from "pages/settings";
import Landing from "../pages/landing";

const publicRoutes = [
    { path: "/", component: <Landing/> },
    { path: "/settings", component: <Settings/> },
    { path: "/clients", component: <Clients/> }
];

export default [
    ...publicRoutes
];