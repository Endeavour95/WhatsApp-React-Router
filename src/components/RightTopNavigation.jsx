import { Stack, Avatar, Typography, IconButton, Dialog, DialogContent, Tooltip } from "@mui/material";
import DefaultUserIcon, { MenuDotIcon, VideoCallIcon, DownArrowIcon } from "../Icons/LeftTopNavigationIcons";
import SearchIcon, { BackIcon } from "../Icons/SearchBarIcons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import { setSelectedUserMobileNo } from "../slices/usersSlice";

export default function RightTopNavigation() {
    const users = useSelector((state) => state.users.users)

    const selectedUserMobileNo = useSelector((state) => state.users.selectedUserMobileNo)

    const selectedUser = users.find((user) => user.userMobileNo === selectedUserMobileNo)

    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const menuItems = [
        'Contact info',
        'Select messages',
        'Close chat',
        'Mute notifications',
        'Disappearing messages',
        'Clear chat',
        'Delete chat',
        'Report',
        'Block'
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    function VideoCallModal({ isOpen, onClose }) {
        const openWhatsAppDesktop = () => {
            const microsoftStoreLink =
                'https://www.microsoft.com/store/productId/9NKSQGP7F2NH?ocid=pdpshare';

            window.open(microsoftStoreLink, '_blank');
        };

        return (
            <Dialog
                open={isOpen}
                onClose={(event, reason) => {
                    onClose()
                    if (reason === 'onBackdropClick') {
                        onClose();
                    }
                }}
            >
                <DialogContent
                    sx={{
                        position: 'fixed',
                        top: '15%',
                        left: '58%',
                        zIndex: 1,
                        backgroundColor: '#233138',
                        padding: "0px",
                        borderRadius: "16px",
                        width: "460px",
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            padding: '12px 20px 14px',
                        }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Typography
                                sx={{
                                    color: '#d1d6d8',
                                    fontFamily: 'inherit',
                                    fontSize: '17px',
                                    fontWeight: '450',
                                    textAlign: 'left',
                                }}
                            >
                                Make calls with the Windows app
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#8696a0',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                    textAlign: 'left',
                                }}
                            >
                                Download WhatsApp for Windows to start making calls.
                            </Typography>
                        </Stack>
                        <IconButton
                            onClick={openWhatsAppDesktop}
                            sx={{
                                font: 'inherit',
                                bgcolor: '#00a884',
                                color: '#111b21',
                                fontFamily: 'inherit',
                                fontSize: '14px',
                                fontWeight: '600',
                                textAlign: 'center',
                                padding: '10px 24px',
                                borderRadius: '24px',
                                '&:hover': { bgcolor: '#06cf9c' },
                            }}
                        >
                            Get the app
                        </IconButton>
                    </Stack>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <>
            <VideoCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                whiteSpace={"nowrap"}
                // overflow={"hidden"}
                sx={{
                    padding: "10px 16px",
                    boxSizing: "border-box",
                    bgcolor: "#202c33",
                    width:"100%"
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <BackIcon
                        id="backIcon"
                        colour="#d9dee0"
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                        }}
                        onClick={(e)=>{
                            dispatch(setSelectedUserMobileNo(""))
                        }}
                    />
                    <IconButton
                        id="personalProfileIcon"
                        onClick={(e) => { }}
                        sx={{
                            padding: "0px",
                            '&:hover': { cursor: "pointer" }
                        }}
                    >
                        {
                            selectedUser.profilePicture ? (
                                <Avatar sx={{ height: "40px", width: "40px" }} alt={selectedUser.userName} src={selectedUser.profilePicture} />
                            ) : (
                                <DefaultUserIcon height={40} width={40} />
                            )
                        }
                    </IconButton>
                    <Stack
                        direction={"column"}
                        justifyContent="center"
                        alignItems="flex-start"
                        paddingLeft={"15px"}
                        // width={"40%"}
                        // overflow={"hidden"}
                        // textOverflow={"ellipsis"}
                    >
                        <Typography
                            sx={{
                                color: "#ede9ef",
                                font: "inherit",
                                fontSize: "16px",
                                fontWeight: "600",
                                '&:hover': { cursor: "pointer" }
                            }}
                        >
                            {selectedUser.userName}
                        </Typography>

                        {
                            selectedUser.userLastSeen ?
                                <Typography
                                    sx={{
                                        color: '#8696A0',
                                        font: 'inherit',
                                        fontSize: '13px',
                                    }}
                                >
                                    last seen today at {selectedUser.userLastSeen}
                                </Typography> :
                                <Typography
                                    sx={{
                                        color: '#8696A0',
                                        font: 'inherit',
                                        fontSize: '13px',
                                    }}
                                >
                                    Click here for contact info
                                </Typography>
                        }
                    </Stack>
                </Stack>
                <Stack
                    id="icons"
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <Tooltip title="Get the app for calling">
                        <IconButton
                            onClick={() => {
                                handleOpenModal()
                            }}
                            sx={{
                                color: "#4c5c66",
                                border: "1px solid #2f3b43",
                                borderRadius: "50px",
                                padding: "5px 10px",
                                bgcolor: isModalOpen ? "#374248" : "none",
                                display: {xs : "none", sm : "flex", md :"flex", lg :"flex", xl :"flex"}
                            }}
                        >
                            <VideoCallIcon sx={{ marginRight: "6px" }} />
                            <DownArrowIcon height={13} width={13} colour={"#4c5c66"} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Search...">
                        <IconButton
                            sx={{
                                padding: "0px 8px"
                            }}
                        >
                            <SearchIcon colour="#aebac1" height={30} width={30} />
                        </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Menu">
                        <IconButton>
                            <MenuDotIcon />
                        </IconButton>
                    </Tooltip> */}
                    <Tooltip title="Menu">
                        <IconButton
                            id="menuDotIcon"
                            onClick={(e) => {
                                // dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
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
                                    padding: "9px 24px 9px 24px",
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
        </>
    )
}
