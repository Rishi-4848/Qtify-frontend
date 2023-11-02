import React from 'react';
import  { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import LeftArrow from '../Images/LeftArrow/LeftArrow';
import styles from "./Carousel.module.css"

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);

  useEffect(()=>{
    swiper.on("slideChange" , function(){
             setIsBeginning(swiper.isBeginning)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className={styles.leftNav}>
      {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()}/>}
    </div>
  );
}

export default CarouselLeftNavigation;
