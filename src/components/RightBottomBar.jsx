import { Grid, IconButton, Box, Input, Stack, List, ListItem, Dialog, Paper, Typography, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import SmileyIcon, { AttachMenuPlusIcon, SendIcon, VoiceCommandIcon } from "../Icons/RightBottomBarIcons";
import DocumentIcon, { PhotoVideoIcon, CameraIconAdvanced, ContactIcon, PollIcon, NewStickerIcon } from "../Icons/AttachmentModalIcons";

export default function RightBottomBar(props) {
    const [textToSend, setTextToSend] = useState("")

    const [rotation, setRotation] = useState(0);

    const handleRotateClick = () => {
        const newRotation = rotation === 0 ? 135 : 0;
        setRotation(newRotation);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        handleRotateClick()
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        handleRotateClick()
        setIsModalOpen(false);
    };

    function AttachmentModal({ isOpen, onClose }) {
        const attachmentOptions = [
            { icon: <DocumentIcon colour="#7f66ff" />, label: 'Document' },
            { icon: <PhotoVideoIcon colour="#007bfc" />, label: 'Photos & Videos' },
            { icon: <CameraIconAdvanced colour="#ff2e74" />, label: 'Camera' },
            { icon: <ContactIcon colour="#009de2" />, label: 'Contact' },
            { icon: <PollIcon colour="#ffbc38" />, label: 'Poll' },
            { icon: <NewStickerIcon colour="#02a698" />, label: 'New Sticker' },
        ];

        return (
            <Dialog
                open={isOpen}
                onClose={(event, reason) => {
                    onClose();
                    if (reason === 'onBackdropClick') {
                        handleCloseModal();
                    }
                }}
            >
                <Paper
                    sx={{
                        position: 'fixed',
                        top: '48.7%',
                        left: '34.2%',
                        zIndex: 1,
                        backgroundColor: '#233138',
                        padding: '3px',
                        borderRadius: '16px',
                    }}
                >
                    <List>
                        {attachmentOptions.map((option, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    margin: '0px 32px 0px 8px',
                                    '&:hover': { bgcolor: '#182229', borderRadius: '8px' },
                                    padding: '0px',
                                    height: '40px',
                                }}
                            >
                                <IconButton margin="0px 12px 0px 0px">{option.icon}</IconButton>
                                <Typography
                                    sx={{
                                        color: '#d1d7db',
                                        font: 'inherit',
                                        fontSize: '16px',
                                        textAlign: 'left',
                                        fontFamily:
                                            'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                                    }}
                                >
                                    {option.label}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Dialog>
        );
    }

    function generateMessage() {
        props.setChats([...props.chats, {
            "messageId": Number(props.chats[props.chats.length - 1].messageId) + 1,
            "messageText": textToSend,
            "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            "messageDate": new Date().toLocaleDateString([], {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            "userMobileNo": props.selectedUser.userMobileNo,
            "deliverdStatus": false,
            "readStatus": false,
        }]);
    }

    // function generateReplyMessage() {
    //     props.setChats([...props.chats,
    //     {
    //         "messageId": Number(props.chats[props.chats.length - 1].messageId) + 1,
    //         "messageText": textToSend + " reply Message",
    //         "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    //         "messageDate": new Date().toLocaleDateString([], {
    //             year: 'numeric',
    //             month: 'numeric',
    //             day: 'numeric',
    //         }),
    //         "userMobileNo": props.selectedUser.userMobileNo,
    //     }])

    //     setTextToSend("")
    // }



    // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // const exampleFunction = async () => {
    //     await generateMessage();
    //     console.log("first", props.chats);

    //     await delay(10000); // Adding a delay using a promise

    //     await generateReplyMessage();
    //     console.log("second", props.chats);

    //     console.log("third", props.chats);
    // };

    // Call the exampleFunction
    // exampleFunction();


    return (
        <>
            <AttachmentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    bgcolor: "#202c33",
                    padding: "5px 16px",
                }}
            >

                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    width={"100%"}
                >
                    <IconButton>
                        <SmileyIcon />
                    </IconButton>
                    <IconButton>
                        <AttachMenuPlusIcon
                            onClick={() => { handleOpenModal() }}
                            sx={{
                                transform: `rotate(${rotation}deg)`,
                                transition: 'transform 0.5s ease',
                            }}
                        />
                    </IconButton>
                    <Input
                        variant="standard"
                        id="messageText"
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                // exampleFunction();

                                generateMessage()
                                setTextToSend("")

                                // console.log("first", props.chats)
                                // setTimeout(() => {
                                //     generateReplyMessage()
                                //     console.log("second", props.chats)
                                // }, 10000);
                                // console.log("third", props.chats)

                            }
                        }}
                        onChange={(e) => {
                            setTextToSend(e.currentTarget.value)
                        }}
                        placeholder=" Type a message"
                        value={textToSend}
                        // InputProps={{
                        //     disableUnderline:'true'
                        // }}
                        disableUnderline
                        fullWidth
                        sx={{
                            margin: "5px 8px",
                            padding: "5px 12px",
                            borderRadius: "8px",
                            color: "#d1d7db",
                            bgcolor: "#2a3942",
                            textDecoration: "none",
                            fontFamily: "inherit",
                            fontSize: "15px",
                        }}
                    />
                </Stack>
                <IconButton>
                    {
                        textToSend ?
                            <SendIcon
                                onClick={() => {
                                    generateMessage()
                                    setTextToSend("")
                                }}
                            />
                            :
                            <VoiceCommandIcon />
                    }
                </IconButton>
            </Stack>
        </>
    )
}
