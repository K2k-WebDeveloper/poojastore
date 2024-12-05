import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta, puja_samagri } from '../../../Data/puja_samagri'
import { puja_murti } from '../../../Data/puja_murti'

function Homepage() {
  return (
    <div>
        <MainCrosel />
        <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={puja_samagri} sectionName={"Puja Items (Samagri)"}/>
            <HomeSectionCarosel data={puja_murti} sectionName={"Statues (Murti)"}/>
        </div>
    </div>
  )
}

export default Homepage