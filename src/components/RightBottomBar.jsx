import { Grid, IconButton, Box, Input, Stack, List, ListItem, Dialog, Paper, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import SmileyIcon, { AttachMenuPlusIcon, SendIcon, VoiceCommandIcon } from "../Icons/RightBottomBarIcons";
import DocumentIcon, { PhotoVideoIcon, CameraIconAdvanced, ContactIcon, PollIcon, NewStickerIcon } from "../Icons/AttachmentModalIcons";

export default function RightBottomBar(props) {
    const [textToSend, setTextToSend] = useState("")

    // const [attachMenuButton, setAttachMenuButton] = useState(false)

    const [rotation, setRotation] = useState(0);

    const handleRotateClick = () => {
        // const newAttachMenuButton = attachMenuButton === false ? true : false;
        const newRotation = rotation === 0 ? 135 : 0;
        setRotation(newRotation);
        // setAttachMenuButton(newAttachMenuButton);
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

    function AttachMentModal({ isOpen, onClose }) {
        return (
            <Dialog
                open={isOpen}
                onClose={(event, reason) => {
                    onClose()
                    if (reason === 'onBackdropClick') {
                        // onClose();
                        handleCloseModal()
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
                        padding: "3px",
                        borderRadius: "16px",
                    }}
                >

                    <List>
                        <ListItem
                            sx={{
                                margin: "0px 32px 0px 8px",
                                '&:hover': { bgcolor: "#182229", borderRadius: "8px" },
                                padding: "0px",
                                height: "40px",
                            }}
                        >
                            <IconButton margin={"0px 12px 0px 0px"}>.
                                <DocumentIcon colour="#7f66ff" />
                            </IconButton>
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
                                Document
                            </Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                margin: "0px 32px 0px 8px",
                                '&:hover': { bgcolor: "#182229", borderRadius: "8px" },
                                padding: "0px",
                                height: "40px",
                            }}
                        >
                            <IconButton margin={"0px 12px 0px 0px"}>
                                <PhotoVideoIcon colour="#007bfc" />
                            </IconButton>
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
                                Photos & Videos
                            </Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                margin: "0px 32px 0px 8px",
                                '&:hover': { bgcolor: "#182229", borderRadius: "8px" },
                                padding: "0px",
                                height: "40px",
                            }}
                        >
                            <IconButton margin={"0px 12px 0px 0px"}>
                                <CameraIconAdvanced colour="#ff2e74" />
                            </IconButton>
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
                                Camera
                            </Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                margin: "0px 32px 0px 8px",
                                '&:hover': { bgcolor: "#182229", borderRadius: "8px" },
                                padding: "0px",
                                height: "40px",
                            }}
                        >
                            <IconButton margin={"0px 12px 0px 0px"}>
                                <ContactIcon colour="#009de2" />
                            </IconButton>
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
                                Contact
                            </Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                margin: "0px 32px 0px 8px",
                                '&:hover': { bgcolor: "#182229", borderRadius: "8px" },
                                padding: "0px",
                                height: "40px",
                            }}
                        >
                            <IconButton margin={"0px 12px 0px 0px"}>
                                <PollIcon colour="#ffbc38" />
                            </IconButton>
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
                                Poll
                            </Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                margin: "0px 32px 0px 8px",
                                '&:hover': { bgcolor: "#182229", borderRadius: "8px" },
                                padding: "0px",
                                height: "40px",
                            }}
                        >
                            <IconButton margin={"0px 12px 0px 0px"}>
                                <NewStickerIcon colour="#02a698" />
                            </IconButton>
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
                                New Sticker
                            </Typography>
                        </ListItem>
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

        // props.setChats([...props.chats, {
        //     "messageId": Number(props.chats[props.chats.length - 1].messageId) + 1,
        //     "messageText": textToSend,
        //     "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        //     "messageDate": new Date().toLocaleDateString([], {
        //         year: 'numeric',
        //         month: 'numeric',
        //         day: 'numeric',
        //     }),
        //     "userMobileNo": props.selectedUser.userMobileNo,
        // }]);




        // props.updateUsers(
        //     {
        //         "messageId": Number(props.chats[props.chats.length - 1].messageId) + 1,
        //         "messageText": textToSend,
        //         "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        //         "messageDate": new Date().toLocaleDateString([], {
        //             year: 'numeric',
        //             month: 'numeric',
        //             day: 'numeric',
        //         }),
        //         "userMobileNo": props.selectedUser.userMobileNo,
        //         "deliverdStatus": false,
        //         "readStatus": false,
        //     }
        // )

        // useEffect(() => {
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
        // }, [props.chats])
        // // setTextToSend("")
        // console.log("generateMessage second call ", props.chats)
    }

    function generateReplyMessage() {
        props.setChats([...props.chats,
        {
            "messageId": Number(props.chats[props.chats.length - 1].messageId) + 1,
            "messageText": textToSend + " reply Message",
            "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            "messageDate": new Date().toLocaleDateString([], {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            "userMobileNo": props.selectedUser.userMobileNo,
        }])

        setTextToSend("")
    }

    return (
        <>
            <AttachMentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />

            {/* <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    padding: "5px 16px",
                    height: "5vh",
                }}
            >

                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
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
                        id="messageText"
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                generateMessage()
                            }
                        }}
                        onChange={(e) => {
                            setTextToSend(e.currentTarget.value)
                        }}
                        placeholder=" Type a message"
                        value={textToSend}
                        disableUnderline
                        fullWidth
                        // multiline rows={5}
                        sx={{
                            // margin: "5px 8px",
                            // padding: "5px 12px",
                            borderRadius: "8px",
                            color: "#d1d7db",
                            bgcolor: "#2a3942",
                            // textIndent: "0px",
                            // height: "100%",
                            textDecoration: "none",
                            // width: "100%",
                            font: "inherit",
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
                                }}
                            />
                            :
                            <VoiceCommandIcon />
                    }
                </IconButton>
            </Stack> */}

            <Grid
                item
                sx={{
                    padding: "5px 16px",
                    bgcolor: "#202c33",
                    width: "inherit",
                    height: "9.9vh",
                    boxSizing: "border-box",
                }}
            >
                <Grid
                    container
                    direction="row"
                >

                    <Grid
                        item
                        sx={{
                            padding: "5px 0px",
                            height: "inherit",
                            boxSizing: "border-box",
                        }}
                    >
                        <Grid
                            container
                            direction="row"
                        >
                            <Grid
                                item
                                sx={{
                                    height: "inherit",
                                    padding: "8px",
                                }}
                            >
                                <SmileyIcon />
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    height: "inherit",
                                    padding: "8px",
                                    // bgcolor: attachMenuButton ? "#374248" : "#202c33",
                                    bgcolor: rotation == 135 ? "#374248" : "#202c33",
                                    borderRadius: "50%"
                                }}
                            >
                                <AttachMenuPlusIcon
                                    onClick={() => {
                                        handleOpenModal()
                                        // handleRotateClick()
                                    }}
                                    sx={{
                                        transform: `rotate(${rotation}deg)`,
                                        transition: 'transform 0.5s ease',
                                    }}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid
                        item
                        sx={{
                            height: "52px",
                        }}
                    >
                        <Grid
                            container
                        >
                            <Grid
                                item
                                sx={{
                                    margin: "5px 8px",
                                    bgcolor: "#2a3942",
                                    borderRadius: "8px",
                                    border: "1px solid #2a3942",
                                    height: "41.65px",
                                }}
                            >
                                <Input
                                    id="messageText"
                                    onKeyUp={(e) => {
                                        if (e.key === "Enter") {
                                            generateMessage()
                                        }
                                    }}
                                    onChange={(e) => {
                                        setTextToSend(e.currentTarget.value)
                                    }}
                                    // onKeyUp={(e) => {
                                    //     if (e.key === "Enter" && e.shiftKey) {
                                    //         // If "Shift + Enter" is pressed, prevent the default behavior (newline) and move the cursor to the next line
                                    //         e.preventDefault();

                                    //         const input = e.target;
                                    //         const currentPosition = input.selectionStart;
                                    //         const currentValue = textToSend; // Use the text state instead of input.value

                                    //         const newValue =
                                    //             currentValue.substring(0, currentPosition) +
                                    //             "\n" +
                                    //             currentValue.substring(currentPosition);

                                    //         setTextToSend(newValue);

                                    //         // Move the cursor to the next line after a short delay
                                    //         setTimeout(() => {
                                    //             input.setSelectionRange(currentPosition + 1, currentPosition + 1);
                                    //         }, 0);
                                    //     } else if (e.key === "Enter" && !e.shiftKey) {
                                    //         // If only "Enter" is pressed (without "Shift"), generate a message
                                    //         generateMessage();
                                    //     }
                                    // }}
                                    // onChange={(e) => {
                                    //     if (textToSend.length > 40){
                                    //         setTextToSend("\n" + e.currentTarget.value)
                                    //     }
                                    //     setTextToSend(e.currentTarget.value)
                                    // }}
                                    placeholder=" Type a message"
                                    value={textToSend}
                                    disableUnderline
                                    // fullWidth
                                    // multiline={textToSend.length > 40 ? true : false}
                                    rows={5}
                                    sx={{
                                        padding: "9px 12px",
                                        color: "#d1d7db",
                                        textIndent: "0px",
                                        height: "100%",
                                        textDecoration: "none",
                                        width: "70%",
                                        font: "inherit",
                                        fontSize: "15px",
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    padding: "5px 0px",
                                    height: "52px",
                                    width: "40px"
                                }}
                            >
                                <Button
                                    sx={{
                                        height: "40px",
                                        width: "40px"
                                    }}
                                >
                                    {
                                        textToSend ?
                                            <SendIcon
                                                onClick={() => {
                                                    generateMessage()
                                                    console.log("first", props.chats)
                                                    setTimeout(() => {
                                                        generateReplyMessage()
                                                        console.log("second", props.chats)
                                                    }, 10000);
                                                }}
                                            />
                                            :
                                            <VoiceCommandIcon />
                                    }
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
