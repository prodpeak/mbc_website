import React from 'react'
import mockup from '../assets/mockup.webp'
import {BoosterButton} from "../buttons/BoosterButton";
import {BuyButton} from "../buttons/BuyButton";
import Mutantboosterpart from "./Mutantboosterpart";
import {IconShield} from "../icons/IconSheild";

function Introducing() {
    return (
        <div>
            <div className='flex lg:flex-row flex-col justify-center px-4 lg:pt-20'>
                <div className="left hidden lg:block lg:w-1/2">
                    <img src={mockup} alt="mockup" className='w-full pt-0 pr-28 pl-24'/>
                </div>

                <div className="right lg:w-1/2 flex flex-col justify-start lg:items-start gap-4 lg:gap-10 lg:pr-10">
                    <h2 className='text-gray-200 text-center lg:text-left'>
                        <div className="text-5xl lg:text-5xl pb-2">Introducing</div>
                        <span className="title text-4xl lg:text-6xl">
                            <span className="text-slime-700">Mutant</span> Booster
                        </span>
                    </h2>

                    <span className='flex flex-col text-lg text-white gap-4'>
                        <p className='xl:pr-20'>Take control of your project's presence on Dex Screener with Mutant Booster. Whether you're aiming for higher rankings, more volume, or a stronger holder base, these tools deliver.</p>
                        <ul className="roadmap text-base font-thin">
                            <li><span className="text-slime-700 font-bold">Rank Booster</span> – Adjust maker/taker ratio for better market making</li>
                            <li><span className="text-slime-700 font-bold">Volume Booster</span> – Increase
                    24-hour trading volume and visibility</li>
                            <li><span className="text-slime-700 font-bold">Holder Booster</span> – Grow your token holder count and strengthen credibility</li>
                            <li><span className="text-slime-700 font-bold">Airdrop</span> – Distribute tokens to targeted communities</li>
                            <li><span className="text-slime-700 font-bold">Dex Rockets</span> – Flood Dex Screener with high-impact transactions</li>
                        </ul>
                        <p>No gimmicks, just real market movement.<br/>Boost your project and stay ahead.</p>
                    </span>

                    <div className="btns w-full flex justify-center items-center lg:justify-normal lg:flex-row gap-5 pt-4">
                        <BuyButton/>
                        <BoosterButton/>
                    </div>
                </div>
            </div>


            <div className="booster hidden lg:flex justify-center items-center m-20 w-full mt-48">
                <Mutantboosterpart/>
            </div>

            <div className="three hidden lg:flex flex-col lg:flex-row justify-between items-center lg:w-[70%] w-[80%] mb-5 pl-20 pr-4 text-lg mx-auto">
                <div className="flex items-center space-x-2">
                    <div><IconShield /></div>
                    <p className="text-gray-200">
                        No up front fees<br/>
                        No renewal fees
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <div><IconShield/></div>
                    <p className="text-gray-200">
                        No Minimum Deposit<br/>
                        Boost on your terms
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <div><IconShield/></div>
                    <p className="text-gray-200">
                        0.025% Fee / Transaction<br/>
                        Keeping your costs low
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introducing