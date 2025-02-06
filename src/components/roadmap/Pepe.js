import React from 'react'
import pepe from '../../assets/pepe.gif'

const Pepe = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center pepebg px-4 py-5 lg:py-0'>
            <div className="left lg:w-1/2 flex flex-col lg:justify-end justify-center items-center lg:items-end">
                <img src={pepe} alt="pepe" className='w-12/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0'/>
            </div>

            <div
                className="right flex flex-col lg:justify-start justify-center items-center lg:items-start lg:w-1/2 lg:pr-20 lg:pl-10">
                <div className="border border-gray-200 rounded-lg px-10 py-4 bg-gray-200 bg-opacity-20 m-10 w-full">
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