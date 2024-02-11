import React from 'react';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function PersonalInfoDrawer(props) {
    return (
        <Drawer variant="permanent" anchor="left">
            <Grid
                container
                direction="column"
                alignItems="center"
                sx={{
                    position: 'fixed', // Set the position to fixed
                    top: 0,             // Set the top position to 0
                    width: '30%',      // Set the width to 100%
                    padding: '16px',    // Add padding as needed
                    background: '#fff', // Set the background color
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
                }}
            >
                {/* Your fixed content */}
                <Typography variant="h6">Fixed at the top</Typography>
                {/* Add more items as needed */}
            </Grid>
            {/* The rest of the Drawer content */}
            {/* ... */}
        </Drawer>
    );
};

