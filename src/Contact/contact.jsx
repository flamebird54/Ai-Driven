import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

export function ContactUsForm() {
    return (
        <div id='contact'>
            <Grid container spacing={10} sx={{ marginTop: '150px', backgroundColor: '#F3EEEA', padding: { xl: 6, xs: 2, sm: 2 } }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">
                        Ready to Take Your Internet Marketing to the next Level?
                    </Typography>

                    <Typography variant="body1" sx={{ marginTop: '22px', marginBottom: '12px' }}>
                        Have a question or want to learn more about our services? We're here to help! Our team is dedicated to providing you with the information you need to make informed decisions about your internet marketing strategy.
                    </Typography>

                    <Typography variant="body1" sx={{ marginTop: '22px', marginBottom: '12px' }}>
                        Feel free to reach out to us using the contact form below. Whether you're interested in our services, have a specific question, or just want to chat about your marketing goals, we're ready to assist you. We strive to provide prompt and helpful responses, so you can expect to hear back from us as soon as possible.
                    </Typography>

                    <Typography variant="body1" sx={{ marginTop: '22px', marginBottom: '12px' }}>
                        Thank you for considering us for your internet marketing needs. We look forward to the opportunity to work with you and help take your online presence to the next level!
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <form>
                        <h1>Let’s talk</h1>
                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                // Add any necessary props
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                // Add any necessary props
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                // Add any necessary props
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div >
    );
}
