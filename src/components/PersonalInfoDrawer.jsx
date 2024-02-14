import React from 'react';
import { Typography, Stack, Drawer, IconButton, Avatar, Divider } from "@mui/material";
import DefaultUserIcon, { PencilIcon } from "../Icons/LeftTopNavigationIcons";
import { BackIcon } from "../Icons/SearchBarIcons";

export default function PersonalProfileInfoDrawer(props) {
    return (
        <Drawer
            anchor="left"
            open={props.allButtons.personalProfileIcon}
            onClose={() => props.allButtonsSetter("personalProfileIcon", false)}
        >
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                sx={{
                    width: "inhert", // Adjust the width as needed
                    padding: "20px",
                    boxSizing: "border-box",
                    bgcolor: "#202c33",
                    height: "100%",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                        height: "59px",
                        '&:hover': { cursor: "pointer" },
                    }}
                    onClick={() => props.allButtonsSetter("personalProfileIcon", false)}
                >
                    <BackIcon colour="#d9dee0" />
                    <Typography sx={{
                        font: "inherit",
                        color: "#d9dee0",
                        fontSize: "19px",
                        fontWeight: "600",
                        '&:hover': { cursor: "default" },
                    }}>Profile</Typography>
                </Stack>

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        padding: "28px 0px",
                        '&:hover': { cursor: "pointer" }
                    }}
                >
                    {props.personalInfo.profilePicture ? (
                        <Avatar />
                    ) : (
                        <DefaultUserIcon height={"200"} width={"200"} />
                    )}
                </Stack>

                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2.6}
                    sx={{
                        marginBottom: "10px",
                    }}
                >
                    <Typography sx={{
                        font: "inherit",
                        color: "#008069",
                        fontSize: "14px",
                        '&:hover': { cursor: "default" }
                    }}>Your name</Typography>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                    >
                        <Typography sx={{ font: "inherit", color: "#d1d7db", fontSize: "16px" }}>{props.personalInfo.name}</Typography>
                        <IconButton sx={{ color: "#8696a0", padding: "0px" }}>
                            <PencilIcon />
                        </IconButton>
                    </Stack>
                </Stack>

                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    sx={{
                        margin: "4px 20px 28px 30px",
                    }}
                >
                    <Typography sx={{
                        font: "inherit",
                        color: "#8696a0",
                        fontSize: "14px",
                        '&:hover': { cursor: "default" },
                    }}>
                        This is not your username or pin. This name will be visible
                        to your WhatsApp contacts.
                    </Typography>
                </Stack>

                <Stack
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={2.6}
                    sx={{
                        marginBottom: "10px",
                    }}
                >
                    <Typography sx={{
                        font: "inherit",
                        color: "#008069",
                        fontSize: "14px",
                        '&:hover': { cursor: "default" },
                    }}>About</Typography>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="stretch"
                    >
                        <Typography sx={{
                            font: "inherit",
                            color: "#d1d7db",
                            fontSize: "16px",
                        }}>{props.personalInfo.about}</Typography>
                        <IconButton sx={{ color: "#8696a0", padding: "0px" }}>
                            <PencilIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Drawer>
    );
}
