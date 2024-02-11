import { AppBar, Grid, TextField, Toolbar, IconButton, Box, Fab, Input } from "@mui/material";
// import {MenuIcon, AddIcon, SearchIcon, MoreIcon} from '@mui/icons-material'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import SmileyIcon, { AttachMenuPlusIcon, SendIcon, VoiceCommandIcon } from "../Icons/RightBottomBarIcons";

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function RightBottomBar(props) {

    const [messageText, setMessageText] = useState("")


    const [attachMenuButton, setAttachMenuButton] = useState(false)

    const [rotation, setRotation] = useState(0);

    const handleRotateClick = () => {
        const newAttachMenuButton = attachMenuButton === false ? true : false;
        const newRotation = rotation === 0 ? 135 : 0;
        setRotation(newRotation);
        setAttachMenuButton(newAttachMenuButton);
    };

    return (
        <>
            <Grid
                item
                sx={{
                    padding: "5px 16px",
                    position: "fixed",
                    bgcolor: "#202c33",
                    // width: "calc(100vw - 30%)",
                    width: "inherit",
                    height: "62px",
                    // top: 'calc(100%-62px)',
                    top: 'auto',
                    bottom: 0,
                    boxSizing: "border-box",
                    // boxShadow:"border-box",
                    // position: "relative",
                }}
            >
                <Grid
                    container
                    direction="row"
                    // fullWidth
                    // justifyContent="center"
                    // alignItems="center"
                    sx={{
                        height: "inherit",
                        width:"70%",
                    }}
                >

                    <Grid
                        item
                        sx={{
                            padding: "5px 0px",
                            height: "inherit",
                            width: "82px",
                            boxSizing: "border-box",
                        }}
                    >
                        <Grid
                            container
                            direction="row"
                        // justifyContent="center"
                        // alignItems="center"
                        >
                            <Grid
                                item
                                sx={{
                                    // height: "42px",
                                    // width: "26px",
                                    // margin: "0px 8px",
                                    // padding:"8px 0px",
                                    height: "inherit",
                                    width: "50%",
                                    padding: "8px",
                                    // padding: "7px",
                                }}
                            >
                                <SmileyIcon />
                            </Grid>
                            <Grid
                                item
                                // onClick={()=>{
                                //     setAttachMenuButton(true)
                                // }}
                                sx={{
                                    height: "inherit",
                                    width: "50%",
                                    padding: "8px",
                                    bgcolor: attachMenuButton ? "#374248" : "#202c33",
                                    borderRadius: "50%"
                                }}
                            >
                                <AttachMenuPlusIcon
                                    onClick={() => {
                                        handleRotateClick()
                                        // setAttachMenuButton(true)
                                    }}
                                    sx={{
                                        transform: `rotate(${rotation}deg)`,
                                        transition: 'transform 0.5s ease',
                                        // bgcolor: attachMenuButton ? "#374248" : "#202c33",
                                        // borderRadius:"50%"
                                    }}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid
                        item
                        sx={{
                            // height: "52px",
                            height: "inherit",
                            width: "925.96px"
                        }}
                    >
                        <Grid
                            container
                        >
                            <Grid
                                item
                                sx={{
                                    // padding: "9px 12px",
                                    margin: "5px 8px",
                                    bgcolor: "#2a3942",
                                    borderRadius: "8px",
                                    border: "1px solid #2a3942",
                                    height: "41.65px",
                                    width: "869.96px"
                                }}
                            >

                                {/* <TextField
                                    id="filled-textarea"
                                    // label="Multiline Placeholder"
                                    placeholder=" Type a message"
                                    multiline
                                    variant="filled"

                                    onChange={(e) => { setMessageText(e.currentTarget.value) }}
                                    value={messageText}
                                    sx={{
                                        padding: "9px 12px",
                                        color: "#d1d7db",
                                        textIndent: "0px",
                                        height: "100%",
                                        textDecoration: "none",
                                    }}
                                /> */}

                                <Input
                                    onChange={(e) =>{setMessageText(e.currentTarget.value)}}
                                    // onChange={(e) => { props.messageSetter( "message", e.currentTarget.value) }}
                                    placeholder=" Type a message"
                                    value={messageText}
                                    // value={props.message.messageText}
                                    disableUnderline
                                    // fullWidth
                                    // minRows={1}
                                    // maxRows={5}
                                    // multiline rows={5}
                                    sx={{
                                        padding: "9px 12px",
                                        color: "#d1d7db",
                                        textIndent: "0px",
                                        height: "100%",
                                        textDecoration: "none",
                                        width:"70%",
                                        // '& .MuiInput-underline:after': {
                                        //     borderBottom: 'none',
                                        // },
                                        // '& .MuiInput-underline:before': {
                                        //     borderBottom: 'none',
                                        // },
                                        // '& .MuiInputBase-input': {
                                        //     borderBottom: 'none',
                                        // },
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    padding: "5px 0px",
                                    height: "52px",
                                    width: "40px"
                                }}
                            >
                                <Button
                                    sx={{
                                        height: "40px",
                                        width: "40px"
                                    }}
                                >
                                    {
                                        messageText ?
                                        // props.message.messageText ?
                                            <SendIcon />
                                            :
                                            <VoiceCommandIcon />
                                    }
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>


                {/* <AppBar 
                    sx={{
                        position:"static",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar> */}
            </Grid>
            {/* <AppBar position="fixed" color="primary"
                sx={{
                    top: 'auto',
                    bottom: 0,
                    width: "100%"
                }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <StyledFab color="secondary" aria-label="add">
                        <AddIcon />
                    </StyledFab>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar> */}


            {/* <Grid
                item
                alignSelf="flex-end"
                sx={{
                    width: "100%",
                    bgcolor: "blue",
                    height: "59px",
                }}
            > */}
            {/* <AppBar
                position="fixed"
            >
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="stretch"
                        sx={{
                            bgcolor: "blue",
                            height: "59px",
                        }}
                    >


                    </Grid>
                </Toolbar>
            </AppBar> */}
            {/* </Grid> */}
        </>
    )
}
