import { Global } from "@mantine/core";
import bold from "./GreycliffCF-Bold.woff2";
import xBold from "./GreycliffCF-ExtraBold.woff2";
import reg from "./GreycliffCF-Regular.woff2";

export function CustomFonts() {
	return (
		<Global
			styles={[
				{
					"@font-face": {
						fontFamily: "Greycliff CF",
						src: `url('${bold}') format("woff2")`,
						fontWeight: 700,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Greycliff CF",
						src: `url('${xBold}') format("woff2")`,
						fontWeight: 900,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Greycliff CF",
						src: `url('${reg}') format("woff2")`,
						fontWeight: 500,
						fontStyle: "normal",
					},
				},
			]}
		/>
	);
}
