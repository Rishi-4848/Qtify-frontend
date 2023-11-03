
import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from './components/Api/Api';
import Section from './components/Section/Section';






function App() {


  const [data,setData] = useState([]);
  const [songsData,setSongsData] = useState([]);
  const [filteredDataValues,setFilteredDataValues] = useState([]);
  const [toggle,setToggle] = useState(false);
  const [value,setValue] = useState(0);


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
      console.log(data);
      setData(data);

     const newAlbumsData = await fetchNewAlbums();
     setData(newAlbumsData);

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
    <NavBar/>
    <Hero/>
   
    <div>
    <Section data={data} title="Top Albums" filteredDataValues={data}/>
    <Section data={data} title="New Albums" filteredDataValues={data}/>
    <Section data={songsData} title="Songs" type="song" value={value} filteredData={filteredData} filteredDataValues={filteredDataValues} handleChange={handleChange} handleToggle={handleToggle}/>
   
    
    
    </div>
    
    </div>
  );
}

export default App;
