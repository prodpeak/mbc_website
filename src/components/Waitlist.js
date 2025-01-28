import React from 'react'
import joinwhitelist from '../assets/joinwhitelist.png'
import contract from '../assets/contract.png'
import dexscreener from '../assets/dexscreener.png'
import discord from '../assets/discord.png'
import instagram from '../assets/instagram.png'
import reddit from '../assets/reddit.png'
import telegram from '../assets/telegram.png'
import x from '../assets/x.png'
import buymbcwhite from '../assets/buymbcwhite.png'

function Waitlist() {
    return (
        <div className='flex flex-col justify-center items-center bg-[#60DD3C]'>
            <h2 className='text-center  mb-1 lg:text-xl font-bold text-xl   mt-10 uppercase text-[#0D4300]'>top 100 holders whitelisted</h2>
            <img src={joinwhitelist} alt="joinwhitelist" className='w-9/12 lg:w-5/12 mb-5' />

            <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                <a href="https://phantom.com/tokens/solana/MBCccZZEbcvWzaHD9otPjmBMFaa6pG7XRYSw39HT5n2?referralId=ch1u9xslfzv" target="_blank" rel="noopener noreferrer">
                    <img src={buymbcwhite} alt="buymbcwhite" className='w-40' />
                </a>
                <img src={contract} alt="contract" className='p-4 lg:p-0 w-full lg:w-[470px]' />
            </div>

            <div className="socials flex flex-row justify-center items-center gap-4 my-5">
                <a href="https://dexscreener.com/solana/Hebuwy9Gh9NoArBCvu6xym58KjSC6XeiwwjC3NwC5yrd" target="_blank" rel="noreferrer" className='w-1/12'>
                    <img src={dexscreener} alt="dexscreener" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className='w-1/12'>
                    <img src={discord} alt="discord" />
                </a>
                <a href="https://www.instagram.com/mutantboysclubofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className='w-1/12'>
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://www.reddit.com/r/MBCcoin/" target="_blank" rel="noreferrer" className='w-1/12'>
                    <img src={reddit} alt="reddit" />
                </a>
                <a href="https://t.me/MutantBoysClub_MBC" target="_blank" rel="noreferrer" className='w-1/12'>
                    <img src={telegram} alt="telegram" />
                </a>
                <a href="https://x.com/MBC_Solana" target="_blank" rel="noreferrer" className='w-1/12'>
                    <img src={x} alt="x" />
                </a>
            </div>
        </div>
    )
}

export default Waitlist