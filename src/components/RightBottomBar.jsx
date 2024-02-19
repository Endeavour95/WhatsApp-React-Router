import { Grid, IconButton, Box, Input, Stack, List, ListItem, Dialog, Paper, Typography, Button, TextField, Tooltip } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import SmileyIcon, { AttachMenuPlusIcon, SendIcon, VoiceCommandIcon } from "../Icons/RightBottomBarIcons";
import DocumentIcon, { PhotoVideoIcon, CameraIconAdvanced, ContactIcon, PollIcon, NewStickerIcon } from "../Icons/AttachmentModalIcons";
import { useSelector, useDispatch } from "react-redux";
import { setChats, setNewChats, updateMessageStatus } from "../slices/chatsSlice";

export default function RightBottomBar(props) {
    const chats = useSelector((state) => state.chats.chats)

    const selectedUserMobileNo = useSelector((state) => state.users.selectedUserMobileNo)

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const [textToSend, setTextToSend] = useState("")

    const [textToReceive, setTextToReceive] = useState("")

    const [rotation, setRotation] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [updateState, setUpdateState] = useState(false)

    // function messageUpdate() {
    //     const lastChat = chats[chats.length - 1]
    //     if (Object.hasOwn(lastChat, "deliverdStatus")) {
    //         setTimeout(() => {
    //             dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "deliverdStatus", value: true }))
    //         }, 2000);
    //         setTimeout(() => {
    //             dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "readStatus", value: true }))
    //         }, 5000);
    //         setTimeout(() => {
    //             generateReplyMessage()
    //         }, 10000);
    //     }
    // }

    useEffect(() => {
        const lastChat = chats[chats.length - 1]
        if (Object.hasOwn(lastChat, "deliverdStatus")) {
            setTimeout(() => {
                dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "deliverdStatus", value: true }))
            }, 2000);
            setTimeout(() => {
                dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "readStatus", value: true }))
            }, 5000);
            setTimeout(() => {
                setUpdateState(generateReplyMessage())
            }, 10000);
        }
    }, [updateState])

    // useEffect(() => {
    //     const lastChat = chats[chats.length - 1]
    //     if (Object.keys(lastChat).includes("deliverdStatus")) {

    //     // if (Object.hasOwn(lastChat, "deliverdStatus")) {
    //         setTimeout(() => {
    //             dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "deliverdStatus", value: true }))
    //         }, 2000);
    //         setTimeout(() => {
    //             dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "readStatus", value: true }))
    //         }, 5000);
    //         setTimeout(() => {
    //             generateReplyMessage()
    //         }, 10000);
    //     }
    // }, [chats])

    useEffect(() => {
        if (selectedUserMobileNo) {
            inputRef.current.focus()
        }
    }, [selectedUserMobileNo])


    const handleRotateClick = () => {
        const newRotation = rotation === 0 ? 135 : 0;
        setRotation(newRotation);
    };
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
                                        fonfontFamilyt: 'inherit',
                                        fontSize: '16px',
                                        textAlign: 'left',
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
        dispatch(setChats({
            "messageId": chats.length < 1 ? 1 : Number(chats[chats.length - 1].messageId) + 1,
            "messageText": textToSend,
            "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            "messageDate": new Date().toLocaleDateString([], {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            "userMobileNo": selectedUserMobileNo,
            "deliverdStatus": false,
            "readStatus": false,
        }))
        setTextToReceive(textToSend)
        setTextToSend("")
        // setTimeout(() => {
        //     messageUpdate()
        // }, 10000);

    }

    // function messageUpdate() {

    //     const lastChat = chats[chats.length - 1]
    //     if (Object.hasOwn(lastChat, "deliverdStatus")) {
    //         console.log("messageUpdate")
    //         setTimeout(() => {
    //             dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "deliverdStatus", value: true }))
    //         }, 2000);
    //         setTimeout(() => {
    //             dispatch(updateMessageStatus({ messageId: lastChat.messageId, status: "readStatus", value: true }))
    //         }, 5000);
    //         setTimeout(() => {
    //             generateReplyMessage()
    //         }, 10000);
    //     }
    // }

    function generateReplyMessage() {
        dispatch(setChats({
            "messageId": chats.length < 1 ? 1 : Number(chats[chats.length - 1].messageId) + 1,
            "messageText": textToReceive + " reply Message",
            "messageTime": new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            "messageDate": new Date().toLocaleDateString([], {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }),
            "userMobileNo": selectedUserMobileNo,
        }))
        // setTextToSend("")
        setTextToReceive("")
        return false
    }

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
                    <Tooltip title="Attach">
                        <IconButton
                            onClick={() => { handleOpenModal() }}
                            sx={{
                                borderRadius: "50%",
                                bgcolor: rotation == 135 ? "#374248" : "#202c33"
                            }}
                        >
                            <AttachMenuPlusIcon
                                sx={{
                                    transform: `rotate(${rotation}deg)`,
                                    transition: 'transform 0.4s ease',
                                }}
                            />
                        </IconButton>
                    </Tooltip>
                    {/* <Tooltip title="Type a message"> */}
                    <Input
                        inputRef={inputRef}
                        variant="standard"
                        id="messageText"
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                if (textToSend) {
                                    generateMessage()
                                    setUpdateState(true)
                                }
                            }
                        }}
                        onChange={(e) => {
                            setTextToSend(e.currentTarget.value)
                        }}
                        placeholder=" Type a message"
                        value={textToSend}
                        disableUnderline
                        sx={{
                            margin: "5px 8px",
                            padding: "5px 12px",
                            borderRadius: "8px",
                            color: "#d1d7db",
                            bgcolor: "#2a3942",
                            textDecoration: "none",
                            fontFamily: "inherit",
                            fontSize: "15px",
                            width: "100%"
                        }}
                    />
                    {/* </Tooltip> */}
                </Stack>
                <IconButton>
                    {
                        textToSend ?
                            <SendIcon
                                onClick={() => {
                                    generateMessage()
                                    setUpdateState(true)
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
