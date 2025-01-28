import React from 'react'
import monsters from '../assets/monsters.png'

function Marquee4() {
    return (
        <div className="flex flex-col justify-center items-center relative overflow-hidden w-full">
            {/* <div className="whitespace-nowrap"
                style={{
                    animation: 'marquee 700s linear infinite',
                    transform: 'translateX(0)',
                }}>
                {[...Array(100)].map((_, index) => (
                    <img
                        key={index}
                        src={monsters}
                        alt="Rolling animation"
                        className="inline-block lg:w-[1600px] w-[800px] max-w-none mx-0"
                    />
                ))}
            </div>
            <style jsx>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        `}</style> */}

            <img

                src={monsters}
                alt="Rolling animation"
                className="inline-blockd lg:w-[1600px]d w-4/12 smax-w-none mx-0"
            />
        </div>
    )
}

export default Marquee4