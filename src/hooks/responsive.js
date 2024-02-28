import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoint = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));
    // const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
    // const isLaptop = useMediaQuery(theme.breakpoints.up('md'));

    // return { isMobile, isTablet, isLaptop }
    return isMobile
}