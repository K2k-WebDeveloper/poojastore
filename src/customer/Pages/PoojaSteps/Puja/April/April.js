import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Ram from './Ram'
import Hanuman from './Hanuman'

function April() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>Janurary</h2>
            </div>
            <Ram />
            <Hanuman />
        </div>
    </div>
  )
}

export default April
