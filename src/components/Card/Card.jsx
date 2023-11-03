import React from 'react';
import styles from "./Card.module.css";
import {Chip,Tooltip } from "@mui/material"


const Card = ({data,type}) => {
  const getCard = (type) =>{
    switch(type){
      case "album" :{
        const{image,follows,title,songs} = data ;

        return(
          <Tooltip title={`${title}songs`} placement='top' arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt='album'/>
              <div className={styles.banner}>
               <Chip className={styles.chip} label={`${follows} Follows`} size='small'/>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
          </Tooltip>
        )
      }

      case "song" :{
        const {image,likes,title} = data;
        return(
          <div className={styles.wrapper}>
            <div className={styles.card}>
             <img src={image} alt='song' loading='lazy'/>
             <div className={styles.banner}>
              <div className={styles.pill}>
              <p>{likes}Likes</p>
              </div>
             </div>
            </div>
            <div className={styles.titleWrapper}>
              {title}
            </div>
          </div>
        )
      }
      default:
        return <></>;
    }
  }
  return getCard(type);
}

export default Card;
