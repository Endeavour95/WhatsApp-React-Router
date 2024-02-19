import { Stack, Avatar, IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
                    <Tooltip title="Communities">
                        <IconButton
                            id="communityOutlineIcon"
                            onClick={(e) => {
                                dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                            }}
                            sx={{
                                borderRadius: "50%",
                                // bgcolor: leftTopNavigationButtons.communityOutlineIcon ? "#374248" : "none",
                                "&:hover": { bgcolor: "#374248" }
                            }}
                        >
                            <CommunityOutlineIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Status">
                        <IconButton
                            id="statusUnreadIcon"
                            onClick={(e) => {
                                dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                            }}
                            sx={{
                                borderRadius: "50%",
                                // bgcolor: leftTopNavigationButtons.statusUnreadIcon ? "#374248" : "none",
                                "&:hover": { bgcolor: "#374248" }
                            }}
                        >
                            <StatusUnreadIcon />
                        </IconButton >
                    </Tooltip>
                    <Tooltip title="Channels">
                        <IconButton
                            id="newsletterOutlineIcon"
                            onClick={(e) => {
                                dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                            }}
                            sx={{
                                borderRadius: "50%",
                                // bgcolor: leftTopNavigationButtons.newsletterOutlineIcon ? "#374248" : "none",
                                "&:hover": { bgcolor: "#374248" }
                            }}
                        >
                            <NewsletterOutlineIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="New chat">
                        <IconButton
                            id="newChatOutlineIcon"
                            onClick={(e) => {
                                dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                            }}
                            sx={{
                                borderRadius: "50%",
                                // bgcolor: leftTopNavigationButtons.newChatOutlineIcon ? "#374248" : "none",
                                "&:hover": { bgcolor: "#374248" }
                            }}
                        >
                            <NewChatOutlineIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Menu">
                        <IconButton
                            id="menuDotIcon"
                            onClick={(e) => {
                                dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                                handleClick(e)
                            }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            sx={{
                                borderRadius: "50%",
                                bgcolor: anchorEl ? "#374248" : "none",
                                "&:hover": { bgcolor: "#202c33" }
                            }}
                        >
                            <MenuDotIcon />
                        </IconButton>
                    </Tooltip>
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
                    {/* <Menu
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
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            New group
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            New community
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Starred messages
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Select chats
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Settings
                        </MenuItem>
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                fontSize: "14.5px",
                                padding: "9px 24px 9px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Log out
                        </MenuItem>
                        <Divider
                            orientation="horizontal"
                            sx={{
                                bgcolor: "#262f34",
                            }}
                        />
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "5px 24px 5px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Get WhatsApp for Windows
                        </MenuItem>
                    </Menu> */}
                </Stack>
            </Stack>
        </>
    )
}
