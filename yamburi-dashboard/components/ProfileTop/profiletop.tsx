import React from 'react'
import './css/style.css'
import Image from 'next/image'
type Props = {}

const Profiletop = (props: Props) => {
    return (
        <div className='profiletop'>
            <div className='profiletop-div'>
                <div className='profiletop-div--mode'>
                    <div className='profiletop-div--mode_btn'>
                        <div className='profiletop-div--mode_btn__white'></div>
                    </div>
                    <div className='profiletop-div--mode_text'>Dark Mode</div>
                </div>
                <div className='profiletop-div--profile'>
                    <div className='profiletop-div--profile'>
                        <Image
                            src='/profilepic.png'
                            width={40}
                            height={40}
                            priority
                            alt='Person Logo'
                        />
                    </div>
                    <div className='profiletop-div--name'>
                        <div className='profiletop-div--name_main'>
                            Anisha Mishra
                        </div>
                        <div className='profiletop-div--name_position'>
                            Admin
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiletop