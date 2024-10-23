import DashboardFooter from '@/components/DashboardFooter'
import EmptyError from '@/components/EmptyError'
import React from 'react'

const page = () => {
    return (
        <>
            <EmptyError
                title='You are Offline'
                subTitle='Seems you are offline, Please Reconnect'
                className='w-full h-screen gap-7'
                animation

            />
            <DashboardFooter />
        </>
    )
}

export default page
