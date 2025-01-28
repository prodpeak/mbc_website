import React from 'react'
import rolly2 from '../assets/rolly2.png'

function Marquee2() {
    return (
        <div className="flex flex-col justify-center items-center relative overflow-hidden w-full">
            <div className="whitespace-nowrap"
                style={{
                    animation: 'marquee1 2000s linear infinite',
                    transform: 'translateX(0)',
                }}>
                {[...Array(100)].map((_, index) => (
                    <img
                        key={index}
                        src={rolly2}
                        alt="Rolling animation"
                        className="inline-block lg:w-[3000px] w-[2000px]  max-w-none mx-0"
                    />
                ))}
            </div>
            <style jsx>{`
                @keyframes marquee1 {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(50%); }
                }
            `}</style>
        </div>
    )
}

export default Marquee2 