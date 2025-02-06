import React from 'react'
import brett from '../../assets/brett.gif'

function Brett() {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center brettbg px-4 py-5 lg:py-0'>
            <div className="right flex flex-col lg:justify-start justify-center items-center lg:items-start lg:w-1/2 mt-10">
                <div className="border border-gray-200 rounded-lg px-10 py-4 bg-gray-200 bg-opacity-20 m-10 w-full">
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

            <div className="left lg:w-1/2 flex flex-col lg:justify-end justify-center items-center lg:items-end">
                <img src={brett} alt="brett" className='w-12/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0'/>
                {/* <Brettanimation /> */}
            </div>
        </div>
    )
}

export default Brett