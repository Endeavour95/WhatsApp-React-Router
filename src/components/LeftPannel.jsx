import React from 'react'
import CustomAppBar from './CustomAppBar'
import { Box, Button, Divider, Stack, TextField } from '@mui/material'


export default function LeftPannel() {
    return (
        <Box>
            <CustomAppBar />
            <Box
                lg={8}
                sx={{
                    // bgcolor: "red",
                    // height: "89px",
                    // width:"100%"
                    // padding: "0px 12px"
                }}
            >
                <Box
                    sx={{
                        bgcolor: "#111B21",
                        height: "49px",
                        // width:"100%",
                        padding: "0px 12px"
                    }}
                >
                    <Box
                    
                        sx={{
                            bgcolor: "#202C33",
                            color:"#8696A0",
                            height: "35px",
                            padding: "0px 32px 0px 65px"
                        }}
                    >🔎︎ Search or start a new chat
                        {/* <TextField
                            placeholder=''
                        >
                        </TextField> */}
                    </Box>
                </Box>
                <Stack
                    direction="row"
                    spacing="8px"
                    sx={{
                        height: "41.79px",
                        padding: "2px 16px 7px",
                        bgcolor: "#111B21"
                    }}
                >
                    <Button
                        // onClick={()=> {
                        //     sx={{
                        //         bgcolor:"#0A332C",
                        //         color:"#00A884"
                        //     }}
                        // }}
                        sx={{
                            height: "31.99px",
                            padding: "6px 12px",
                            color: '#8696A0',
                            bgcolor: "#202C33",
                            fontSize: "15px",
                            fontWeight: "400",
                            fontFamily: "inherit",
                            // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                            cursor: "pointer",
                            borderBottomRightRadius: "42px",
                            borderBottomLeftRadius: "42px",
                            borderTopRightRadius: "42px",
                            borderTopLeftRadius: "42px",
                        }}
                    >All</Button>
                    <Button
                        // onClick={()=> {
                        //     sx={{
                        //         bgcolor:"#0A332C",
                        //         color:"#00A884"
                        //     }}
                        // }}
                        sx={{
                            height: "31.99px",
                            padding: "6px 12px",
                            color: '#8696A0',
                            bgcolor: "#202C33",
                            fontSize: "15px",
                            fontWeight: "400",
                            fontFamily: "inherit",
                            // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                            cursor: "pointer",
                            borderBottomRightRadius: "42px",
                            borderBottomLeftRadius: "42px",
                            borderTopRightRadius: "42px",
                            borderTopLeftRadius: "42px",
                        }}
                    >Unread</Button>
                    <Button
                        // onClick={()=> {
                        //     sx={{
                        //         bgcolor:"#0A332C",
                        //         color:"#00A884"
                        //     }}
                        // }}
                        sx={{
                            height: "31.99px",
                            padding: "6px 12px",
                            color: '#8696A0',
                            bgcolor: "#202C33",
                            fontSize: "15px",
                            fontWeight: "400",
                            fontFamily: "inherit",
                            // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                            cursor: "pointer",
                            borderBottomRightRadius: "42px",
                            borderBottomLeftRadius: "42px",
                            borderTopRightRadius: "42px",
                            borderTopLeftRadius: "42px",
                        }}
                    >Contacts</Button>
                    <Button
                        // onClick={()=> {
                        //     sx={{
                        //         bgcolor:"#0A332C",
                        //         color:"#00A884"
                        //     }}
                        // }}
                        sx={{
                            height: "31.99px",
                            padding: "6px 12px",
                            color: '#8696A0',
                            bgcolor: "#202C33",
                            fontSize: "15px",
                            fontWeight: "400",
                            fontFamily: "inherit",
                            // fontFamily:"Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                            cursor: "pointer",
                            borderBottomRightRadius: "42px",
                            borderBottomLeftRadius: "42px",
                            borderTopRightRadius: "42px",
                            borderTopLeftRadius: "42px",
                        }}
                    >Groups</Button>

                </Stack>
            </Box>
            <Divider
                sx={{
                    bgcolor: "#262f34", height: "0.05px"
                }}
            />
        </Box>
    )
}
