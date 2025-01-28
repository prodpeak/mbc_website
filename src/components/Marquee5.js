import React from 'react'
import bigrolly from '../assets/bigrolly.png'

function Marquee5() {
    return (
        <div className="flex flex-col justify-center items-center relative overflow-hidden w-full">
            <div className="whitespace-nowrap"
                style={{
                    animation: 'marquee2 1000s linear infinite',
                    transform: 'translateX(0)',
                }}>
                {[...Array(100)].map((_, index) => (
                    <img
                        key={index}
                        src={bigrolly}
                        alt="Rolling animation"
                        className="inline-block lg:w-[3000px] w-[1000px] max-w-none mx-0"
                    />
                ))}
            </div>
            <style jsx>{`
            @keyframes marquee2 {
                0% { transform: translateX(0); }
                100% { transform: translateX(50%); }
            }
        `}</style>
        </div>
    )
}

export default Marquee5 