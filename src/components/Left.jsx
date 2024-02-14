import { Divider, Grid, Box } from "@mui/material";
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
            <Grid
                item
                xs={12} sm={6} md={4} lg={3.6}
                sx={{
                    display:{xs:props.selectedUser.userMobileNo ? "none" : "block", sm: "block"}
                }}
            // sx={{ width: "30%" }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    sx={{
                        bgcolor: "#111b21",
                        height: "100%",
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
                                    height="23.5vh"
                                >
                                    <LeftTopNavigation
                                        allButtons={props.allButtons}
                                        setAllButtons={props.setAllButtons}
                                        allButtonsSetter={props.allButtonsSetter}
                                    // profileButton={props.profileButton}
                                    // setProfileButton={props.setProfileButton}
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
                                    users={props.users}
                                    searchText={props.searchText}
                                    selectedUser={props.selectedUser}
                                    belowSearchBarButtons={belowSearchBarButtons}
                                    setSelectedUser={props.setSelectedUser}
                                // selectedUserSetter={props.selectedUserSetter}
                                // sx={{
                                //     overflowY: 'auto', // Make the list scrollable vertically
                                //     flexGrow: 1, // Allow the list to grow and take remaining space
                                // }}
                                />
                            </>
                        )
                    }
                </Grid>
            </Grid>
        </>
    )
}
