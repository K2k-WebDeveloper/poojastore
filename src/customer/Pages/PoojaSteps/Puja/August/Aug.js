import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Nag from './Nag'
import Raksha from './Raksha'
import Krishna from './Krishna'

function Aug() {
  return (
    <div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>Janurary</h2>
            </div>
            <Nag />
            <Raksha />
            <Krishna />
        </div>
    </div>
  )
}

export default Aug
