import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Navratri from './Navratri'
import Karwa from './Karwa'
import Dhanteras from './Dhanteras'

function Oct() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>Janurary</h2>
            </div>
            <Navratri />
            <Karwa />
            <Dhanteras />
        </div>
    </div>
  )
}

export default Oct
