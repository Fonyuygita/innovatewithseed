import DashboardFooter from '@/components/DashboardFooter'
import EmptyError from '@/components/EmptyError'
import React from 'react'

const page = () => {
    return (
        <>
            <EmptyError
                title='You are Offline'
                subTitle='Please  connect to the internet'
                className='w-full h-screen gap-7'
                image='/closed.png'
                msg
            />
            <DashboardFooter />
        </>
    )
}

export default page
