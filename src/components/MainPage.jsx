import { Box, Divider } from '@mui/material'
import React from 'react'
import RightPannel from './RightPannel'
import LeftPannel from './LeftPannel'

export default function MainPage() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            sx={{ bgcolor: "#0c1317", padding: "1.25%" }}
        >
            <Box
                // lg={8}
                sx={{
                    bgcolor: "#111b21",
                    height: "94.5vh",
                    width: "30.05%"
                }}
                // sx={{xs:12, sm:4, md:4, lg:4, xl:4}}
                >
                <LeftPannel></LeftPannel>
            </Box>
            <Divider
            // orientation='vertical'
            // color="#262f34"
                sx={{
                    bgcolor: "#262f34", 
                    width: "1px"
                }}
                />
            <Box
                // lg={4}
                sx={{
                    backgroundImage: `url(https://camo.githubusercontent.com/cba518ead87b032dc6f1cbfc7fade27604449201ac1baf34d889f77f093f01ac/68747470733a2f2f7765622e77686174736170702e636f6d2f696d672f62672d636861742d74696c652d6461726b5f61346265353132653731393562366237333364393131306234303866303735642e706e67)`,
                    height: "94.5vh",
                    width:"69.99%"
                }}
                // sx={{xs:12, sm:8, md:8, lg:8, xl:8}}
                >
                <RightPannel></RightPannel>
            </Box>
        </Box>
    )
}

