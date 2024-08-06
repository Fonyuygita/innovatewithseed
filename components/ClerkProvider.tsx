
"use client"
import React from "react"
import { shadesOfPurple } from '@clerk/themes';

import { ClerkProvider } from '@clerk/nextjs'



const Provider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ClerkProvider
            appearance={{
                baseTheme: [shadesOfPurple],
            }}

        >{children}</ClerkProvider>

    )

}

export default Provider