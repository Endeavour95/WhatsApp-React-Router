import { Divider, Grid } from "@mui/material";
import Left from "./Left";
import Right from "./Right";
import { useState } from "react";

export default function IndexPage() {
    const [allButtons, setAllButtons] = useState(
        {
            "personalProfile": false,
            "searchIcon": true,
            // "backIcon": false,
        }
    )

    function allButtonsSetter(buttonName, buttonValue) {
        setAllButtons((oldButtonsStatus) => ({
            ...oldButtonsStatus,
            [buttonName]: buttonValue,
        }))
    }

    const [searchText, setSearchText] = useState('')

    const [message, setMessage] = useState({
        "messageText": '',
        "currentTime": '',
        "date": '',
        "senderId": '',
        "receiverId": '',
        "readStatus": '',
        "deliverdStatus": ''
    })

    function messageSetter(property, value) {
        setMessage((oldMessage) => ({
            ...oldMessage,
            [property]: value,
        }))
    }

    return (
        <>
            <Grid
                container
                direction="row"
                // justifyContent="center"
                // alignItems="stretch"
                sx={{
                    height: "100vh",
                    width: "100vw",
                    bgcolor: "#0c1317",
                    display:"flex",
                    // padding: "1.25%"
                }}
            >
                <Left
                    allButtons={allButtons}
                    setAllButtons={setAllButtons}
                    allButtonsSetter={allButtonsSetter}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <Divider
                    orientation="vertical"
                    sx={{
                        bgcolor: "#262f34",
                    }}
                />
                <Right
                    message={message}
                    setMessage={setMessage}
                    messageSetter={messageSetter}
                />
            </Grid>
        </>
    )
}
