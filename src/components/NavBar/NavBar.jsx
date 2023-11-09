import React from 'react';
import styles from "./NavBar.module.css"
import Button from '../Button/Button';
import Search from '../Search/Search';
import Logo from '../Images/Logo/Logo';


const NavBar = ({allData}) => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <Search allData={allData} placeholder="Search a album of your choice"/>
      <Button children="Give FeedBack"/>
    </nav>
  );
}

export default NavBar;
