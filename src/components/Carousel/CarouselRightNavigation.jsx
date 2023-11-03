import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import RightArrow from '../Images/RightArrow/RightArrow';
import styles from "./Carousel.module.css"
import "swiper/css"

const CarouselRightNavigation = () => {

  const swiper = useSwiper();
  const [isEnd,setIsEnd] = useState(swiper.isEnd);

  useEffect(()=>{
    swiper.on("slideChange" , function(){
             setIsEnd(swiper.isEnd)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className={styles.rightNav}>
     {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/> } 
    </div>
  );
}

export default CarouselRightNavigation;
