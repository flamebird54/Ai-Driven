import React, { Fragment } from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { FaBriefcase } from 'react-icons/fa';
import { SiMarketo } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import companydo from '../assets/2.jpg'

export function Whatwedo() {
    return (
        <Fragment>
            <Grid container spacing={2} sx={{ width: '80%', margin: 'auto', mt: "95px" }}>
                <Grid item xs={12}>
                    <Typography variant="h2" mb={6}>
                        What we do
                    </Typography>
                    <Typography variant="h4" mb={2} color={'#DC6B19'}>
                        Full-service AI Marketing Solutions
                    </Typography>
                    <Typography variant="p" mb={2} color={'#abb8c3'} fontWeight={"300"}>
                        As a digital marketing agency, we specialize in increasing online visibility, engaging target audiences, and driving conversions. Our services include SEO, PPC advertising, social media marketing, content marketing, email marketing, website design, and analytics.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} mt={7}>
                    <Card>
                        <CardContent>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <FaBriefcase size={24} color='#F2613F' />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" component="div">
                                        Consulting
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" color={'#abb8c3'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} mt={7}>
                    <Card>
                        <CardContent>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <SiMarketo size={24} color='#F2613F' />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" component="div">
                                        Marketing
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" color={'#abb8c3'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} mt={7}>
                    <Card>
                        <CardContent>
                            <Grid container direction="column" spacing={1}>
                                <Grid item>
                                    <MdOutlineDesignServices size={24} color='#F2613F' />
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="h5" component="div">
                                        Design
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant="body2" color={'#abb8c3'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <img
                src={companydo}
                alt="Hero Background"
                style={{
                    width: '100%',
                    // height: '100%',
                    objectFit: 'cover',
                    marginTop: "150px",
                    objectPosition: 'center',
                }}
                loading="lazy"
            />
        </Fragment>
    )
}
