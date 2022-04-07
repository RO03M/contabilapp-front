export const DynamicRoute = props => {

    const {
        isPublic = false,
        acceptAuthed = true,
        ...other
    } = props;

    let token = localStorage.getItem("token");

    if (isPublic && !acceptAuthed) return (
        <Route
            {...other}
        />
    );
    else if (isPublic) return (
        <Route
            {...other}
        />
    );
    else if (!isPublic) return (
        <Route
            {...other}
        />
    );
}