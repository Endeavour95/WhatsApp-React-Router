import { AppBar, Grid, Toolbar, Drawer, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import DefaultUserIcon, { CommunityOutlineIcon, MenuDotIcon, NewChatOutlineIcon, NewsletterOutlineIcon, StatusUnreadIcon } from "../Icons/LeftTopNavigationIcons";

export default function LeftTopNavigation1(props) {

    return (
        <>
            <Grid item
                sx={{
                    position: "relative",
                    bgcolor: "#202c33",
                    height: "59px",
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
                        <IconButton
                            id="personalProfile"
                            onClick={(e) => { props.allButtonsSetter(e.currentTarget.id, true) }}
                            sx={{
                                padding: "0px"
                            }}
                        >
                            <DefaultUserIcon />
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