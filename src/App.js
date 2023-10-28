
import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import { fetchTopAlbums } from './components/Api/Api';
import Card from './components/Card/Card';

function App() {


  const [topAlbumsData,setTopAlbumsData] = useState([]);

  const generateData= async ()=>{

    try{
     
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);

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
    {topAlbumsData.map((item)=>{
      return(
        <Card key={item.id} data={item} type="album"/>
      )
    })}
    </div>
  );
}

export default App;
