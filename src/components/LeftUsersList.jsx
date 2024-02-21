import { Avatar, IconButton, ListItem, Stack, List, Typography, Divider, Paper } from "@mui/material";
import { useState } from "react";
import DefaultUserIcon, { DownArrowIcon } from "../Icons/LeftTopNavigationIcons";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import { handleLeftUsersList } from "../functions";


export default function LeftUsersList(props) {
    const peoples = useSelector((state) => state.peoples.peoples)

    const selectedUser = useSelector((state) => state.peoples.selectedUser)

    const chats = useSelector((state) => state.chats.chats)

    const searchText = useSelector((state) => state.chats.searchText)

    const leftBelowSearchBarButtons = useSelector((state) => state.buttons.leftBelowSearchBarButtons)

    const dispatch = useDispatch()

    const [dropdownIconIndex, setDropdownIconIndex] = useState(null);

    let peoplesList = getPeoples(peoples, searchText, leftBelowSearchBarButtons)

    const menuItems = [
        'Archive chat',
        'Mute notifications',
        'Delete chat',
        'Pin chat',
        'Mark as unread',
        'Block',
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [clientXposition, setClientXposition] = useState(null)

    const [clientYposition, setClientYposition] = useState(null)

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
                    peoplesList.length < 1 ? (
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
                                    peoplesList.map((user, index) => {
                                        return (
                                            <>
                                                <ListItem
                                                    key={user.userMobileNo}
                                                    onClick={(e) => {
                                                        if (open) {
                                                            e.stopPropagation()
                                                        } else {
                                                            dispatch(handleLeftUsersList(user))
                                                        }
                                                    }}
                                                    onMouseEnter={() => setDropdownIconIndex(index)}
                                                    onMouseLeave={() => setDropdownIconIndex(null)}
                                                    sx={{
                                                        padding: "0px 15px 0px 0px",
                                                        width: "100%",
                                                        boxSizing: "border-box",
                                                        bgcolor: selectedUser.userMobileNo === user.userMobileNo ? "#2a3942" : "#111b21",
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
                                                                getLastMessageText(user.userMobileNo, chats) === null ?
                                                                    truncateText(user.userAbout)
                                                                    // user.userAbout
                                                                    :
                                                                    truncateText(getLastMessageText(user.userMobileNo, chats))
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
                                                                        // onMouseEnter={() => setDropdownIconIndex(index)}
                                                                        // onMouseLeave={() => setDropdownIconIndex(null)}
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
                                                            <IconButton
                                                                id="DownArrowIcon"
                                                                onClick={(e) => {
                                                                    setClientXposition(e.clientX)
                                                                    setClientYposition(e.clientY + 10)
                                                                    e.stopPropagation();
                                                                    // setDropdownIconIndex(index)
                                                                    handleClick(e)
                                                                }}
                                                                aria-controls={open ? 'account-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                sx={{
                                                                    padding: "0px",
                                                                    // '&:hover': { display: 'block' },
                                                                    // display : "none",
                                                                    display: dropdownIconIndex === index ? 'block' : 'none',
                                                                    // visibility: dropdownIconIndex === index ? 'visible' : 'hidden',
                                                                }}
                                                            >
                                                                <DownArrowIcon height={20} width={20} colour={"#8696a0"} />
                                                            </IconButton>
                                                            <Menu
                                                                id="account-menu"
                                                                anchorEl={anchorEl}
                                                                anchorReference="anchorPosition"
                                                                anchorPosition={{
                                                                    top: open ? clientYposition : 0,
                                                                    left: open ? clientXposition : 0,
                                                                }}
                                                                open={open}
                                                                onClose={handleClose}
                                                                onClick={handleClose}
                                                                PaperProps={{
                                                                    elevation: 0,
                                                                    sx: {
                                                                        color: "#d1d7db",
                                                                        bgcolor: "#233138",
                                                                    },
                                                                }}
                                                            >
                                                                {menuItems.map((item, index) => (
                                                                    <MenuItem
                                                                        key={index}
                                                                        onClick={handleClose}
                                                                        sx={{
                                                                            fontFamily: "inherit",
                                                                            padding: "9px 58px 9px 24px",
                                                                            fontSize: "14.5px",
                                                                            '&:hover': { bgcolor: "#182229" },
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </Stack>
                                                    </Stack>
                                                </ListItem >
                                                <Divider
                                                    key={(Number(user.userMobileNo) + index) + user.userName}
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

function getPeoples(peoples, text, belowSearchBarButtons) {

    let peoplesList = [...peoples]

    if (Object.values(belowSearchBarButtons).includes(true)) {
        const selectedButton = Object.keys(belowSearchBarButtons).find(
            (button) => belowSearchBarButtons[button]
        );

        switch (selectedButton) {
            case 'buttonAll':
                break;
            case 'buttonUnread':
                peoplesList = peoplesList.filter((user) => user.userUnreadMessages);
                break;
            case 'buttonContacts':
                peoplesList.sort((a, b) => a.userMobileNo.localeCompare(b.userMobileNo));
                break;
            case 'buttonGroups':
                break;
            default:
                break;
        }
    }

    if (text) {
        peoplesList = peoplesList.filter((user) =>
            user.userName.toLowerCase().includes(text.toLowerCase())
        );
    }

    return peoplesList
}

function truncateText(text) {
    const newText = text.length > 35 ? `${text.substring(0, 35)}...` : text;
    return newText
}

function getLastMessageText(userMobileNo, chats) {
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