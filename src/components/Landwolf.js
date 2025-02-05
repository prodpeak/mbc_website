import React from 'react'
import landwolf from '../assets/landwolf.gif'
import landwolftext from '../assets/landwolftext.png'

function Landwolf() {
    return (
        <div className='flex lg:flex-row flex-col justify-center items-center landwolfbg px-4 py-5 lg:py-0'>

            <div className="left lg:w-1/2 flex flex-col lg:justify-end justify-center items-center lg:items-end">
                <img src={landwolf} alt="landwolf" className='w-12/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0'/>
            </div>

            <div className="right flex flex-col lg:justify-start justify-center items-center lg:items-start lg:w-1/2 lg:pr-20 lg:pl-10">
                <div className="border border-gray-200 rounded-lg px-10 py-4 bg-gray-200 bg-opacity-20 m-10 w-full">
                    <img src={landwolftext} alt="landwolftext" className='w-80'/>
                    <ul className="roadmap">
                        <li>Community Growth - 1000 TG Members</li>
                        <li>Gain Engagement on Socials</li>
                        <li>Increase MBC Brand Awareness ahead of the NFT launch
                            <ol>
                                <li>Rank Bot, Volume Bot, Dex Rockets, etc.</li>
                                <li>Booster User Expansion</li>
                            </ol>
                        </li>
                        <li>Organise Contests &amp; Interactive Activities
                            <ol>
                                <li>Weekly Twitter Spaces</li>
                                <li>Invite projects to discuss the Solana Ecosystem</li>
                                <li>Offer free trials of the MBC Booster Bot</li>
                            </ol>
                        </li>
                        <li>Structured whitelist &amp; public mint strategy</li>
                        <li>Utility Bot Expansion</li>
                        <li>Engage KOLs & Influencers to build pre-mint hype</li>
                        <li>1st NFT Mint Goes Live
                            <ol>
                                <li>888 Brett Limited piece </li>
                                <li>1 Gold 1 of 1 </li>
                                <li>1 OG 1 of 1 </li>
                            </ol>
                        </li>
                        <li>Ensure secondary market support &amp; trading incentives</li>
                        <li>Strategic Collabs &amp; Partnerships</li>
                        <li>Discord Coin Flip bot integration</li>
                        <li>Cross community Coin Flip bot
                            <ol>
                                <li>Ability to fund with SOL or native token</li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Landwolf