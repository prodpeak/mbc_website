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
                <div className="left hidden lg:block lg:w-3/5">
                    <img src={mockup} alt="mockup" className='w-full pt-0 pr-28 pl-24'/>
                </div>

                <div className="right lg:w-2/5 flex flex-col justify-start lg:items-start gap-4 lg:gap-10 lg:pr-10">
                    <h2 className='text-gray-200 text-center lg:text-left'>
                        <div className="text-5xl lg:text-5xl pb-2">Introducing</div>
                        <span className="title text-4xl  lg:text-6xl">
                            <span className="text-slime-700">Mutant</span> Booster
                        </span>
                    </h2>

                    <span className='flex flex-col text-lg text-white gap-4'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, leo id tristique sagittis, lectus orci mollis velit, eget condimentum augue erat quis risus. Nullam ultrices metus quam, eget vehicula ligula commodo a. Nullam malesuada nisl nec feugiat fringilla.
                        </p>
                        <p>
                            Aliquam a sem vel lectus interdum posuere ut vitae felis. Nullam neque nibh, accumsan vel libero vestibulum, accumsan porttitor nisl. Donec dictum, nibh sed euismod mollis, arcu tortor pharetra quam, non ornare neque dui at elit. Morbi id neque urna.
                        </p>
                        <p>
                            Nunc imperdiet eget est eget vulputate. Donec auctor id libero et bibendum. Vestibulum ac elit porta nulla tempus laoreet. Aenean placerat
                        </p>
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
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <div><IconShield/></div>
                    <p className="text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <div><IconShield/></div>
                    <p className="text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introducing