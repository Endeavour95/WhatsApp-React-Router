import { Divider, Grid, Box, Drawer, Typography, Stack, Paper } from "@mui/material";
import RightTopNavigation from "./RightTopNavigation";
import RightBottomBar from "./RightBottomBar";
import RightMiddleChatSection from "./RightMiddleChatSection";

const open = true
const onClose = false

export default function Right(props) {
    return (
        <>
            <Stack
                direction="column"
                height={"100%"}
                // height={"100vh"}
                width={"100%"}
                // justifyContent="space-between"
                sx={{
                    backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                    bgcolor: "#0b141a",
                }}
            >
                <RightTopNavigation />
                <RightMiddleChatSection />
                <RightBottomBar />
            </Stack>
        </>
    )
}
