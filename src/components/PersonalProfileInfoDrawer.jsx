import { Typography, Grid, Button, Toolbar, AppBar, Stack, Drawer, IconButton, Avatar } from "@mui/material";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BackIcon } from "../Icons/SearchBarIcons";
import DefaultUserIcon, { CameraIcon, PencilIcon } from "../Icons/LeftTopNavigationIcons";



export default function PersonalProfileInfoDrawer(props) {
    return (
        <>
            <Grid
                item
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <Grid
                        item
                        sx={{
                            height: "108px",
                            padding: "0px 20px 0px 23px",
                            boxSizing: "border-box",
                            bgcolor: "#202c33",
                        }}
                    >
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="stretch"
                            sx={{
                                height: "inherit",
                                width: "inherit",
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                sx={{
                                    height: "calc(100% - 49px)",
                                    width: "inherit",
                                }}
                            >
                                <Grid
                                    item
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    id="personalProfileIcon"
                                    sx={{
                                        height: "24px",
                                        width: "53px",
                                        '&:hover': { cursor: "pointer" },
                                    }}
                                    onClick={(e) => {
                                        props.allButtonsSetter(e.currentTarget.id, false)
                                    }}
                                >
                                    <BackIcon
                                        colour="#d9dee0"
                                    />
                                </Grid>
                                <Typography sx={{
                                    font: "inherit",
                                    color: "#d9dee0",
                                    fontSize: "19px",
                                    fontWeight: "600",
                                    '&:hover': { cursor: "default" },
                                }}>Profile</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            padding: "28px 0px",
                            '&:hover': { cursor: "pointer" }
                        }}
                    >   {
                            props.personalInfo.profilePicture ? (
                                <Avatar />
                            ) : (

                                <DefaultUserIcon
                                    height={"200"}
                                    width={"200"}
                                />
                            )
                        }
                        {/* <IconButton>
                            <DefaultUserIcon
                                height={"212"}
                                width={"212"}
                            />
                            <CameraIcon />
                            <Stack
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="stretch"
                                spacing={0}
                            >
                                <IconButton
                                    sx={{
                                        fontSize: "13px",
                                        color: "#c3c9c2"
                                    }}
                                >
                                    ADD PROFILE PHOTO
                                </IconButton>
                            </Stack>
                        </IconButton> */}
                    </Stack>

                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={2.6}
                        sx={{
                            padding: "14px 30px 10px",
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
                            padding: "14px 30px 10px",
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
                </Grid>
            </Grid>
        </>
    )
}
