import { IconButton, Input, Stack, List, ListItem, Dialog, Paper, Typography, Tooltip } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import SmileyIcon, { AttachMenuPlusIcon, SendIcon, VoiceCommandIcon } from "../Icons/RightBottomBarIcons";
import DocumentIcon, { PhotoVideoIcon, CameraIconAdvanced, ContactIcon, PollIcon, NewStickerIcon } from "../Icons/AttachmentModalIcons";
import { useSelector, useDispatch } from "react-redux";
import { generateMessage } from "../functions";

export default function RightBottomBar() {
    const selectedUserMobileNo = useSelector((state) => state.peoples.selectedUserMobileNo)


    const [textToSend, setTextToSend] = useState("")

    const rotation = useRef(0);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const inputRef = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedUserMobileNo) {
            inputRef.current.focus()
        }
    }, [selectedUserMobileNo])

    const handleRotateClick = () => {
        const newRotation = rotation.current === 0 ? 135 : 0;
        rotation.current = newRotation
    };

    const handleOpenModal = () => {
        handleRotateClick()
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        handleRotateClick()
        setIsModalOpen(false);
    };

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
                    <SmileyIcon
                        sx={{
                            padding: "8px"
                        }}
                    />
                    <Tooltip title="Attach">
                        <AttachMenuPlusIcon
                            onClick={() => { handleOpenModal() }}
                            sx={{
                                transform: `rotate(${rotation.current}deg)`,
                                transition: 'transform 0.4s ease',
                                padding: "8px",
                                borderRadius: "50%",
                                bgcolor: rotation.current == 135 ? "#374248" : "#202c33"

                            }}
                        />
                    </Tooltip>
                    {/* <Tooltip title="Type a message"> */}
                    <Input
                        inputRef={inputRef}
                        variant="standard"
                        id="messageText"
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                if (textToSend) {
                                    dispatch(generateMessage(textToSend))
                                    setTextToSend("")
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
                {
                    textToSend ?
                        <SendIcon
                            onClick={() => {
                                dispatch(generateMessage(textToSend))
                                setTextToSend("")
                            }}
                            sx={{
                                padding: "8px"
                            }}
                        />
                        :
                        <VoiceCommandIcon
                            sx={{
                                padding: "8px"
                            }}
                        />
                }
            </Stack>
        </>
    )
}


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
                if (reason === 'backdropClick') {
                    onClose()
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
