import React, { useState } from 'react';
import styles from './Search.module.css';
import {ReactComponent as SearchIcon} from '../../assests/Search icon.svg';
import SearchItem from '../SearchItem/SearchItem';

const Search = ({placeholder,allData}) => {

  const [val,setVal] = useState("");
  const [filteredData,setFilteredData] = useState([]);

  const onSubmit = (e)=>{
    e.preventDefault();
  }

 const changeHandler = (e) =>{
  console.log(e.target.value)
  setVal(e.target.value)
  const res = allData.filter((item)=> item.title.includes(e.target.value))
  setFilteredData(res)
 }

  return (
    <div className={styles.searchContainer}>
      <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder={placeholder} required value={val} onChange={changeHandler}/>
        <div>
          <button className={styles.searchButton} type='submit'>
            <SearchIcon/>
          </button>
        </div>
      </form>
      {val && filteredData.length!==0?<div className={styles.dropdown}>
        {filteredData.map((item)=>
        
             <SearchItem image={item.image} title={item.title} follows={item.follows} artist1={item.songs[0].artists[0]} artist2={item.songs[0].artists[1]} artist3={item.songs[0].artists[2]}/>
        )}
     
      </div> : null}
    </div>
  );
}

export default Search;
