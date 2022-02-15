import react from "react";
import './Home.css';

const Home=() =>{
    return(
<>

<div className="flexRegister">
 <h6>Don't have an account? Register:</h6>
 <div className="flexhome">
 <input className="EmailInput" type="email" placeholder="EMAIL ADDRESS"/>
 <button className="verificationbutton"> SEND VERIFICATION CODE </button>
 </div>
 </div>


   <h5>NOMINATIONS VOTING PROCESS </h5> 
   <p className="introOscars"> Regular awards are presented for outstanding individual or collective film achievements in a wide variety of categories. Most categories are <br/> nominated by the members of the corresponding branch–actors nominate actors, film editors nominate film editors, etc. However, certain <br/> categories such as International Feature Film and Animated Feature Film have special voting rules which can be viewed at our Rules & Eligibility <br/> page.<br/>

All voting members are eligible to select the Best Picture nominees.<br/>

Nominations voting is conducted using both paper and online ballots, with online voting being the preferred choice for the overwhelming <br/> majority of Academy members.  Voting for nominations begins in late December, and all votes are tabulated by PricewaterhouseCoopers.<br/>

Nomination results are then announced at a live televised press conference in mid-January at the Academy’s Samuel Goldwyn Theater <br/> in Beverly Hills.<br/> Oscar nominees for each category are determined by members of the relevant Academy branch or committee. </p>
</>


    )
}

export default Home;