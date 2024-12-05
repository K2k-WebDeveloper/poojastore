import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Ganesha from './Ganesha'

function Sept() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>Janurary</h2>
            </div>
            <Ganesha />
            <Sept />
        </div>
    </div>
  )
}

export default Sept
