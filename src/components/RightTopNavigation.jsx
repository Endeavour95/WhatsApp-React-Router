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

            // Open the Microsoft Store link in the default browser
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
                                    font: 'inherit',
                                    fontSize: '17px',
                                    fontWeight: '450',
                                    textAlign: 'left',
                                    fontFamily:
                                        'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                                }}
                            >
                                Make calls with the Windows app
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#8696a0',
                                    font: 'inherit',
                                    fontSize: '14px',
                                    textAlign: 'left',
                                    fontFamily:
                                        'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
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
                                font: 'inherit',
                                fontSize: '14px',
                                fontWeight: '600',
                                textAlign: 'center',
                                padding: '10px 24px',
                                borderRadius: '24px',
                                '&:hover': { bgcolor: '#06cf9c' },
                                fontFamily:
                                    'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
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
            <Grid item
                sx={{
                    height: "9.6vh",
                    '&:hover': { cursor: "pointer" }
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{
                        padding: "10px 16px",
                        // height: "inherit",
                        boxSizing: "border-box",
                        bgcolor: "#202c33"
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Box
                            id="personalProfileIcon"
                            onClick={(e) => { }}
                            sx={{
                                paddingRight: "15px",
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
                        </Box>
                        <Stack
                            direction={"column"}
                            justifyContent="center"
                            alignItems="flex-start"
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
                    >
                        <IconButton
                            onClick={() => {
                                handleOpenModal()
                            }}
                            sx={{
                                color: "#4c5c66",
                            }}
                        >
                            <VideoCallIcon sx={{ marginRight: "6px" }} />
                            <DownArrowIcon height={13} width={13} colour={"#4c5c66"} />
                        </IconButton>
                        <IconButton
                            id="searchIcon"
                            onClick={(e) => {

                            }}
                        >
                            <SearchIcon
                                colour="#aebac1" height={30} width={30}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                marginTop: "2px"
                            }}
                        >
                            <MenuDotIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}
