import { Avatar, IconButton, ListItem, Stack, List, Typography, Divider, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import DefaultUserIcon, { DownArrowIcon } from "../Icons/LeftTopNavigationIcons";

function getUsers(users, text, belowSearchBarButtons) {
    let usersList = [...users]


    if (Object.values(belowSearchBarButtons).includes(true)) {
        const selectedButton = Object.keys(belowSearchBarButtons).find(
            (button) => belowSearchBarButtons[button]
        );

        switch (selectedButton) {
            case 'buttonAll':
                break;
            case 'buttonUnread':
                usersList = usersList.filter((user) => user.userUnreadMessages);
                break;
            case 'buttonContacts':
                usersList.sort((a, b) => a.userMobileNo.localeCompare(b.userMobileNo));
                break;
            case 'buttonGroups':
                break;
            default:
                break;
        }
    }

    if (text) {
        usersList = usersList.filter((user) =>
            user.userName.toLowerCase().includes(text.toLowerCase())
        );
    }

    // if (Object.values(belowSearchBarButtons).includes(true) && text) {
    //     const selectedButton = Object.keys(belowSearchBarButtons).find(
    //         (button) => belowSearchBarButtons[button]
    //     );
    //     switch (selectedButton) {
    //         case 'buttonAll':
    //             usersList = users.filter(user =>
    //                 user.userName.toLowerCase().includes(text.toLowerCase()));
    //             break;
    //         case 'buttonUnread':
    //             usersList = users.filter(user =>
    //                 user.userName.toLowerCase().includes(text.toLowerCase()));
    //             usersList = usersList.filter((user) => user.userUnreadMessages);
    //             break;
    //         case 'buttonContacts':
    //             usersList = users.filter(user =>
    //                 user.userName.toLowerCase().includes(text.toLowerCase()));

    //             usersList.sort((a, b) => a.userMobileNo.localeCompare(b.userMobileNo));
    //             break;
    //         case 'buttonGroups':
    //             usersList = users.filter(user =>
    //                 user.userName.toLowerCase().includes(text.toLowerCase()));
    //             break;
    //         default:
    //             usersList = users.filter(user =>
    //                 user.userName.toLowerCase().includes(text.toLowerCase()));
    //             break;
    //     }
    // }

    return usersList
}

export default function LeftUsersList(props) {
    const [dropdownIconIndex, setDropdownIconIndex] = useState(null);

    let usersList = getUsers(props.users, props.searchText, props.belowSearchBarButtons)
    // const availableHeight = 'calc(100vh - 149px)';

    return (
        <>
            <Paper sx={{
                // maxHeight: ,
                height:"76.5vh",
                // bottom: 0,
                overflow: 'auto',
                borderRadius: "0px",
                bgcolor: "#111b21",
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#374045', // Customize the color of the thumb
                    // borderRadius: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#111b21', // Customize the color of the track
                },

            }}>
                <List
                    sx={{ padding: "0px" }}
                >
                    {
                        usersList.map((user, index) => {
                            return (
                                <>
                                    <ListItem
                                        onClick={() => {
                                            props.setSelectedUser(user)
                                        }}
                                        onMouseEnter={() => setDropdownIconIndex(index)}
                                        onMouseLeave={() => setDropdownIconIndex(null)}
                                        sx={{
                                            padding: "0px",
                                            bgcolor: props.selectedUser ? "#111b21" : "#2a3942",
                                            '&:hover': { bgcolor: "#202c33" }
                                        }}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="stretch"
                                        >

                                            <Stack
                                                justifyContent="center"
                                                alignItems="center"
                                                p="11.5px 15px 11.5px 13px"
                                            >
                                                {
                                                    user.profilePicture ? (
                                                        <Avatar sx={{ height: "49px", width: "49px" }} alt={user.userName} src={user.profilePicture} />
                                                    ) : (
                                                        <DefaultUserIcon height={49} width={49} />
                                                    )
                                                }
                                            </Stack>

                                            <Stack
                                                direction="column"
                                                justifyContent="center"
                                                alignItems="stretch"
                                                p="0px 15px 0px 0px"
                                            >
                                                <Stack
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: "#ede9ef",
                                                            font: "inherit",
                                                            fontSize: "17px",
                                                            textAlign: "left"
                                                        }}
                                                    >
                                                        {user.userName}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            color: "#8696a0",
                                                            font: "inherit",
                                                            fontSize: "12px",
                                                            textAlign: "right"
                                                        }}
                                                    >
                                                        {user.userLastSeen}
                                                    </Typography>
                                                </Stack>
                                                <Stack
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: "#8696a0",
                                                            font: "inherit",
                                                            fontSize: "14px",
                                                            textAlign: "left"
                                                        }}
                                                    >
                                                        {user.userAbout}
                                                    </Typography>

                                                    <Stack
                                                        direction="row"
                                                        justifyContent="flex-end"
                                                        alignItems="center"
                                                    >
                                                        {
                                                            user.userUnreadMessages && (
                                                                <IconButton
                                                                    onMouseEnter={() => setDropdownIconIndex(index)}
                                                                    onMouseLeave={() => setDropdownIconIndex(null)}
                                                                    sx={{
                                                                        color: "#111b21",
                                                                        bgcolor: "#00a884",
                                                                        font: "inherit",
                                                                        fontSize: "12px",
                                                                        textAlign: "center",
                                                                        fontWeight: "500",
                                                                        padding: "2.5px 7px",
                                                                    }}
                                                                >
                                                                    {user.userUnreadMessages}
                                                                </IconButton>
                                                            )
                                                        }
                                                        {dropdownIconIndex === index && user.userUnreadMessages && (
                                                            <IconButton sx={{ padding: "0px" }}>
                                                                <DownArrowIcon height={20} width={20} colour={"#8696a0"} />
                                                            </IconButton>
                                                        )}
                                                    </Stack>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </ListItem >
                                    <Divider
                                        variant="inset"
                                        orientation="horizontal"
                                        sx={{
                                            bgcolor: "#262f34",
                                        }}
                                    />
                                </>
                            )
                        })
                    }
                </List >
            </Paper>
        </>
    )
}
