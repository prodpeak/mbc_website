import React from 'react'
import Landwolf from './Landwolf'
import Brett from './Brett'
import Pepe from './Pepe'
import Andy from './Andy'
import Birddog from './Birddog'

function Parts() {
    return (
        <div className='flex flex-col'>

            <Landwolf />
            <Brett />
            <Pepe />

            <Andy />

            <Birddog />
        </div>
    )
}

export default Parts