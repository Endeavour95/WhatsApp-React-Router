import { AppBar, Grid, Toolbar, Stack, IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import DefaultUserIcon, { CommunityOutlineIcon, MenuDotIcon, NewChatOutlineIcon, NewsletterOutlineIcon, StatusUnreadIcon } from "../Icons/LeftTopNavigationIcons";
import LeftTopNavigation1 from "./LeftTopNavigation1";

export default function LeftTopNavigation(props) {

    return (
        <LeftTopNavigation1
            allButtons={props.allButtons}
            setAllButtons={props.setAllButtons}
            allButtonsSetter={props.allButtonsSetter}
        />
    )

    // return (
    //     <>
    //         <Grid item
    //             sx={{
    //                 position: "relative",
    //                 bgcolor: "#202c33",
    //                 height: "59px",
    //                 width: "100%",
    //                 top: 0,
    //                 bottom: 'auto',
    //                 padding: "10px 16px",
    //                 boxSizing: "border-box",
    //             }}
    //         >
    //             <Stack
    //                 direction="row"
    //                 justifyContent="space-between"
    //                 alignItems="center"
    //             >
    //                 <Stack
    //                     direction="row"
    //                     justifyContent="flex-start"
    //                     alignItems="center"
    //                 >
    //                     <IconButton
    //                         id="personalProfile"
    //                         onClick={(e) => { props.allButtonsSetter(e.currentTarget.id, true) }}
    //                         sx={{
    //                             padding: "0px"
    //                         }}
    //                     >
    //                         <DefaultUserIcon />
    //                     </IconButton>
    //                 </Stack>
    //                 <Stack
    //                     direction="row"
    //                     justifyContent="center"
    //                     alignItems="center"
    //                     spacing={1}
    //                 >
    //                     <IconButton>
    //                         <CommunityOutlineIcon />
    //                     </IconButton>
    //                     <IconButton>
    //                         <StatusUnreadIcon />
    //                     </IconButton>
    //                     <IconButton>
    //                         <NewsletterOutlineIcon />
    //                     </IconButton>
    //                     <IconButton>
    //                         <NewChatOutlineIcon />
    //                     </IconButton>
    //                     <IconButton>
    //                         <MenuDotIcon />
    //                     </IconButton>
    //                 </Stack>
    //             </Stack>
    //         </Grid>
    //     </>
    // )
}
