import React, { Fragment } from 'react'
import usedby from '../assets/Content.svg'
import { Container } from '@mui/material'
import { Grid, Typography } from '@mui/material';

export function Connection() {
    return (
        <Fragment>
            <Container>
                <Grid item xs={12} mt={20}>
                    <Typography variant="h2" component="div">
                        Relation & Awards
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" mb={2} mt={2} color={'#DC6B19'}>
                        Relationship Between Awards and Business Success
                    </Typography>
                </Grid>
                <img src={usedby} alt=""
                    style={{
                        width: '100%',
                        // height: '100%',
                        objectFit: 'cover',
                        marginTop: "80px",
                        objectPosition: 'center',
                    }}
                    loading="lazy"
                />
            </Container>
        </Fragment>
    )
}
