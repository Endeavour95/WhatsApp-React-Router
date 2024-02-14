import { Grid, Typography, Paper, IconButton } from "@mui/material"
import { List, ListItem, ListItemText, Avatar, Box, Stack } from '@mui/material';
import DoubleTickIcon, { SingleTickIcon } from "../Icons/MessageIcons";

const MessageList = ({ chats, selectedUser }) => {
    return (
        <List>
            {chats.filter((chat) => selectedUser.userMobileNo == chat.userMobileNo).map((chat) => (
                <ListItem
                    key={chat.messageId}
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
                                chat.deliverdStatus ? (
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
                            }
                        </Stack>
                    </Paper>
                </ListItem>
            ))}
        </List>
    );
};

// const MessageList = ({ chats, selectedUser }) => {
//     return (
//         <List>
//             {chats.filter((chat) => selectedUser.userMessages.includes(chat.messageId)).map((chat) => (
//                     <ListItem
//                         key={chat.messageId}
//                     sx={{
//                         alignSelf:"flex-end"
//                     }}
//                     >

//                         <Stack
//                             key={chat.messageId}
//                             direction={"column"}
//                             sx={{
//                                 bgcolor: "#005c4b",
//                                 padding: "9px",
//                                 borderRadius: "8px",
//                                 alignSelf:"flex-end"
//                             }}
//                         >


//                             {/* <Paper elevation={1} sx={{
//                                 bgcolor: "#005c4b",
//                                 padding: "9px"
//                             }} > */}
//                             <Typography sx={{ font: "inherit", fontSize: "14.2px", color: "#e9edef" }}>{chat.messageText}</Typography>
//                             <Stack
//                                 direction={"row"}
//                                 justifyContent={"flex-end"}
//                                 alignItems={"center"}
//                             >
//                                 <Typography
//                                     sx={{
//                                         font: "inherit",
//                                         fontSize: "11px",
//                                         color: "#99beb7"
//                                     }}
//                                 >
//                                     {chat.messageTime}
//                                 </Typography>
//                                 {
//                                     chat.deliverdStatus ? (
//                                         <IconButton
//                                             sx={{
//                                                 padding: "0px",
//                                                 marginLeft: "3px"
//                                             }}
//                                         >
//                                             <DoubleTickIcon
//                                                 colour={chat.readStatus ? "#53bdeb" : "#99beb7"}
//                                             />
//                                         </IconButton>
//                                     ) : (
//                                         <IconButton
//                                             sx={{
//                                                 padding: "0px",
//                                                 marginLeft: "3px"
//                                             }}
//                                         >
//                                             <SingleTickIcon colour="#99beb7" />
//                                         </IconButton>
//                                     )
//                                 }
//                             </Stack>
//                             {/* </Paper> */}
//                         </Stack>
//                     </ListItem>
//                 ))}
//         </List>
//     );
// };


export default function RightMiddleChatSection(props) {
    return (
        <>
            {/* <Grid
                container
                // direction="column"
                // justifyContent="flex-start"
                // alignItems="stretch"
                sx={{
                    backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                    // backgroundImage: `url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                    height: "100%",
                }}
            ></Grid> */}


            <Paper sx={{
                height: "80.5vh",
                overflow: 'auto',
                bgcolor: "#0b141a",
                // backgroundImage:`url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                // zIndex:1,
                borderRadius: "0px",
                backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,

                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#374045', // Customize the color of the thumb
                    // borderRadius: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#111b21', // Customize the color of the track
                },

            }}>
                <MessageList chats={props.chats} selectedUser={props.selectedUser} />
                {/* <List>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                    <Typography>sidjkfksdafhkfjadsf</Typography>
                </List> */}
            </Paper>
        </>
    )
}
