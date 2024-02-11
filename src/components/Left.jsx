import { Divider, Grid } from "@mui/material";
import LeftTopNavigation from "./LeftTopNavigation";
import LeftPannel from "./LeftPannel";
import LeftPannelSearchBar from "./LeftPannelSearchBar";
import PersonalInfoDrawer from "./PersonalInfoDrawer";
import PersonalProfileInfoDrawer from "./PersonalProfileInfoDrawer";
import LeftPannelBelowSearchBarButtons from "./LeftPannelBelowSearchBarButtons";
import { useState } from "react";


export default function Left(props) {
    const [belowSearchBarButtons, setBelowSearchBarButtons] = useState({
        "buttonAll": false,
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
                // xs={12} sm={6} md={4} lg={3}
                sx={{ width: "30%" }}
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
                        props.allButtons.personalProfile ? (
                            <>
                                {/* <PersonalInfoDrawer
                                    allButtons={props.allButtons}
                                    setAllButtons={props.setAllButtons}
                                    allButtonsSetter={props.allButtonsSetter}
                                /> */}

                                {/* <PersonalProfileInfoDrawer
                                    allButtons={props.allButtons}
                                    setAllButtons={props.setAllButtons}
                                    allButtonsSetter={props.allButtonsSetter}
                                /> */}
                            </>
                        ) : (
                            <>
                                <LeftTopNavigation
                                    allButtons={props.allButtons}
                                    setAllButtons={props.setAllButtons}
                                    allButtonsSetter={props.allButtonsSetter}
                                // profileButton={props.profileButton}
                                // setProfileButton={props.setProfileButton}
                                />
                                {/* <LeftPannelSearchBar
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
                                /> */}
                            </>
                        )
                    }
                </Grid>
            </Grid>
        </>
    )
}
