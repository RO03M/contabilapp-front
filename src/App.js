import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from "@mui/material";

function App() {

	const palette = useSelector(store => store.PaletteReducer.palette);
	const theme = useMemo(() => createTheme(palette), [palette]);
	
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				{/* <Box> */}
					<CssBaseline/>
					<AllRoutes/>
				{/* </Box> */}
			</ThemeProvider>
		</div>
	);
}

export default App;
