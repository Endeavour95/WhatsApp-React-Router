import { Divider, Grid, Box } from "@mui/material";
import LeftTopNavigation from "./LeftTopNavigation";
import LeftPannel from "./LeftPannel";
import LeftPannelSearchBar from "./LeftPannelSearchBar";
import PersonalInfoDrawer from "./PersonalInfoDrawer";
import PersonalProfileInfoDrawer from "./PersonalProfileInfoDrawer";
import LeftPannelBelowSearchBarButtons from "./LeftPannelBelowSearchBarButtons";
import { useState } from "react";
import LeftUsersList from "./LeftUsersList";


// const  Left = (props)=>{
export default function Left(props) {
    // const {chats} = props;
    // console.log("chats from left",chats);
    const [belowSearchBarButtons, setBelowSearchBarButtons] = useState({
        "buttonAll": true,
        "buttonUnread": false,
        "buttonContacts": false,
        "buttonGroups": false
    })

    function belowSearchBarButtonsSetter(buttonName, buttonValue) {
        setBelowSearchBarButtons((oldButtonsStatus) => ({
            ...Object.fromEntries(
                Object.entries(oldButtonsStatus).map(([name, value]) => [name, name === buttonName ? buttonValue : false])
            ),
        }));
    }

    // console.log("left", props.chats)

    return (
        <>
            <Grid
                item
                xs={12} sm={6} md={4} lg={3.6}
                sx={{
                    display: { xs: props.selectedUser.userMobileNo ? "none" : "block", sm: "block" }
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    sx={{
                        bgcolor: "#111b21",
                        height: "100%",
                        // width:"100%",
                    }}
                >
                    {
                        props.allButtons.personalProfileIcon ? (
                            <>
                                {/* <PersonalInfoDrawer
                                     allButtons={props.allButtons}
                                     setAllButtons={props.setAllButtons}
                                     allButtonsSetter={props.allButtonsSetter}
                                     personalInfo={props.personalInfo}
                                     personalInfoSetter={props.personalInfoSetter}
                                /> */}

                                <PersonalProfileInfoDrawer
                                    allButtons={props.allButtons}
                                    setAllButtons={props.setAllButtons}
                                    allButtonsSetter={props.allButtonsSetter}
                                    personalInfo={props.personalInfo}
                                    personalInfoSetter={props.personalInfoSetter}
                                />
                            </>
                        ) : (
                            <>
                                <Box
                                    height="23.8vh"
                                >
                                    <LeftTopNavigation
                                        allButtons={props.allButtons}
                                        setAllButtons={props.setAllButtons}
                                        allButtonsSetter={props.allButtonsSetter}
                                    />
                                    <LeftPannelSearchBar
                                        allButtons={props.allButtons}
                                        setAllButtons={props.setAllButtons}
                                        allButtonsSetter={props.allButtonsSetter}
                                        searchText={props.searchText}
                                        setSearchText={props.setSearchText}
                                    />
                                    <LeftPannelBelowSearchBarButtons
                                        belowSearchBarButtons={belowSearchBarButtons}
                                        setBelowSearchBarButtons={setBelowSearchBarButtons}
                                        belowSearchBarButtonsSetter={belowSearchBarButtonsSetter}
                                    />

                                </Box>
                                <LeftUsersList
                                    chats={props.chats}
                                    users={props.users}
                                    searchText={props.searchText}
                                    selectedUser={props.selectedUser}
                                    belowSearchBarButtons={belowSearchBarButtons}
                                    setSelectedUser={props.setSelectedUser}
                                    getLastMessageText={props.getLastMessageText}
                                />
                            </>
                        )
                    }
                </Grid>
            </Grid>
        </>
    )
}

// export default Left