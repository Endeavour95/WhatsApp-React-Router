import { Divider, Grid, Box, Stack } from "@mui/material";
import LeftTopNavigation from "./LeftTopNavigation";
import LeftPannel from "./LeftPannel";
import LeftPannelSearchBar from "./LeftPannelSearchBar";
import PersonalInfoDrawer from "./PersonalInfoDrawer";
import PersonalProfileInfoDrawer from "./PersonalProfileInfoDrawer";
import LeftPannelBelowSearchBarButtons from "./LeftPannelBelowSearchBarButtons";
import { useState } from "react";
import LeftUsersList from "./LeftUsersList";

export default function Left(props) {
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

    return (
        <>
            <Stack
                direction={"column"}
                justifyContent={"flex-start"}
                alignItems={"stretch"}
            >
                {/* <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    sx={{
                        bgcolor: "#111b21",
                        height: "100%",
                        // width:"100%",
                    }}
                > */}
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
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="stretch"
                                height={"100%"}
                                width={"100%"}
                            >


                                {/* <Box
                                height="23.8vh"
                            > */}
                                <Grid item
                                    sx={{
                                        // position: "relative",
                                        bgcolor: "#202c33",
                                        // height: "59px",
                                        width: "100%",
                                        // top: 0,
                                        // bottom: 'auto',
                                        padding: "10px 16px",
                                        // boxSizing: "border-box",
                                    }}
                                >
                                    <LeftTopNavigation
                                        allButtons={props.allButtons}
                                        setAllButtons={props.setAllButtons}
                                        allButtonsSetter={props.allButtonsSetter}
                                    />
                                </Grid>

                                <Stack
                                    direction="row"
                                    sx={{
                                        padding: "0px 12px",
                                        position: "relative",
                                        boxSizing: "border-box",
                                        alignItems: "center",
                                        // height: "49px",
                                        padding: "7px 12px 7px",
                                        width: "100%",
                                    }}
                                >
                                    <LeftPannelSearchBar
                                        allButtons={props.allButtons}
                                        setAllButtons={props.setAllButtons}
                                        allButtonsSetter={props.allButtonsSetter}
                                        searchText={props.searchText}
                                        setSearchText={props.setSearchText}
                                    />
                                </Stack>

                                <LeftPannelBelowSearchBarButtons
                                    belowSearchBarButtons={belowSearchBarButtons}
                                    setBelowSearchBarButtons={setBelowSearchBarButtons}
                                    belowSearchBarButtonsSetter={belowSearchBarButtonsSetter}
                                />

                                {/* </Box> */}
                                <LeftUsersList
                                    chats={props.chats}
                                    users={props.users}
                                    searchText={props.searchText}
                                    selectedUser={props.selectedUser}
                                    belowSearchBarButtons={belowSearchBarButtons}
                                    setSelectedUser={props.setSelectedUser}
                                    getLastMessageText={props.getLastMessageText}
                                />
                            </Stack>
                        </>
                    )
                }
                {/* </Grid> */}
            </Stack>
        </>
    )
}

// export default Left