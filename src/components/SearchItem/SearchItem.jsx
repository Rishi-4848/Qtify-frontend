import React from 'react';
import styles from "./SearchItem.module.css"


const SearchItem = ({image,title,artist1,follows,artist2,artist3}) => {
  return (
    <div className={styles.wrapper}>
     <div className={styles.imageContainer}>
      <img src={image} alt={title} className={styles.image}/>
      <div className={styles.artist}>
        <h5>
        {artist1}
        </h5>
        
           <h5>
           , {artist2}
           </h5>
       
        <h5>
       , {artist3}
        
        </h5>
      </div>
     </div>
     <div>
       {follows} follows
     </div>
    </div>
  );
}

export default SearchItem;
