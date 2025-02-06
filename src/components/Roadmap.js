import React from 'react'
import Landwolf from './roadmap/Landwolf'
import Brett from './roadmap/Brett'
import Pepe from './roadmap/Pepe'
import Andy from './roadmap/Andy'
import Birddog from './roadmap/Birddog'

const Roadmap = () => {
    return (
        <div className='flex flex-col justify-center'>
            <Landwolf />
            <Brett />
            <Pepe />
            <Andy />
            <Birddog />
        </div>
    )
}

export default Roadmap