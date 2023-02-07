import { Flex } from "@mantine/core";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<Flex gap={0}>
			<SideBar />
			<MainContainer />
		</Flex>
	);
}

export default App;
