import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Makar from './Makar'

function Jan() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>Janurary</h2>
            </div>
            <Makar />
        </div>
    </div>
  )
}

export default Jan