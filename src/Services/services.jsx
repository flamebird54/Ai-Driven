import React, { Fragment } from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { FaComputer } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa6";
import { TbHeartHandshake } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";

export function Services() {
    return (
        <Fragment>
            <Container id='services'>
                <Grid container spacing={2} sx={{ mt: "125px" }}>
                    <Grid item xs={12}>
                        <Typography variant="h2" component="div">
                            Services
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" mb={2} color={'#DC6B19'}>
                            Take Your Business to the Next Level
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="p" mb={2} color={'#abb8c3'}>
                            An AI-driven digital marketing agency employs cutting-edge technology to enhance marketing strategies, optimize campaigns, and deliver superior results. Harnessing the power of artificial intelligence, these agencies offer innovative solutions tailored to clients' needs, driving growth and maximizing ROI in the ever-evolving digital landscape.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} mt={5}>
                        <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                            <CardContent>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <FaComputer size={54} color='#F2613F' />
                                    </Grid>
                                    <Typography variant="h5" component="div">
                                        Digital Strategy
                                    </Typography>
                                </Grid>
                                <Typography variant="body2" mt={1}>
                                    Digital strategy is a comprehensive plan that outlines how an organization will use technology to achieve its goals. It involves the use of digital tools and technologies to improve business processes, enhance customer experience, and drive growth.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} mt={5}>
                        <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                            <CardContent>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <FaBullhorn size={54} color='#F2613F' />
                                    </Grid>
                                    <Typography variant="h5" component="div">
                                        Advertising
                                    </Typography>
                                </Grid>
                                <Typography variant="body2" mt={1}>
                                    Advertising is a marketing tactic that involves promoting a product, service, or brand through paid communication channels. The goal of advertising is to reach and persuade a target audience to take a specific action.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ mt: "155px" }}>
                    <Grid item xs={12} md={6} mt={4}>
                        <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                            <CardContent>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <TbHeartHandshake size={54} color='#F2613F' />
                                    </Grid>
                                    <Typography variant="h5" component="div">
                                        Online Marketing
                                    </Typography>
                                </Grid>
                                <Typography variant="body2" mt={1}>
                                    Online marketing, also known as digital marketing, is the use of digital channels and strategies to promote products, services, or brands to a target audience.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} mt={4}>
                        <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                            <CardContent>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <BsGraphUp size={54} color='#F2613F' />
                                    </Grid>
                                    <Typography variant="h5" component="div">
                                        Search Engine Optimization
                                    </Typography>
                                </Grid>
                                <Typography variant="body2" mt={1}>
                                    Search Engine Optimization (SEO) is the practice of optimizing your website and its content to rank higher in search engine results pages (SERPs)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Fragment >
    )
}
