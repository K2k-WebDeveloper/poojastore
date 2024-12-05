import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../../Data/puja_samagri";

const  HomeSectionCarousel =({data,sectionName}) =>{
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);

  return ( 
    <div className="border ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 r">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          responsive={responsive}  
        />
        
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
