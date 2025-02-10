import React from 'react';
import brett from '../../assets/landwolf.webp';

const Landwolf = () => {
    return (
        <div className="flex flex-col lg:flex-row landwolfbg w-full items-center pb-4 lg:pb-0">
            <div className="order-1 lg:order-1 w-full lg:w-1/2 self-end">
                <img src={brett} alt="brett" className='w-full'/>
            </div>

            <div className="order-2 px-4 lg:px-12 py-0 lg:py-4 w-full lg:w-1/2 h-full">
                <div className="border border-gray-200 rounded-lg px-4 py-4 bg-gray-200 bg-opacity-20 w-full">
                    <h1 className="title text-gray-200 text-3xl">Q1 - 2025</h1>

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
                                <li>888 Brett Limited piece</li>
                                <li>1 Gold 1 of 1</li>
                                <li>1 OG 1 of 1</li>
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