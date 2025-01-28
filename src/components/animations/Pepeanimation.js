import React from 'react'
import pepehead from '../../assets/pepehead.png'
import pepebody from '../../assets/pepebody.png'

function Pepeanimation() {
    return (
        <div className='flex flex-row justify-center items-center '>
            <div className="relative left flex flex-col justify-center items-center w-full">
                <div className="things flex flex-col justify-center items-center head-updown">
                    <img src={pepehead} alt="head" className='w-[90%] -mb-[20%] z-10 head-upsdown shead-wobble2 ' />
                </div>
                <img src={pepebody} alt="body" className='w-[100%] ' />
            </div>

        </div>
    )
}

export default Pepeanimation