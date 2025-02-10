import React from 'react';
import brett from '../../assets/brett.webp';

const Brett = () => {
    return (
        <div className="flex flex-col lg:flex-row brettbg w-full items-center pb-4 lg:pb-0">
            <div className="order-1 lg:order-3 w-full lg:w-1/2 self-end">
                <img src={brett} alt="brett" className='w-full'/>
            </div>

            <div className="order-2 px-4 lg:px-12 py-0 lg:py-4 w-full lg:w-1/2 h-full">
                <div className="border border-gray-200 rounded-lg px-4 py-4 bg-gray-200 bg-opacity-20 w-full">
                    <h1 className="title text-gray-200 text-3xl">Q2 - 2025</h1>

                    <ul className="roadmap">
                        <li>Introduce Rev-Share Model for NFT holders
                            <ol>
                                <li>Staking Dapp for NFTs</li>
                                <li>100% Booster & 100% Royalty Revenue for staking</li>
                                <li>Holding an NFT will allow you to receive an extra 10% on all booster referrals</li>
                            </ol>
                        </li>
                        <li>Pumpfun bump bot integration</li>
                        <li>Dex Rockets integration</li>
                        <li>Optimize bot performance to handle increased volume</li>
                        <li>ReEngage KOLs & influencers to build pre-mint hype</li>
                        <li>2st NFT Mint Goes Live
                            <ol>
                                <li>888 Landwolf Limited pieces</li>
                                <li>1 Gold 1 of 1</li>
                                <li>1 OG 1 of 1</li>
                            </ol>
                        </li>
                        <li>Engagement-driven contests to maintain momentum</li>
                        <li>Explore Major Exchange Listing
                            <ol>
                                <li>Evaluate CEX/DEX listing for MBC token</li>
                            </ol>
                        </li>
                        <li>3rd NFT Mint Goes Live
                            <ol>
                                <li>888 Pepe Limited pieces</li>
                                <li>1 Gold 1 of 1</li>
                                <li>1 OG 1 of 1</li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Brett