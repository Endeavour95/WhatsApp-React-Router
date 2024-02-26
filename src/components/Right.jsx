import { Divider, Grid, Box, Drawer, Typography, Stack, Paper } from "@mui/material";
import RightTopNavigation from "./RightTopNavigation";
import RightBottomBar from "./RightBottomBar";
import RightMiddleChatSection from "./RightMiddleChatSection";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLeftUsersList } from "../functions";
import { setSelectedUserMobileNo } from "../slices/usersSlice";
import { useEffect } from "react";

const open = true
const onClose = false

export default function Right() {
    const { userMobileNo } = useParams()

    console.log("serrsaf", userMobileNo)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    // useEffect(() => {
    // Check if selectedUserMobileNo is present in the URL params
    // if (userMobileNo) {
    // Dispatch your action to handle left users list
    dispatch(handleLeftUsersList(userMobileNo));
    // } else {
    // If not present, you can navigate to a default route or handle it as needed
    // navigate(".."); // Change "/default-route" to your desired default route
    // }
    // }, [selectedUserMobileNo, dispatch, navigate]);

    // dispatch(handleLeftUsersList(selectedUserMobileNo))

    // function handleRefresh(selectedUserMobileNo) {
    // dispatch(handleLeftUsersList(selectedUserMobileNo))
    // }

    // handleRefresh(selectedUserMobileNo)

    // useEffect(() => {
    //     handleRefresh(selectedUserMobileNo)
    // }, [])



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
