"use client"
import React, { useState } from 'react'
import CountUp from "react-countup"
// import ScrollTrigger from 'react-scroll-trigger'

const CountUpNumber = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="">
            {/* <ScrollTrigger onEnter={(): any => setCounterOn(true)} onExit={() => setCounterOn(false)}> */}
            <>
                {counterOn &&
                    <CountUp start={0} end={100} duration={2} delay={0} />
                }

            </>
            {/* </ScrollTrigger> */}
        </div>
    )
}

export default CountUpNumber
