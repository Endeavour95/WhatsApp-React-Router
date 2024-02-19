import { Grid, Stack } from "@mui/material";
import LeftTopNavigation from "./LeftTopNavigation";
import LeftPannelSearchBar from "./LeftPannelSearchBar";
import PersonalProfileInfoDrawer from "./PersonalProfileInfoDrawer";
import LeftPannelBelowSearchBarButtons from "./LeftPannelBelowSearchBarButtons";
import LeftUsersList from "./LeftUsersList";
import { useSelector } from "react-redux";

export default function Left(props) {
    const leftTopNavigationButtons = useSelector((state) => state.buttons.leftTopNavigationButtons)

    return (
        <>
            <Stack
                direction={"column"}
                bgcolor={"#111b21"}
                height={"100%"}
                width={"100%"}
            >
                {
                    leftTopNavigationButtons.personalProfileIcon ? (
                        <>
                            <PersonalProfileInfoDrawer />
                        </>
                    ) : (
                        <>
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
                                <Stack
                                    direction="row"
                                    sx={{
                                        boxSizing: "border-box",
                                        alignItems: "center",
                                        padding: "7px 12px 7px",
                                        width: "100%",
                                    }}
                                >
                                    <LeftPannelSearchBar />
                                </Stack>
                                <LeftPannelBelowSearchBarButtons />
                                <LeftUsersList />
                            </Stack>
                        </>
                    )
                }
            </Stack>
        </>
    )
}
