import { Flex, useMantineTheme } from "@mantine/core";
import MainContainer from "./components/MainContainer/MainContainer";
import SideBar from "./components/SideBar/SideBar";
import { CustomFonts } from "./fonts/CustomFonts";

function App() {
	const theme = useMantineTheme();

	return (
		<>
			<CustomFonts />
			<Flex
				gap={0}
				style={{
					backgroundColor: theme.colors.backdropColor[theme.fn.primaryShade()],
					width: "100vw",
					minHeight: "100vh",
				}}
			>
				<SideBar />
				<MainContainer />
			</Flex>
		</>
	);
}

export default App;
