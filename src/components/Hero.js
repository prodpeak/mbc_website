import React, {useState} from 'react'
import heropic from '../assets/heropic.webp'
import {IconDexScreener} from "../icons/IconDexScreener";
import {IconTelegram} from "../icons/IconTelegram";
import {IconReddit} from "../icons/IconReddit";
import {IconDiscord} from "../icons/IconDiscord";
import {IconInstagram} from "../icons/IconInstagram";
import {IconX} from "../icons/IconX";

const CA = 'MBCccZZEbcvWzaHD9otPjmBMFaa6pG7XRYSw39HT5n2';

function Hero() {
    const [status, setStatus] = useState('');

    const copyToClipboard = async (self) => {
        try {
            await navigator.clipboard.writeText(CA);
            setStatus('Copied to Clipboard');
            setTimeout(() => {
                setStatus('');
                self.target.blur();
            }, 2000);
        } catch {
            //
        }
    };

    return (
        <div className='flex flex-col justify-center items-center px-0 pt-16 pb-6'>
            <h1 className='text-center text-white text-4xl lg:text-6xl mb-5 mt-16 px-4'>Welcome to <br/>
                <span className="font-black">Mutant Boys Club</span>
            </h1>

            <span className="flex flex-row justify-center items-center px-0 pt-4 space-x-5 md:space-x-8 pb-12 lg:pb-0">
                <a href="https://t.me/MutantBoysClub_MBC" target="_blank" rel="noopener noreferrer"><IconTelegram/></a>
                <a href="https://discord.gg/mu4R7wSv" target="_blank" rel="noopener noreferrer"><IconDiscord/></a>
                <a href="https://www.reddit.com/r/MBCcoin/" target="_blank" rel="noopener noreferrer"><IconReddit/></a>
                <a href="https://www.instagram.com/mutantboysclubofficial" target="_blank"
                   rel="noopener noreferrer"><IconInstagram/></a>
                <a href="https://x.com/MBC_Solana" target="_blank" rel="noopener noreferrer"><IconX/></a>
                <a href="https://dexscreener.com/solana/hebuwy9gh9noarbcvu6xym58kjsc6xeiwwjc3nwc5yrd"
                   target="_blank"
                   rel="noopener noreferrer"
                ><IconDexScreener/></a>
            </span>

            <img src={heropic} alt="heropic" className='w-full rounded-xl mb-2'/>

            <div className="w-full md:w-fit text-center">
                <button onClick={copyToClipboard} className="p-4 sm:rounded-none md:rounded-lg w-full md:w-auto btn-dark bg-slime-700 text-black text-xs md:text-xl tracking-wide font-bold">
                    MBCccZZEbcvWzaHD9otPjmBMFaa6pG7XRYSw39HT5n2
                </button>
                <div className="text-gray-200 pt-2 text-sm italic">{status}&nbsp;</div>
            </div>
        </div>
    )
}

export default Hero