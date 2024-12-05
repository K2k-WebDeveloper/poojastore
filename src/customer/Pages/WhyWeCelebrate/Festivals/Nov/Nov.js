import React from 'react'
import Nava from '../../../../components/navigation/Nava'
import Diwali from './Diwali'
import Govardhan from './Govardhan'
import Tulsi from './Tulsi'

function Nov() {
  return (
<div>
        <Nava/>
        <div>
            <div className='flex justify-center font-bold text-[25px] text-[#fca400]'>
                <h2>Janurary</h2>
            </div>
            <Diwali />
            <Govardhan />
            <Tulsi />
        </div>
    </div>
  )
}

export default Nov
