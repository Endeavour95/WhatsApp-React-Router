import { Divider, Grid, Box, Drawer, Typography } from "@mui/material";
import RightTopNavigation from "./RightTopNavigation";
import RightBottomBar from "./RightBottomBar";
import RightMiddleChatSection from "./RightMiddleChatSection";

const open = true
const onClose = false

export default function Right(props) {
    return (
        <Grid
            item
            // xs={12} sm={6} md={8} lg={9}
            sx={{
                // width:"70%",
                flex: "1",
                // boxSizing: "border-box"
                display:{xs: props.selectedUser.userMobileNo ?'block': "none",sm:'block'}
            }}
        >

            <Grid
                container
                direction="column"
            // justifyContent="flex-start"
            // alignItems="stretch"
            // sx={{
            //     backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
            //     // backgroundImage: `url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
            //     height: "100%"
            // }}
            >
                <RightTopNavigation
                    selectedUser={props.selectedUser}
                />

                <RightMiddleChatSection
                    chats={props.chats}
                    selectedUser={props.selectedUser}
                // setChats={setChats}
                />
                <RightBottomBar
                    users={props.users}
                    setUsers={props.setUsers}
                    chats={props.chats}
                    setChats={props.setChats}
                    message={props.message}
                    setMessage={props.setMessage}
                    messageSetter={props.messageSetter}
                    selectedUser={props.selectedUser}
                    setSelectedUser={props.setSelectedUser}
                    selectedUserSetter={props.selectedUserSetter}
                    updateUsers={props.updateUsers}

                />
            </Grid>
        </Grid>
    )
}
