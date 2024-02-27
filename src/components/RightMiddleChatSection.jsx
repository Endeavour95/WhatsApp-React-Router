import { Typography, Paper, IconButton } from "@mui/material"
import { List, ListItem, Stack } from '@mui/material';
import DoubleTickIcon, { SingleTickIcon } from "../Icons/MessageIcons";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function RightMiddleChatSection() {
    const {userMobileNo} = useParams()

    const chats = useSelector((state)=> state.chats.chats)

    const lastChatRef = useRef(null)

    useEffect(() => {
        if (lastChatRef.current) {
            lastChatRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chats]);

    return (
        <>
            <Stack
                sx={{
                    height:"100%",
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#374045',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#111b21',
                    },
                }}
            >
                <List>
                    {chats.filter((chat) => chat.userMobileNo === userMobileNo).map((chat, index , array) => (
                        <ListItem
                            key={chat.messageId}
                            ref={index === array.length - 1 ? lastChatRef : null}
                            sx={{
                                justifyContent: Object.hasOwn(chat, "readStatus") ? "flex-end" : "flex-start",
                            }}
                        >
                            <Paper elevation={1} sx={{
                                bgcolor: "#005c4b",
                                padding: "9px"
                            }} >
                                <Typography sx={{ font: "inherit", fontSize: "14.2px", color: "#e9edef" }}>{chat.messageText}</Typography>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"flex-end"}
                                    alignItems={"center"}
                                >
                                    <Typography
                                        sx={{
                                            font: "inherit",
                                            fontSize: "11px",
                                            color: "#99beb7"
                                        }}
                                    >
                                        {chat.messageTime}
                                    </Typography>
                                    {
                                        Object.hasOwn(chat, "readStatus") ? (
                                            chat.deliveredStatus ? (
                                                <IconButton
                                                    sx={{
                                                        padding: "0px",
                                                        marginLeft: "3px"
                                                    }}
                                                >
                                                    <DoubleTickIcon
                                                        colour={chat.readStatus ? "#53bdeb" : "#99beb7"}
                                                    />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    sx={{
                                                        padding: "0px",
                                                        marginLeft: "3px"
                                                    }}
                                                >
                                                    <SingleTickIcon colour="#99beb7" />
                                                </IconButton>
                                            )
                                        ) : (
                                            <></>
                                        )
                                    }
                                </Stack>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </>
    )
}
