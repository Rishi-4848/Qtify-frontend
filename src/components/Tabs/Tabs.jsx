import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  PropTypes  from 'prop-types';
import styles from "./Tabs.module.css"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children : PropTypes.node,
  index : PropTypes.number.isRequired,
  value : PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({value,handleChange}) {
 
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="All" {...a11yProps(0)} sx={{color : "white"}}/>
          <Tab label="Rock" {...a11yProps(1)}  sx={{color : "white"}}/>
          <Tab label="Pop" {...a11yProps(2)}  sx={{color : "white"}}/>
          <Tab label="Jazz" {...a11yProps(3)}  sx={{color : "white"}}/>
          <Tab label="Blues" {...a11yProps(3)}  sx={{color : "white"}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       
      </CustomTabPanel>
    </Box>
  );
}