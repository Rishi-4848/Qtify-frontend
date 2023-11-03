import React, { useState } from 'react';
import styles from "./Section.module.css";
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import BasicTabs from '../Tabs/Tabs';

const Section = ({data,title,type,value=0,handleChange=null,filteredData = null,filteredDataValues = [],toggle=false}) => {

  const [carouselToggle,setCarouselToggel] = useState(true);
  const handleToggle = ()=>{
     setCarouselToggel(!carouselToggle)
  }
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      {type === "song" ? <BasicTabs value={value} handleChange={handleChange}/>:null}
      {
        !data.length?(
          <CircularProgress/>
        ):(
          <div className={styles.cardWrapper}>
            {!carouselToggle?
        <div className={styles.wrapper}>
         {filteredDataValues.map((item)=>
           <Card  key={item.id} data={item} type="album"/>
         )}
        </div>
        :(<Carousel data={filteredDataValues} componentRender={(elem)=> <Card data={elem} type="album"/>}/>)}
        </div>)
      }
    </div>
  );
}

export default Section;
