import EmptyError from '@/components/EmptyError'
import React from 'react'

const page = () => {
    return (
        <>
            <EmptyError
                title='Registration Closed'
                subTitle='Registration for this program is currently closed'
                className='w-full h-screen gap-7'
                image='/empty.png'
            />
        </>
    )
}

export default page
