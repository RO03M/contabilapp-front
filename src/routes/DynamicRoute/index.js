export const DynamicRoute = props => {

    const {
        public = false,
        acceptAuthed = true,
        ...other
    } = props;

    let token = localStorage.getItem("token");

    if (public && !acceptAuthed) return (
        <Route
            {...other}
        />
    );
    else if (public) return (
        <Route
            {...other}
        />
    );
    else if (!public) return (
        <Route
            {...other}
        />
    );
}