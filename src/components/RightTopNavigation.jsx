import { AppBar, Grid, Toolbar } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function RightTopNavigation(props) {
    return (
        <>

            <Grid item
                sx={{
                    position: "relative",
                    bgcolor: "pink",
                    height: "59px",
                    width: "100%",
                    top: 0,
                    bottom: 'auto'
                }}
            >
                <AppBar
                    sx={{
                        position: "static",
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
                </AppBar>


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
                            bgcolor: "#202c33",
                            height: "59px",
                        }}
                    >
                        

                    </Grid>
                </Toolbar>
            </AppBar> */}
            </Grid>
        </>
    )
}
