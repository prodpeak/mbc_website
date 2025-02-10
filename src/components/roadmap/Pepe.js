import React from 'react'
import pepe from '../../assets/pepe.webp'

const Pepe = () => {
    return (
        <div className="flex flex-col lg:flex-row pepebg w-full items-center pb-4 lg:pb-0">
            <div className="order-1 lg:order-1 w-full lg:w-1/2 self-end">
                <img src={pepe} alt="Pepe" className='w-full'/>
            </div>

            <div className="order-2 px-4 lg:px-12 py-0 lg:py-4 w-full lg:w-1/2 h-full">
                <div className="border border-gray-200 rounded-lg px-4 py-4 bg-gray-200 bg-opacity-20 w-full">
                    <h1 className="title text-gray-200 text-3xl">Q3 - 2025</h1>

                    <ul className="roadmap">
                        <li>Utility Expansion & New Features</li>
                        <li>Begin Android/iOS app avenues</li>
                        <li>Develop advanced analytics tools for project insights</li>
                        <li>Structured whitelist &amp; public mint strategy</li>
                        <li>4th NFT Mint Goes Live
                            <ol>
                                <li>888 Brett Limited piece</li>
                                <li>1 Gold 1 of 1</li>
                                <li>1 OG 1 of 1</li>
                            </ol>
                        </li>
                        <li>Collaborate with major Solana projects</li>
                        <li>Position MBC bots as essential tools for launchpads, marketing firms, and DAOs</li>
                        <li>Community & Industry Presence</li>
                        <li>Host MBC community meetups & participate in major Solana events</li>
                        <li>Organize Twitter Spaces with high-profile industry guests</li>
                        <li>5th NFT Mint Goes Live
                            <ol>
                                <li>888 BirdDog Limited piece</li>
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

export default Pepe