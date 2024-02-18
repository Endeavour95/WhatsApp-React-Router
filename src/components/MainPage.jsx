import { Divider, Grid } from "@mui/material";
import Left from "./Left";
import Right from "./Right";
import { useState } from "react";
import DefaultRightPannel from "./DefaultRightPannel";
import { useSelector, useDispatch } from "react-redux";

export default function MainPage() {
    const selectedUserMobileNo = useSelector((state) => state.users.selectedUserMobileNo)

    const [allButtons, setAllButtons] = useState(
        {
            "personalProfileIcon": false,
            "searchIcon": true,
            "backIcon": false,
        }
    )

    function allButtonsSetter(buttonName, buttonValue) {
        setAllButtons((oldButtonsStatus) => ({
            ...oldButtonsStatus,
            [buttonName]: buttonValue,
        }))
    }


    // function makeMessageReadAndDelivered() {
    //     const lastChatIndex = chats.length - 1;

    //     if (lastChatIndex >= 0 && chats[lastChatIndex].deliverdStatus) {
    //         setTimeout(() => {
    //             setChats((prevChats) =>
    //                 prevChats.map((chat, index) =>
    //                     index === lastChatIndex ? { ...chat, deliverdStatus: true } : chat
    //                 )
    //             );
    //         }, 5000);

    //         setTimeout(() => {
    //             setChats((prevChats) =>
    //                 prevChats.map((chat, index) =>
    //                     index === lastChatIndex ? { ...chat, readStatus: true } : chat
    //                 )
    //             );
    //         }, 10000);
    //     }
    // }

    // useEffect(() => {
    //     setChats([...chats, message]);

    //     setUsers((oldUsers) =>
    //         oldUsers.map((user) =>
    //             user.userMobileNo === message.receiverMobileNo
    //                 ? {
    //                     ...user,
    //                     userMessages: user.userMessages.includes(message.messageId)
    //                         ? user.userMessages
    //                         : [...user.userMessages, message.messageId],
    //                 }
    //                 : user
    //         )
    //     );
    // }, [message]);


    // useEffect(() => {
    //     setTimeout(() => {
    //         // setChats((prevChats) =>
    //         //     prevChats.map((chat) =>
    //         //         chat.messageId === newChatId ? { ...chat, deliverdStatus: true } : chat
    //         //     )
    //         // );

    //         setChats((prevChats) =>
    //             prevChats.map((chat, index) =>
    //                 index === prevChats.length - 1 ? { ...chat, deliverdStatus: true } : chat
    //             )
    //         );
    //     }, 5000);
    //     setTimeout(() => {
    //         // setChats((prevChats) =>
    //         //     prevChats.map((chat) =>
    //         //         chat.messageId === newChatId ? { ...chat, readStatus: true } : chat
    //         //     )
    //         // );

    //         setChats((prevChats) =>
    //             prevChats.map((chat, index) =>
    //                 index === prevChats.length - 1 ? { ...chat, readStatus: true } : chat
    //             )
    //         );
    //     }, 10000);
    // }, [chats])


    return (
        <>
            <Grid
                container
                direction="row"
                sx={{
                    height: "100vh",
                    width: "100vw",
                    fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                    boxSizing: "border-box",
                }}
            >
                <Grid
                    item
                    xs={12} sm={5.99} md={4.65} lg={3.65} xl={3.65}
                    sx={{
                        display: { xs: selectedUserMobileNo ? "none" : "block", sm: "block" },
                        boxSizing: "border-box",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    <Left
                        allButtons={allButtons}
                        setAllButtons={setAllButtons}
                        allButtonsSetter={allButtonsSetter}
                    />
                </Grid>
                <Divider
                    sx={{
                        bgcolor: "#313d45",
                        width: "0.2px",
                    }}
                />
                <Grid
                    item
                    // xs={12} sm={6} md={7.348} lg={8.348} xl={8.348}
                    xs={12} sm={6} md={7.345} lg={8.348} xl={8.348}

                    sx={{
                        display: { xs: selectedUserMobileNo ? 'block' : "none", sm: 'block' },
                        backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                        boxSizing: "border-box",
                        height: "100%",
                        width: "100%"
                    }}
                >
                    {
                        selectedUserMobileNo ?
                            <Right />
                            :
                            <DefaultRightPannel />
                    }
                </Grid>
            </Grid>
        </>
    )
}
