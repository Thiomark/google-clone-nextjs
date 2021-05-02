import React from 'react'

const Avator = ({url}) => {
    return (
        <img loading='lazy'
            className='rounded-full h-7 w-7 hover:shadow-lg cursor-pointer'
            alt='Profile Picture'
            src={url}
        />
    )
}

export default Avator
