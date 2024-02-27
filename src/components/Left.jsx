import { Grid, Stack, Box } from "@mui/material";
import LeftTopNavigation from "./LeftTopNavigation";
import LeftPannelSearchBar from "./LeftPannelSearchBar";
import LeftPannelBelowSearchBarButtons from "./LeftPannelBelowSearchBarButtons";
import LeftUsersList from "./LeftUsersList";

export default function Left() {

    return (
        <>
            <Stack
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
