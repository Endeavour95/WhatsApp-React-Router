import { Avatar, IconButton, ListItem, Stack, List, Typography, Divider, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import DefaultUserIcon, { DownArrowIcon } from "../Icons/LeftTopNavigationIcons";
import { useSelector, useDispatch } from "react-redux";
import { StarTwoTone } from "@mui/icons-material";
import { setUnreadMessages, setSelectedUserMobileNo } from "../slices/usersSlice";

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
    const newText = text.length > 35 ? `${text.substring(0, 35)}...` : text;
    return newText
}

export default function LeftUsersList(props) {
    const chats = useSelector((state) => state.chats.chats)

    const searchText = useSelector((state) => state.chats.searchText)

    const users = useSelector((state) => state.users.users)

    const selectedUserMobileNo = useSelector((state) => state.users.selectedUserMobileNo)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUnreadMessages(selectedUserMobileNo))
    }, [selectedUserMobileNo]);

    const [dropdownIconIndex, setDropdownIconIndex] = useState(null);

    let usersList = getUsers(users, searchText, props.belowSearchBarButtons)


    function getLastMessageText(userMobileNo) {
        if (chats.length > 0) {
            const filteredChats = chats.filter(chat => chat.userMobileNo === userMobileNo);

            if (filteredChats.length > 0) {
                const sortedChats = filteredChats.sort((a, b) => b.messageId - a.messageId);

                const lastMessageText = sortedChats[0].messageText;

                return lastMessageText;
            }
        }

        return null;
    }




    return (
        <>
            <Paper sx={{
                width: "100%",
                height: "100%",
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
                                    fontFamily: "inherit",
                                    fontSize: "14px",
                                    textAlign: "left",
                                    padding: "72px 0px",
                                    textAlign: "center",
                                    height: "100%",
                                    width: "100%"
                                }}
                            >
                                No chats, contacts or messages found
                            </Typography>
                        </>
                    ) : (
                        <>


                            <List
                                sx={{
                                    padding: "0px",
                                    height: "100%",
                                    width: "100%",
                                    boxSizing: "border-box",
                                }}
                            >
                                {
                                    usersList.map((user, index) => {
                                        return (
                                            <>
                                                <ListItem
                                                    onClick={() => {
                                                        dispatch(setSelectedUserMobileNo(user.userMobileNo))
                                                        // props.setSelectedUser(user)
                                                        // dispatch(setUnreadMessages(props.selectedUser))
                                                    }}
                                                    onMouseEnter={() => setDropdownIconIndex(index)}
                                                    onMouseLeave={() => setDropdownIconIndex(null)}
                                                    sx={{
                                                        padding: "0px 15px 0px 0px",
                                                        width: "100%",
                                                        boxSizing: "border-box",
                                                        bgcolor: selectedUserMobileNo === user.userMobileNo ? "#2a3942" : "#111b21",
                                                        '&:hover': { bgcolor: "#202c33" },
                                                        justifyContent: "space-between",
                                                        alignItems: "center"
                                                    }}
                                                >
                                                    <IconButton
                                                        sx={{
                                                            padding: "12px 15px 12px 13px",
                                                        }}
                                                    >
                                                        {
                                                            user.profilePicture ? (
                                                                <Avatar sx={{ height: "49px", width: "49px" }} alt={user.userName} src={user.profilePicture} />
                                                            ) : (
                                                                <DefaultUserIcon height={49} width={49} />
                                                            )
                                                        }
                                                    </IconButton>
                                                    <Stack
                                                        direction="column"
                                                        justifyContent="center"
                                                        alignItems="flex-start"
                                                        spacing={0.3}
                                                        sx={{
                                                            width: "100%",
                                                            boxSizing: "border-box",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                color: "#ede9ef",
                                                                fontFamily: "inherit",
                                                                fontSize: "17px",
                                                                textAlign: "left",
                                                            }}
                                                        >
                                                            {user.userName}
                                                        </Typography>
                                                        <Typography
                                                            sx={{
                                                                color: "#8696a0",
                                                                fontFamily: "inherit",
                                                                fontSize: "14px",
                                                                textAlign: "left",
                                                            }}
                                                        >
                                                            {
                                                                getLastMessageText(user.userMobileNo) === null ?
                                                                    truncateText(user.userAbout)
                                                                    // user.userAbout
                                                                    :
                                                                    truncateText(getLastMessageText(user.userMobileNo))
                                                                // getLastMessageText(user.userMobileNo)

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
                                                                fontFamily: "inherit",
                                                                fontSize: "12px",
                                                                textAlign: "right",
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
                                                                            fontFamily: "inherit",
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
                                                            {dropdownIconIndex === index && (
                                                                <DownArrowIcon height={20} width={20} colour={"#8696a0"} />
                                                            )}
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
