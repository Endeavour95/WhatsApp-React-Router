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

    return usersList
}


function truncateText(text) {
    const newText = text.length > 35 ? `${text.substring(0,35)}...` : text;
    return newText
}


// function getLastMessageText(userMobileNo, chats) {
//     if (chats.length > 0) {
//         const filteredChats = chats.filter(chat => chat.userMobileNo === userMobileNo);

//         if (filteredChats.length > 0) {
//             const sortedChats = filteredChats.sort((a, b) => b.messageId - a.messageId);

//             const lastMessageText = sortedChats[0].messageText;

//             return lastMessageText;
//         }
//     }

//     return null;
// }

// Example usage
// const userMobileNoToCheck = '9673524106';
// const lastMessageText = getLastMessageText(userMobileNoToCheck);

// console.log(lastMessageText); // Output: 'goodnight'

export default function LeftUsersList(props) {
    const [dropdownIconIndex, setDropdownIconIndex] = useState(null);

    // console.log("LeftUsersList", props.chats)

    let usersList = getUsers(props.users, props.searchText, props.belowSearchBarButtons)

    return (
        <>
            <Paper sx={{
                width:"100%",
                height: "76.2vh",
                overflow: 'auto',
                borderRadius: "0px",
                bgcolor: "#111b21",
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#374045',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#111b21',
                },

            }}> {
                    usersList.length < 1 ? (
                        <>
                            <Typography
                                sx={{
                                    color: "#667781",
                                    font: "inherit",
                                    fontSize: "14px",
                                    textAlign: "left",
                                    fontFamily:
                                        'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                                    padding: "72px 0px",
                                    textAlign: "center",
                                }}
                            >
                                No chats, contacts or messages found
                            </Typography>
                        </>
                    ) : (
                        <>


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
                                                        '&:hover': { bgcolor: "#202c33" },
                                                        display: "flex",
                                                    }}
                                                >
                                                    <Stack
                                                        p="12px 15px 12px 13px"
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
                                                        direction="row"
                                                        justifyContent="space-between"
                                                        alignItems="center"
                                                        sx={{
                                                            flex: 1,
                                                            paddingRight: "15px"
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="column"
                                                            justifyContent="center"
                                                            alignItems="flex-start"
                                                            spacing={0.3}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    color: "#ede9ef",
                                                                    font: "inherit",
                                                                    fontSize: "17px",
                                                                    textAlign: "left",
                                                                    fontFamily:
                                                                        'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                                                                }}
                                                            >
                                                                {user.userName}
                                                            </Typography>
                                                            <Typography

                                                                noWrap
                                                                variant="body2"

                                                                sx={{
                                                                    color: "#8696a0",
                                                                    font: "inherit",
                                                                    fontSize: "14px",
                                                                    textAlign: "left",
                                                                    fontFamily:
                                                                        'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                                                                }}
                                                            >
                                                                {
                                                                    props.getLastMessageText(user.userMobileNo) === null ?
                                                                        truncateText(user.userAbout)
                                                                        // user.userAbout
                                                                        :
                                                                        truncateText(props.getLastMessageText(user.userMobileNo))
                                                                    // props.getLastMessageText(user.userMobileNo)

                                                                }
                                                            </Typography>
                                                        </Stack>

                                                        <Stack
                                                            direction="column"
                                                            justifyContent="center"
                                                            alignItems="flex-end"
                                                            spacing={0.6}
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    color: "#8696a0",
                                                                    font: "inherit",
                                                                    fontSize: "12px",
                                                                    textAlign: "right",
                                                                    fontFamily:
                                                                        'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                                                                }}
                                                            >
                                                                {user.userLastSeen}
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
                                                                                fontFamily:
                                                                                    'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
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
                        </>
                    )
                }
            </Paper>
        </>
    )
}
