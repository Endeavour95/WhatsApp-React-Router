import { Typography, Grid, Button, Toolbar, AppBar, Stack, Drawer } from "@mui/material";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BackIcon } from "../Icons/SearchBarIcons";



export default function PersonalProfileInfoDrawer(props) {
    return (
        <>
            {/* <AppBar
                sx={{
                    position: "static",
                    bgcolor: "#202c33",
                    // bgcolor:"transparent",
                    height: "100%",
                    width: "100%",
                    // padding: "10px 16px"
                }}
            >
                <Toolbar> */}

            <Grid
                item
                sx={{
                    height: "108px",
                    padding: "0px 20px 0px 23px",
                    boxSizing: "border-box",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="stretch"
                    sx={{
                        height: "inherit",
                        width: "inherit",
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            height: "calc(100% - 49px)",
                            width: "inherit",
                        }}
                    >



                        {/* <Grid
                            item
                            sx={{
                                height: "calc(100% - 49px)",
                                width: "inherit",
                                // position: "relative",
                                // top:'auto',
                                // bottom:0
                            }}
                        > */}
                        {/* <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            > */}
                        {/* <Grid
                            item
                            sx={{
                                height: "24px",
                                width: "53px"
                            }}
                        > */}

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            id="personalProfile"
                            sx={{
                                height: "24px",
                                width: "53px"
                            }}
                            onClick={(e) => {
                                props.allButtonsSetter(e.currentTarget.id, false)
                            }}
                        >


                            {/* <Button
                                    id="personalProfile"
                                    sx={{
                                        // height:"24px",
                                        // width:"53px",
                                        padding: "0px 0px"
                                    }}
                                    onClick={(e) => {
                                        props.allButtonsSetter(e.currentTarget.id, false)
                                    }}
                                > */}
                            <BackIcon
                            colour="#d9dee0"
                            />

                            {/* <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>back</title><path fill="#d9dee0" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg> */}
                            {/* </Button> */}
                        </Stack>
                        {/* </Grid> */}

                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            sx={{
                                height: "24px",
                                width: "calc(100% - 53px)",
                                fontSize: "19px",
                                fontWeight: "inherit",
                                color: "#d9dee0",
                            }}
                        >
                            {/* <Grid
                                item
                                sx={{
                                    height: "24px",
                                    width: "calc(100% - 53px)"
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: "inherit",
                                        fontWeight: "inherit",
                                        color: "#d9dee0",
                                    }}
                                > */}
                            Profile
                            {/* </Typography>
                            </Grid> */}
                        </Stack>
                        {/* </Grid> */}
                        {/* </Grid> */}
                    </Stack>
                </Grid>
            </Grid>
            {/* </Toolbar>
            </AppBar> */}


            {/* <Grid
                item
                sx={{
                    height: "calc(100%-108px)",
                    boxSizing: "border-box",
                    width: "inherit",

                }}
            > */}


                <Drawer
                    variant="permanent"
                    sx={{
                        height: 'calc(100% - (108px + 2.5%))',
                        // height: 'calc(100% - 108px)',
                        // width: "calc(100% - 70%)",
                        // width: "inherit",
                        // top: '108px',
                        // position: 'fixed',
                        // flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: "calc(100% - 70%)", boxSizing: 'border-box', bgcolor:"#111b21", },
                        // marginTop:"calc(100% - (108px +1.25%))",
                        // marginLeft:"calc(100% - 1.25%)",
                        // marginBottom:"calc(100% - 1.25%)",
                        // bgcolor:"#111b21",
                    }}
                >
                    {/* <Box sx={{ overflow: 'auto' }}> */}
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    {/* </Box> */}
                </Drawer>
            {/* </Grid> */}

        </>
    )
}
