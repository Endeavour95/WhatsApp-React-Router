import { Stack, IconButton, Tooltip, Menu, MenuItem, Divider } from "@mui/material";
import { useState } from "react";
import DefaultUserIcon, { CommunityOutlineIcon, MenuDotIcon, NewChatOutlineIcon, NewsletterOutlineIcon, StatusUnreadIcon } from "../Icons/LeftTopNavigationIcons";
import { useSelector, useDispatch } from "react-redux";
import { setLeftTopNavigationButtons } from "../slices/buttonsSlice";

export default function LeftTopNavigation() {
    const leftTopNavigationButtons = useSelector((state) => state.buttons.leftTopNavigationButtons)

    const dispatch = useDispatch()

    const menuItems = [
        'New group',
        'New community',
        'Starred messages',
        'Select chats',
        'Settings',
        'Log out',
    ];

    const buttonData = [
        { id: "communityOutlineIcon", title: "Communities", icon: <CommunityOutlineIcon /> },
        { id: "statusUnreadIcon", title: "Status", icon: <StatusUnreadIcon /> },
        { id: "newsletterOutlineIcon", title: "Channels", icon: <NewsletterOutlineIcon /> },
        { id: "newChatOutlineIcon", title: "New chat", icon: <NewChatOutlineIcon /> },
        { id: "menuDotIcon", title: "Menu", icon: <MenuDotIcon /> },
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleButtonClick = (buttonId) => {
        dispatch(setLeftTopNavigationButtons({ "buttonName": buttonId, "buttonValue": true }));
    };

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                {/* <Avatar alt="myProfilePicture" src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107"/> */}
                <IconButton
                    id="personalProfileIcon"
                    onClick={(e) => {
                        dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                    }}
                    sx={{
                        padding: "0px",
                        borderRadius: "50%",
                        // bgcolor: leftTopNavigationButtons.personalProfileIcon ? "#374248" : "none",
                        "&:hover": { bgcolor: "#374248" }
                    }}
                >
                    <DefaultUserIcon
                        height={"40"}
                        width={"40"}
                    />
                </IconButton>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={1}
                >
                    {buttonData.map((button) => (
                        <Tooltip key={button.id} title={button.title}>
                            <IconButton
                                id={button.id}
                                onClick={(e) => {
                                    handleButtonClick(button.id)
                                    if (button.id === "menuDotIcon") {
                                        handleClick(e)
                                    }
                                }}
                                sx={{
                                    borderRadius: "50%",
                                    // bgcolor: leftTopNavigationButtons[button.id] ? "#374248" : "none",
                                    "&:hover": { bgcolor: "#374248" },
                                }}
                            >
                                {button.icon}
                            </IconButton>
                        </Tooltip>
                    ))}
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
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
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                onClick={handleClose}
                                sx={{
                                    fontFamily: "inherit",
                                    padding: "9px 24px 9px",
                                    fontSize: "14.5px",
                                    '&:hover': { bgcolor: "#182229" },
                                }}
                            >
                                {item}
                            </MenuItem>
                        ))}
                        <Divider orientation="horizontal" sx={{ bgcolor: "#324048" }} />
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px 24px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Get WhatsApp for Windows
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </>
    )
}
