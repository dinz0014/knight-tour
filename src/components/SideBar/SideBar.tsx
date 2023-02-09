import { Center, List, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import ButtonBar from "../ButtonBar/ButtonBar";
import useStyles from "./style";

const SideBar = (): JSX.Element => {
	const theme = useMantineTheme();
	const textColor = theme.colorScheme === "dark" ? "white" : "black";
	const { classes } = useStyles();

	return (
		<Stack className={classes.root}>
			<Center>
				<Title className={classes.title} color={textColor}>
					Knight's Tour
				</Title>
			</Center>
			<Center style={{ flexDirection: "column" }}>
				<Text className={classes.welcome} color={textColor}>
					Welcome to Knight's Tour!
				</Text>
				<Text className={classes.description} color={textColor}>
					Instructions on how to play the game are below.
				</Text>
				<List className={classes.instructions} type="ordered">
					<List.Item>
						Click "START" and provide a starting square for the Knight
					</List.Item>
					<List.Item>
						You can move your Knight by first clicking on the square that the Knight is
						at, and then selecting another square for the Knight to move to.
					</List.Item>
					<List.Item>The Knight can only move in an L shape.</List.Item>
					<List.Item>The Knight cannot visit the same square twice.</List.Item>
					<List.Item>Your goal is to visit as many squares as you can.</List.Item>
					<List.Item>
						The game ends when you either visit all the squares or the Knight runs out
						of valid moves.
					</List.Item>
				</List>
			</Center>
			<ButtonBar />
		</Stack>
	);
};

export default SideBar;
