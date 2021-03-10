import React from 'react'
import {FiChevronRight} from 'react-icons/fi'

const RightButton = ({handleNextPersonBtn}) => {
    return (
        <button className='next' onClick={() => handleNextPersonBtn()}>
            <FiChevronRight/>
        </button>
    )
}

export default RightButton