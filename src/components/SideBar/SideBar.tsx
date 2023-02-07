import { Stack, Text, Title } from "@mantine/core";
import React from "react";
import ButtonBar from "../ButtonBar/ButtonBar";

const SideBar = () => {
	return (
		<Stack>
			<Title>Knight's Tour</Title>
			<Text>Welcome to Knight's Tour!</Text>
			<Text>
				Click "HELP" to see instructions on how to play the game.
			</Text>
			<ButtonBar />
		</Stack>
	);
};

export default SideBar;
