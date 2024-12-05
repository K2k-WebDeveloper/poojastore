import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Holi from './Holi'
import Shivaratri from './Shivaratri'
import Gangaur from './Gangaur'

function Mar() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>March</h2>
            </div>
            <Shivaratri />
            <Holi />
            <Gangaur />
        </div>
    </div>
  )
}

export default Mar
