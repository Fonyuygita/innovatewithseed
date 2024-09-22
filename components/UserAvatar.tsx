
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import React from 'react'

const UserAvatar = async () => {
    const clerkUser = await currentUser();

    return (
        <>
            <Image src={clerkUser?.imageUrl as string} alt="" width={40} height={40} className="object-contain rounded-full" />

        </>
    )
}

export default UserAvatar
