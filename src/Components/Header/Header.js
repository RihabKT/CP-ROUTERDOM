import React, {useState} from "react";
import './Header.css';
import Rating from "../Rating/Rating";
import Filter from "../Filter/Filter";

function Header({setFilterByTitle, setSearchRate, searchRate} ){

    

    
    return(
<header>
        <div className='flexNew'>
        <Rating rate={searchRate}  setSearchRate={setSearchRate}  />
        </div>
        <Filter   setFilterByTitle={setFilterByTitle}/>
        
      </header>
    )
}

export default Header;