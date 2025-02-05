import React from 'react'
import joinwhitelist from '../assets/joinwhitelist.png'
import dexscreener from '../assets/dexscreener.png'
import discord from '../assets/discord.png'
import instagram from '../assets/instagram.png'
import reddit from '../assets/reddit.png'
import telegram from '../assets/telegram.png'
import x from '../assets/x.png'
import {BuyAltButton} from "../buttons/BuyAltButton";
import {CAButton} from "../buttons/CAButton";
import {IconTelegram} from "../icons/IconTelegram";
import {IconDiscord} from "../icons/IconDiscord";
import {IconReddit} from "../icons/IconReddit";
import {IconInstagram} from "../icons/IconInstagram";
import {IconX} from "../icons/IconX";
import {IconDexScreener} from "../icons/IconDexScreener";

function Waitlist() {
    return (
        <div className='flex flex-col justify-center items-center bg-[#60DD3C]'>
            <h2 className='text-center  mb-1 lg:text-xl font-bold text-xl   mt-10 uppercase text-[#0D4300]'>top 100 holders whitelisted</h2>
            <img src={joinwhitelist} alt="joinwhitelist" className='w-9/12 lg:w-5/12 mb-5' />

            <div className='flex flex-col lg:flex-row justify-center items-center gap-4'>
                <BuyAltButton />
                <CAButton />
            </div>

            <div className="socials flex flex-row justify-center items-center gap-5 my-5">
                <a href="https://t.me/MutantBoysClub_MBC" target="_blank"><IconTelegram dark={true} size={44} /></a>
                <a href="#" target="_blank"><IconDiscord dark={true} size={44} /></a>
                <a href="#" target="_blank"><IconReddit dark={true} size={44} /></a>
                <a href="#" target="_blank"><IconInstagram dark={true} size={44} /></a>
                <a href="https://x.com/MBC_Solana" target="_blank"><IconX dark={true} size={44} /></a>
                <a href="https://dexscreener.com/solana/hebuwy9gh9noarbcvu6xym58kjsc6xeiwwjc3nwc5yrd"
                   target="_blank"><IconDexScreener dark={true} size={44} /></a>
            </div>
        </div>
    )
}

export default Waitlist