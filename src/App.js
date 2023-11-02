
import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import { fetchNewAlbums, fetchTopAlbums } from './components/Api/Api';
import Section from './components/Section/Section';



function App() {


  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumsData,setNewAlbumsData] = useState([]);
  

  const generateData= async ()=>{

    try{
     
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);

     const newAlbumsData = await fetchNewAlbums();
     setNewAlbumsData(newAlbumsData);

    // const songsData = await fetchSongs();
    // setSongs(songsData);

    }catch(err){
     console.log(err)
    }
   
  }

  useEffect(()=>{
    generateData();
   
  },[])
  return (
    <div className="App">
    <NavBar/>
    <Hero/>
   
    <div>
    <Section data={topAlbumsData} title="Top Albums"/>
    <Section data={newAlbumsData} title="New Albums"/>
   
    
    
    </div>
    
    </div>
  );
}

export default App;
