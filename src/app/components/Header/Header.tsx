'use server'
import {AppBar, Toolbar, Typography} from "@mui/material";


function Header()  {
    return <AppBar position="sticky" color="primary" component="header">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Game store
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Header;