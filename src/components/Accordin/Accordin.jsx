import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { fetchFaq } from '../Api/Api';
import styles from "./Accordin.module.css";
import {AiOutlineArrowDown} from "react-icons/ai"

const Accordin = () => {

  const [data,setData] = useState([]);

  const generateFaqData = async ()=>{
    const res = await fetchFaq();
    console.log(res.data)
    setData(res.data)
  }
  
useEffect(()=>{
  generateFaqData();
},[])
  

  return (
    <div className={styles.container}>
        <h1 className={styles.title}> FAQS</h1>
            
             {data.map((elem)=>{
              return(
                <Accordion className={styles.wrapper}>
                  <AccordionSummary
                   expandIcon={<AiOutlineArrowDown style={{color : "#34C94B"}}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={styles.question}
                 
                >
                  <Typography >{elem.question}</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.answer}>
                    <Typography>
                     {elem.answer}
                    </Typography>
                  </AccordionDetails>
                  </Accordion>
              )
             })}

    
    </div>
  );
}

export default Accordin;
