import { MantineProvider, createTheme } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { NavigationProgress, nprogress } from "@mantine/nprogress";
import { useEffect, useRef } from "react";
import { useSnackbar } from "notistack";


const theme = createTheme({
	fontFamily: 'Montserrat, sans-serif',
});

function App() {

	const reqwestListener = useRef();

	const { enqueueSnackbar } = useSnackbar()

	const onReqwest = (e: CustomEvent) => {
		const { loading, error } = e.detail
		if (loading) nprogress.start();
		else nprogress.complete();
		if (error) {
			enqueueSnackbar(error, { variant: 'error' })
		}
	}

	useEffect(() => {
		//@ts-expect-error any
		reqwestListener.current = window.addEventListener('reqwest', onReqwest)
		//@ts-expect-error any
		return () => window.removeEventListener(reqwestListener.current, onReqwest);
	})

	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<NavigationProgress />
			<RouterProvider router={routes} />
		</MantineProvider>
	);
}

export default App
