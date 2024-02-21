import { Typography, Grid, Stack, IconButton, Avatar } from "@mui/material";
import { BackIcon } from "../Icons/SearchBarIcons";
import DefaultUserIcon, { CameraIcon, PencilIcon } from "../Icons/LeftTopNavigationIcons";
import { useSelector, useDispatch } from "react-redux";
import { handlePersonalProfileInfoDrawer } from "../functions";

export default function PersonalProfileInfoDrawer() {
    const personalInfo = useSelector((state) => state.peoples.personalInfo)

    const dispatch = useDispatch()

    return (
        <>
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
                                dispatch(handlePersonalProfileInfoDrawer({ "buttonName": e.currentTarget.id, "buttonValue": false }))
                            }}
                        >
                            <BackIcon colour="#d9dee0" />
                        </Grid>
                        <Typography sx={{
                            fontFamily: "inherit",
                            color: "#d9dee0",
                            fontSize: "19px",
                            fontWeight: "600",
                            '&:hover': { cursor: "default" },
                        }}>Profile</Typography>
                    </Stack>
                </Grid>
            </Grid>
            <IconButton
                sx={{
                    padding: "28px 0px",
                    '&:hover': { cursor: "pointer" }
                }}
            >   {
                    personalInfo.profilePicture ? (
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
            </IconButton>

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
                    <Typography sx={{ font: "inherit", color: "#d1d7db", fontSize: "16px" }}>{personalInfo.name}</Typography>
                    <PencilIcon colour="#8696a0" />
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
                    }}>{personalInfo.about}</Typography>
                    <PencilIcon colour="#8696a0" />
                </Stack>
            </Stack>
        </>
    )
}
