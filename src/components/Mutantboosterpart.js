import React, { useState } from 'react'
import mutant1 from '../assets/mutant1.webp'
import mutant2 from '../assets/mutant2.webp'
import mutant3 from '../assets/mutant3.webp'
import mutant4 from '../assets/mutant4.webp'
import mutant5 from '../assets/mutant5.webp'

function Mutantboosterpart() {
    // Add state for selected image
    const [selectedImage, setSelectedImage] = useState(mutant1);

    // Add progress state
    const [progress, setProgress] = useState(20); // starts at 20% for first step

    // Function to handle part clicks
    const handlePartClick = (image) => {
        setSelectedImage(image);
        // Set progress based on which option is clicked
        switch (image) {
            case mutant1: setProgress(20); break;
            case mutant2: setProgress(40); break;
            case mutant3: setProgress(60); break;
            case mutant4: setProgress(80); break;
            case mutant5: setProgress(100); break;
            default: setProgress(20);
        }
    };

    const getClassName = (image) => {
        if (selectedImage ===  image) {
            return "cursor-pointer hover:text-white text-white text-[10px] lg:text-xl";
        }
        return "cursor-pointer hover:text-gray-300 active:text-white text-[10px] lg:text-xl";
    }

    return (
        <div className='flex flex-row justify-center items-center text-white border-2s px-1'>
            <div className="mr-2 vertical-leftside relative h-40 lg:h-96 w-2 rounded-full bg-slime-950/20">
                <div
                    className="absolute rounded-full w-full bg-slime-700 transition-all duration-300 ease-in-out lg:h-20 h-10"
                    style={{ bottom: `${100 - progress}%` }}
                ></div>
            </div>

            <div className="middleside lg:w-[70%] w-[80%] pr-3 px-20">
                <img src={selectedImage} alt="mutant" className=' dw-10/12' />
            </div>

            <div className="rightside flex flex-col justify-start items-start gap-8 pl-12 mb-28 text-gray-500">
                <div onClick={() => handlePartClick(mutant1)}
                     className={getClassName(mutant1)}
                >Login</div>
                <div onClick={() => handlePartClick(mutant2)}
                     className={getClassName(mutant2)}
                >Add New Project</div>
                <div onClick={() => handlePartClick(mutant3)}
                     className={getClassName(mutant3)}
                >Select Service</div>
                <div onClick={() => handlePartClick(mutant4)}
                     className={getClassName(mutant4)}
                >Boost Project</div>
                <div onClick={() => handlePartClick(mutant5)}
                     className={getClassName(mutant5)}
                >My Projects</div>
            </div>
        </div>
    )
}

export default Mutantboosterpart