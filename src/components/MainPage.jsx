import { Divider, Grid } from "@mui/material";
import Left from "./Left";
import { useEffect } from "react";
import DefaultRightPannel from "./DefaultRightPannel";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { setPeoples} from "../slices/usersSlice";
// import { setNewChats } from "../slices/chatsSlice";
import { Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useBreakpoint } from "../hooks/responsive";

export default function MainPage() {
    const { userMobileNo } = useParams()

    const isMobile = useBreakpoint()

    const location = useLocation()

    const dispatch = useDispatch();

    // const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
    //     try {
    //         const response = await axios.get('https://b75f741106774e1ba768db869459ed2b.api.mockbin.io/');
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // });

    // useEffect(() => {
    //     dispatch(fetchChats())
    //         .then((data) => {
    //             dispatch(setPeoples(data.payload.peoples))
    //             dispatch(setNewChats(data.payload.chats))
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <>
            <Grid
                container
                direction="row"
                sx={{
                    height: "100vh",
                    width: "100vw",
                    fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                    boxSizing: "border-box",
                }}
            >
                {((!userMobileNo && isMobile) || !isMobile) && <Grid
                    item
                    xs={12} sm={5.99} md={4.65} lg={3.65} xl={3.65}
                    sx={{
                        // display: { xs: userMobileNo ? "none" : "block", sm: "block" },
                        boxSizing: "border-box",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    {
                        location.pathname === '/personalInfo' ?
                            <Outlet />
                            :
                            <Left />
                    }
                </Grid>}
                {/* <Grid
                    item
                    xs={12} sm={5.99} md={4.65} lg={3.65} xl={3.65}
                    sx={{
                        display: { xs: userMobileNo ? "none" : "block", sm: "block" },
                        boxSizing: "border-box",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    {
                        location.pathname === '/personalInfo' ?
                            <Outlet/>
                            :
                            <Left />
                    }
                </Grid> */}
                <Divider
                    sx={{
                        bgcolor: "#313d45",
                        width: "0.2px",
                    }}
                />
                {((userMobileNo && isMobile) || !isMobile) && <Grid
                    item
                    xs={12} sm={6} md={7.345} lg={8.348} xl={8.348}
                    sx={{
                        // display: { xs: userMobileNo ? 'block' : "none", sm: 'block' },
                        backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                        boxSizing: "border-box",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    {
                        userMobileNo ?
                            <Outlet />
                            :
                            !isMobile && <DefaultRightPannel />
                    }
                </Grid>}
                {/* <Grid
                    item
                    xs={12} sm={6} md={7.345} lg={8.348} xl={8.348}

                    sx={{
                        display: { xs: userMobileNo ? 'block' : "none", sm: 'block' },
                        backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                        boxSizing: "border-box",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    {
                        userMobileNo ?
                            <Outlet />
                            :
                            !isMobile && <DefaultRightPannel />
                    }
                </Grid> */}
            </Grid>
        </>
    )
}
