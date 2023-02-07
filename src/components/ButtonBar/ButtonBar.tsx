import { Button, Stack } from "@mantine/core";
import React from "react";

const ButtonBar = (): JSX.Element => {
	return (
		<Stack>
			<Button>RESET</Button>
			<Button>UNDO</Button>
			<Button>HINT</Button>
			<Button>SOLVE</Button>
			<Button>HELP</Button>
		</Stack>
	);
};

export default ButtonBar;
