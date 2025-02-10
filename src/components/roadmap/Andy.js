import React from 'react';
import andy from '../../assets/andy.webp';

const Andy = () => {
    return (
        <div className="flex flex-col lg:flex-row andybg w-full items-center pb-4 lg:pb-0">
            <div className="order-1 lg:order-3 w-full lg:w-1/2 self-end">
                <img src={andy} alt="Andy" className='w-full'/>
            </div>

            <div className="order-2 px-4 lg:px-12 py-0 lg:py-4 lg:pl-12 w-full lg:w-1/2 h-full">
                <div className="border border-gray-200 rounded-lg px-4 py-4 bg-gray-200 bg-opacity-20 w-full">
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
        </div>
    )
}

export default Andy