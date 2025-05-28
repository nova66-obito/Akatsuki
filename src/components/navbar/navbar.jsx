import React, { useState } from "react";
import './nav.css';
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';
export default function Nav(item){
    const [act,setAct] = useState(false);
    return(
        <>
          <header>
              <nav className="nav-cover full center">
                 <div className="n-box n-box1 center">
                     <div className="n-content">
                         <img src={item.Logo} alt="" />
                     </div>
                       <div className="n-content ">
                          <h2>akatsuki</h2>
                     </div>
                 </div>
                 {/* this for the navbar */}
                 <div className={`n-box n-box2 center`}>
                     <div className={`n-gater center  ${act ? "n-act" : null}`}>
                         <Link to="/">home</Link>
                         <Link to="members">members</Link>
                         <Link to="lore">lore</Link>
                         <Link to="Gallery">gallery</Link>
                         <Link to="contact">contact</Link>
                     </div>
                 </div>
                 {/* this for the sm-device nav */}
                 <div className="n-box3">
                      <div onClick={()=>{setAct(!act)}} className="cover-bar col-center">
                           {act ? <AiOutlineClose  className={"icon-n"}/> : <VscThreeBars className="icon-n"/>}
                      </div>
                 </div>
              </nav>
          </header>
        </>
    )
}