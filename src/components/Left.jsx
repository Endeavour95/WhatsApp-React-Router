import { Grid, Stack } from "@mui/material";
import LeftTopNavigation from "./LeftTopNavigation";
import LeftPannelSearchBar from "./LeftPannelSearchBar";
import PersonalProfileInfoDrawer from "./PersonalProfileInfoDrawer";
import LeftPannelBelowSearchBarButtons from "./LeftPannelBelowSearchBarButtons";
import LeftUsersList from "./LeftUsersList";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export function LeftPannel() {
    return (
        <><Stack
            direction={"column"}
            bgcolor={"#111b21"}
            height={"100%"}
            width={"100%"}
        >
            <Stack
                direction="column"
                height={"100%"}
                width={"100%"}
            >
                <Grid item
                    sx={{
                        bgcolor: "#202c33",
                        padding: "10px 16px",
                    }}
                >
                    <LeftTopNavigation />
                </Grid>
                <Box
                    sx={{
                        boxSizing: "border-box",
                        alignItems: "center",
                        padding: "7px 12px 7px",
                        width: "100%",
                    }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            bgcolor: "#202C33",
                            borderRadius: "8px"

                        }}
                    >
                        <LeftPannelSearchBar />
                    </Stack>
                </Box>
                <LeftPannelBelowSearchBarButtons />
                <LeftUsersList />
            </Stack>
        </Stack>
        </>
    )
}

export default function Left() {
    const leftTopNavigationButtons = useSelector((state) => state.buttons.leftTopNavigationButtons)

    return (
        <>
            {/* <Stack
                direction={"column"}
                bgcolor={"#111b21"}
                height={"100%"}
                width={"100%"}
            > */}
            {/* <Outlet/> */}
            {/* {
                    leftTopNavigationButtons.personalProfileIcon ? (
                        <PersonalProfileInfoDrawer />
                    ) : ( */}
            <LeftPannel />
            {/* )
                } */}
            {/* </Stack> */}
        </>
    )
}
