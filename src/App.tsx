import MainContainer from "./components/MainContainer/MainContainer";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<div style={{ display: "flex" }}>
			<SideBar />
			<MainContainer />
		</div>
	);
}

export default App;
