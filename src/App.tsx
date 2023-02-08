import { Flex, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import MainContainer from "./components/MainContainer/MainContainer";
import SideBar from "./components/SideBar/SideBar";
import { CustomFonts } from "./fonts/CustomFonts";

function App() {
	const { width, height } = useViewportSize();
	const theme = useMantineTheme();

	return (
		<>
			<CustomFonts />
			<Flex
				gap={0}
				style={{
					backgroundColor: theme.colors.backdropColor[theme.fn.primaryShade()],
					width: `${width}px`,
					height: `${height}px`,
				}}
			>
				<SideBar />
				<MainContainer />
			</Flex>
		</>
	);
}

export default App;
