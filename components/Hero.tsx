"use client"
import { motion } from "framer-motion"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomButton from './CustomButton'
import { FaUserPlus } from 'react-icons/fa';
import DynamicHero from "./DynamicHero"


const data = [
    {
        id: 1,
        title: "Always fresh & always crispy & always hot",
        image: "/banner.png"
    },
    {
        id: 2,
        title: "We Deliver your order wherever you are ",
        image: "/bg.png"
    },
    {
        id: 3,
        title: "The bet piza to share with your family",
        image: "/bg1."
    }


]
const Hero = () => {


    const text = "The Future of Tech"
    return (
        <>
            <DynamicHero
                title="SEED INNOVATE"
                description="Empowering Tomorrow's Tech Leaders"
            />
        </>
    )
}

export default Hero
