import { AppBar, Grid, Toolbar, Drawer, Stack, Avatar } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import DefaultUserIcon, { CommunityOutlineIcon, MenuDotIcon, NewChatOutlineIcon, NewsletterOutlineIcon, StatusUnreadIcon } from "../Icons/LeftTopNavigationIcons";

export default function LeftTopNavigation(props) {

    return (
        <>
            <Grid item
                sx={{
                    position: "relative",
                    bgcolor: "#202c33",
                    // height: "59px",
                    width: "100%",
                    top: 0,
                    bottom: 'auto',
                    padding: "10px 16px",
                    boxSizing: "border-box",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        {/* <Avatar alt="myProfilePicture" src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107"/> */}
                        <IconButton
                            id="personalProfileIcon"
                            onClick={(e) => { props.allButtonsSetter(e.currentTarget.id, true) }}
                            sx={{
                                padding: "0px"
                            }}
                        >
                            <DefaultUserIcon
                                height={"40"}
                                width={"40"}
                            />
                        </IconButton>
                    </Stack>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <IconButton>
                            <CommunityOutlineIcon />
                        </IconButton>
                        <IconButton>
                            <StatusUnreadIcon />
                        </IconButton>
                        <IconButton>
                            <NewsletterOutlineIcon />
                        </IconButton>
                        <IconButton>
                            <NewChatOutlineIcon />
                        </IconButton>
                        <IconButton>
                            <MenuDotIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}
