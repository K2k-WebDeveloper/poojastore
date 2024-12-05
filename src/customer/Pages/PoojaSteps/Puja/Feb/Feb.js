import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Basant from './Basant'

function Feb() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>February</h2>
            </div>     
            <Basant />
        </div>
    </div>
  )
}

export default Feb