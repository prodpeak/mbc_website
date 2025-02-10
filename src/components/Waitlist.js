import React from 'react'
import {BuyAltButton} from "../buttons/BuyAltButton";
import {JoinDiscordButton} from "../buttons/JoinDiscordButton";

const Waitlist = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#60DD3C] py-10'>
            <h2 className='text-center  mb-1 lg:text-xl font-bold text-xl uppercase text-[#0D4300]'>
                Top 100 holders whitelisted
            </h2>
            <h1 className="title text-slime-black text-4xl lg:text-8xl my-5">Join the Whitelist</h1>

            <div className='flex space-x-14'>
                <BuyAltButton/>
                <JoinDiscordButton/>
            </div>
        </div>
    )
}

export default Waitlist
