import React from 'react'
import { MainCarouselData } from './MainCroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
function MainCrosel() {
    const items = MainCarouselData.map((item)=> <img className='cursor-pointer  ' role='presentation' src={item.image} /> )
   
  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={4000}
    infinite
    />
  )
}

export default MainCrosel