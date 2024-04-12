import React, { Fragment } from 'react'
import { Herosection } from '../Herosection/Herosection'
import { Helmet } from "react-helmet";
import { Whatwedo } from '../WhatweDo/whatwedo';
import { Services } from '../Services/services';
import { Connection } from '../Connection/connection';
import TestimonialsGridSection from '../Testimonials/testimonialgrid';
import { ContactUsForm } from '../Contact/contact';

export default function Home() {
    return (
        <Fragment>
            <Helmet>
                <title>Home - Digital Marketing Agency</title>
            </Helmet>
            <Herosection />
            <Whatwedo />
            <Services />
            <Connection />
            <TestimonialsGridSection />
            <ContactUsForm />
        </Fragment>
    )
}
