import React from 'react'
import heropic from '../assets/heropic.webp'
import {IconDexScreener} from "../icons/IconDexScreener";
import {IconTelegram} from "../icons/IconTelegram";
import {IconReddit} from "../icons/IconReddit";
import {IconDiscord} from "../icons/IconDiscord";
import {IconInstagram} from "../icons/IconInstagram";
import {IconX} from "../icons/IconX";

function Hero() {
    return (
        <div className='flex flex-col justify-center items-center px-0 pt-16'>
            <h1 className='text-center text-white lg:text-6xl text-5xl mb-5 mt-10 px-4'>Welcome to <br />
                <span className="font-black">Mutant Boys Club</span>
            </h1>

            <span className="flex flex-row justify-center items-center px-0 pt-4 space-x-8">
                <a href="https://t.me/MutantBoysClub_MBC" target="_blank"><IconTelegram /></a>
                <a href="#" target="_blank"><IconDiscord/></a>
                <a href="#" target="_blank"><IconReddit/></a>
                <a href="#" target="_blank"><IconInstagram/></a>
                <a href="https://x.com/MBC_Solana" target="_blank"><IconX/></a>
                <a href="https://dexscreener.com/solana/hebuwy9gh9noarbcvu6xym58kjsc6xeiwwjc3nwc5yrd" target="_blank"><IconDexScreener/></a>
            </span>

            <img src={heropic} alt="heropic" className='w-full rounded-xl' />
        </div>
    )
}

export default Hero