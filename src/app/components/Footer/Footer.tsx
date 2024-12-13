import {Box, Typography, Link, Grid2} from '@mui/material';


function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                py: 3,
                px: 2,
                mt: 5,
            }}
        >
            <Grid2 container spacing={4}>
                <Grid2>
                    <Typography variant="h6" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body2">
                        Email: <Link href="mailto:info@randomsite.com" color="inherit">info@randomsite.com</Link>
                    </Typography>
                    <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
                    <Typography variant="body2">Address: 123 Random St, Cityville</Typography>
                </Grid2>
                <Grid2>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    <Link href="#" color="inherit" underline="hover" display="block">
                        About Us
                    </Link>
                    <Link href="#" color="inherit" underline="hover" display="block">
                        Services
                    </Link>
                    <Link href="#" color="inherit" underline="hover" display="block">
                        Careers
                    </Link>
                </Grid2>
                <Grid2>
                    <Typography variant="h6" gutterBottom>
                        Follow Us
                    </Typography>
                    <Link href="https://facebook.com" color="inherit" underline="hover" display="block">
                        Facebook
                    </Link>
                    <Link href="https://twitter.com" color="inherit" underline="hover" display="block">
                        Twitter
                    </Link>
                    <Link href="https://instagram.com" color="inherit" underline="hover" display="block">
                        Instagram
                    </Link>
                </Grid2>
            </Grid2>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                © {new Date().getFullYear()} RandomSite. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
