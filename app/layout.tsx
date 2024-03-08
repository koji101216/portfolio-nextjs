"use client";
import "./globals.css";
import {
  createTheme,
  Box,
  ThemeProvider,
  AppBar,
  Button,
  Toolbar,
  Link,
} from "@mui/material";
import { blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
  // 指定を単純にするためにモバイルとPCの2つに限定する
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    desktop: true;
  }
}
const defaultTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 600,
    },
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={defaultTheme}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginTop: "64px",
            background: "white",
          }}>
          {children}
        </Box>
      </ThemeProvider>
    </html>
  );
}
