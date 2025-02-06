import React from 'react'
import andy from '../../assets/andy2.gif'

function Andy() {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-center andybg px-4 py-5 lg:py-0'>
            <div className="right flex flex-col lg:justify-start justify-center lg:w-1/2 mt-10">
                <div className="border border-gray-200 rounded-lg px-10 py-4 bg-gray-200 bg-opacity-20 m-10 w-full">
                    <h1 className="title text-gray-200 text-3xl">Q4 - 2025</h1>

                    <ul className="roadmap">
                        <li>Long-Term Vision for 2026 &amp; Beyond</li>
                        <li>Begin Android/iOS app avenues</li>
                        <li>Expansion to Other Chains
                            <ol>
                                <li>ETH Wormhole</li>
                            </ol>
                        </li>
                        <li>Additional Sustainable Revenue Streams fueling long-term growth</li>
                        <li>Organize Twitter Spaces with high-profile industry guests</li>
                        <li>Update community on Android/iOS app progress</li>
                    </ul>
                </div>
            </div>

            <div className="left lg:w-1/2 flex flex-col lg:justify-end justify-center items-center lg:items-end">
                <img src={andy} alt="andy" className='w-9/12 lg:w-11/12 lg:ml-20 m-4 lg:mb-0'/>
                {/* <Andyanimation /> */}
            </div>
        </div>
    )
}

export default Andy