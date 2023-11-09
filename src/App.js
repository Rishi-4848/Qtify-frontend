
import { useEffect, useState } from 'react';
import styles from './App.css';

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import { fetchFaq, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './components/Api/Api';
import Section from './components/Section/Section';
import Accordin from './components/Accordin/Accordin';








function App() {


  const [topAlbumsdata,setTopAlbumsData] = useState([]);
  const [newAlbumsData,setNewAlbumsData] = useState([]);
  const [songsData,setSongsData] = useState([]);
  const [filteredDataValues,setFilteredDataValues] = useState([]);
  const [toggle,setToggle] = useState(false);
  const [value,setValue] = useState(0);
  // const [allData,setAllData] = useState([]);




  //to handle toggle
  const handleToggle = ()=>{
    setToggle(!toggle)
  }

  //to handle change in value
  const handleChange = (event,newValue)=>{
    setValue(newValue)
  }


  // generating all songs data
const generateAllSongsData = async()=>{

  try{
    const res = await fetchSongs();
    setSongsData(res)
    setFilteredDataValues(res)
  }catch(err){
    console.log(err)
  }
 
}

// filtering songs based on genre

const generateSongsData = (value)=>{
  let key ;
  if(value===0){
    filteredData(songsData)
    return;
  }
  else if(value ===1){
    key = "rock";
  }else if(value ===2){
   key = "pop"
  }
  else if(value ===3){
    key = "jazz"
  }
  else if(value ===4){
    key="blues"
  }

  const res = songsData.filter(item =>item.genre.key ===key)
  console.log( key ,res)
  filteredData(res)
}


useEffect(()=>{
  generateSongsData(value);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[value])
  

  const generateData= async ()=>{

    try{
     
      const data = await fetchTopAlbums();
     console.log(data,"data")
      setTopAlbumsData(data);

     const newAlbumsData = await fetchNewAlbums();
     console.log(newAlbumsData,"newAlbumsData")
     setNewAlbumsData(newAlbumsData);
      

    //  const completeData = [].concat(newAlbumsData,data)
    //  setAllData(completeData)
   
    //  console.log(allData,"all data")
  

    }catch(err){
     console.log(err)
    }
   
  }

  const filteredData = (val)=>{
    setFilteredDataValues(val)
  }

  

  
  useEffect(()=>{
    generateData();
    generateAllSongsData();
   
  },[])
  return (
    <div className="App">
    <NavBar allData={[...topAlbumsdata,...newAlbumsData]}/>
    <Hero/>
   
    <div className={styles.sectionWrapper}>
    <Section data={topAlbumsdata} title="Top Albums" filteredDataValues={topAlbumsdata}/>
    <Section data={newAlbumsData} title="New Albums" filteredDataValues={newAlbumsData}/>
    <Section data={songsData} title="Songs" type="song" value={value} filteredData={filteredData} filteredDataValues={filteredDataValues} handleChange={handleChange} handleToggle={handleToggle}/>
   
    
    </div>
    <Accordin/>
    
    </div>
  );
}

export default App;
