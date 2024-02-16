import { AppBar, Grid, Toolbar, Stack, Avatar } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DefaultUserIcon, { MenuDotIcon, VideoCallIcon, DownArrowIcon } from "../Icons/LeftTopNavigationIcons";
import SearchIcon from "../Icons/SearchBarIcons";
import { useState, useEffect } from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function RightTopNavigation(props) {

    // const [showTemporaryText, setShowTemporaryText] = useState(true);

    // useEffect(() => {
    //   const temporaryTextTimeout = setTimeout(() => {
    //     setShowTemporaryText(false);
    //   }, 1000);

    //   const resetTemporaryTextTimeout = setTimeout(() => {
    //     setShowTemporaryText(true);
    //   }, 6000);

    //   return () => {
    //     clearTimeout(temporaryTextTimeout);
    //     clearTimeout(resetTemporaryTextTimeout);
    //   };
    // }, [props.selectedUser]); 


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        console.log("Function Clicked");
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
                sx={{
                    padding: "10px 16px",
                    boxSizing: "border-box",
                    bgcolor: "#202c33"
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <IconButton
                        id="personalProfileIcon"
                        onClick={(e) => { }}
                        sx={{
                            padding: "0px",
                            '&:hover': { cursor: "pointer" }
                        }}
                    >
                        {
                            props.selectedUser.profilePicture ? (
                                <Avatar sx={{ height: "40px", width: "40px" }} alt={props.selectedUser.userName} src={props.selectedUser.profilePicture} />
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
                            {props.selectedUser.userName}
                        </Typography>

                        {
                            props.selectedUser.userLastSeen ?
                                <Typography
                                    sx={{
                                        color: '#8696A0',
                                        font: 'inherit',
                                        fontSize: '13px',
                                    }}
                                >
                                    last seen today at {props.selectedUser.userLastSeen}
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
                    <IconButton
                        onClick={() => {
                            handleOpenModal()
                        }}
                        sx={{
                            color: "#4c5c66",
                            border: "1px solid #2f3b43",
                            borderRadius: "50px",
                            padding: "5px 10px"
                        }}
                    >
                        <VideoCallIcon sx={{ marginRight: "6px" }} />
                        <DownArrowIcon height={13} width={13} colour={"#4c5c66"} />
                    </IconButton>
                    <IconButton
                        sx={{
                            padding: "0px 8px"
                        }}
                    >
                        <SearchIcon colour="#aebac1" height={30} width={30} />
                    </IconButton>
                    <IconButton>
                        <MenuDotIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </>
    )
}
