import { Button, Center, List, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { PrimaryComponentProps } from "../../types";
import useStyles from "./style";

const SideBar = (props: PrimaryComponentProps): JSX.Element => {
	const theme = useMantineTheme();
	const textColor = theme.colorScheme === "dark" ? "white" : "black";
	const { classes } = useStyles();

	return (
		<Stack className={classes.root}>
			<Title className={classes.title} color={textColor}>
				Knight's Tour
			</Title>
			<Text className={classes.welcome} color={textColor}>
				Welcome to Knight's Tour!
			</Text>
			<Stack>
				<Button>RESET</Button>
				<Button>UNDO</Button>
				<Button>HINT</Button>
				<Button>SOLVE</Button>
				<Button>HELP</Button>
			</Stack>
		</Stack>
	);
};

export default SideBar;
