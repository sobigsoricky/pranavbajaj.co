import { BuildDream, Contact, GetStarted, Help, Hero, Portfolio, Professional, Testimonial } from '@/sections'
import BusinessIdentity from '@/sections/common/business-identity'
import React from 'react'

const PranavBajaj = () => {
    return (
        <>
            <Hero img="/images/pranav-banner.png" name="Pranav Bajaj" />
            <Help />
            <Portfolio />
            {/* <Professional /> */}
            <BusinessIdentity />
            {/* <GetStarted /> */}
            {/* <Testimonial /> */}
            {/* <Contact /> */}
            {/* <BuildDream /> */}
        </>
    )
}

export default PranavBajaj