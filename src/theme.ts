import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff",
        },
        background: {
            paper: "#fff",
            default: "#fafafa",
        },
        primary: {
            light: "#4f83cc",
            main: "#01579b",
            dark: "#002f6c",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff6434",
            main: "#dd2c00",
            dark: "#a30000",
            contrastText: "#fff",
        },
    },
});
export default theme;
