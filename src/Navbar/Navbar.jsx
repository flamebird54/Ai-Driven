import React, { useState } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

export function Navbar() {


    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };


    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '5px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            // border: '1px solid',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                // border: "1px solid red",
                                px: 0,
                            }}
                        >
                            <Typography variant="h5" color="black" mr="50px">
                                Ai Driven
                            </Typography>
                            <Box sx={{ display: { xs: 'none', md: 'flex', gap: "15px" } }}>
                                <MenuItem
                                    onClick={() => scrollToSection('home')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body3" color="text.primary">
                                        Home
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('services')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body3" color="text.primary">
                                        Services
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('about')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body3" color="text.primary">
                                        About
                                    </Typography>
                                </MenuItem>

                                <MenuItem
                                    onClick={() => scrollToSection('contact')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body3" color="text.primary">
                                        Contact
                                    </Typography>
                                </MenuItem>
                            </Box>


                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                                justifyContent: "flex-end"
                            }}
                        >
                            <Button
                                sx={{
                                    textTransform: "unset",
                                    padding: "10px 28px",
                                    borderRadius: '5px',
                                    fontWeight: "600",
                                    backgroundColor: "#DC6B19",
                                    boxShadow: "0",
                                    '&:hover': {
                                        backgroundColor: "#EFBC9B",
                                        color: "black",
                                        boxShadow: "0"

                                    }
                                }}
                                variant="contained"
                            >
                                Get a free demo
                            </Button>

                        </Box>

                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('home')}>
                                        Home
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('services')}>
                                        Services
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('about')}>
                                        About
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('contact')}>
                                        Contact
                                    </MenuItem>
                                    <Divider />

                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            href="/material-ui/getting-started/templates/sign-in/"
                                            target="_blank"
                                            sx={{
                                                width: '100%',
                                                textTransform: "unset"
                                            }}
                                        >
                                            Get a demo
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
