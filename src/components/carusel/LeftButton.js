import React from 'react'
import {FiChevronLeft} from 'react-icons/fi'

const LeftButton = ({handlePrevPersonBtn}) => {
    return (
        <button className='prev' onClick={() => handlePrevPersonBtn()}>
            <FiChevronLeft/>
        </button>
    )
}

export default LeftButton