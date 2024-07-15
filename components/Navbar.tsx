import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='container bg-light-300 '>
            <nav className='flex justify-between items-center p-2'>
                <div className='w-22 h-23 '>
                    <Image
                        src="/seedLogo.png"
                        width={100}
                        height={200}
                        alt='logo'
                        className='w-25 h-25 object-contain'
                    />
                </div>

            </nav>

        </div>
    )
}

export default Navbar
