const LIGHT_PALETTE = {
    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                        backgroundColor: "#f1f1f1"
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#606060",//@c0c0c0
                        minHeight: 24,
                        border: "3px solid #f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#2b2b2b",
                    },
                    "& .MuiTextField-root": {
                        backgroundColor: "white"
                    }
                },
            },
        },
    },
    components: {
        MuiTextField:  {
            styleOverrides: {
                root: {
                    "&.simple": {
                        "& .MuiInputBase-root": {
                            transition: "200ms",
                            color: "white",
                            borderRadius: "0",
                            padding: "0 10px",
                            "&:after": {
                                display: "none"
                            },
                            "&:before": {
                                display: "none"
                            }
                        }
                    }
                }
            }
        }
    },
    typography: {
        fontFamily: [
            "'Montserrat', sans-serif"
        ]
    },
    palette: {
        mode: "light",
        // primary: {
        //     light: '#B0A394',
        //     main: '#a29688',
        //     dark: '#635C54',
        //     contrastText: '#fff',
        // },
        // secondary: {
        //     main: "#f3da26",
        //     dark: "#eccd18",
        //     contrastText: "#000"
        // }
    }
}

const INITIAL_STATE = {
    palette: LIGHT_PALETTE
};

export default (state = INITIAL_STATE, action) => {
    switch (action?.type) {
        default:
            return { ...state };
    }
};