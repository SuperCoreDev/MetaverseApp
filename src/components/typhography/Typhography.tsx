import { createTheme , Typography , ThemeProvider } from "@mui/material";

type TyphographyProps = {
    fontSize : number,
    fontWeight : number;
    lineHeight: number;
    children:  React.ReactNode;
    color:string;
}
export default function Typhographpy({fontSize,fontWeight,lineHeight,color,children}:TyphographyProps) {
    const theme = createTheme({
        typography: {
          fontFamily: 'Neue Haas Grotesk Display Pro',
          fontSize,
          fontWeightBold:fontWeight,
        },
        // components: {
        //   MuiCssBaseline: {
        //     styleOverrides: `
        //       @font-face {
        //         fontSize: ${fontSize}px;
        //         fontWeight: ${fontWeight};
        //         lineHeight: ${lineHeight}px;
        //       },
        //     `,
        //   },
        });
    return (
        <ThemeProvider theme={theme}>
            <Typography color={color}>{children}</Typography>
        </ThemeProvider>
    )  
}
