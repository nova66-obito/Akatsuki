import React, { useState } from "react";
import './contact.css'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
export default function Contact(){
   const [name, setName] = useState("");
   const [message,setMessage] = useState("");
   const [nameerrors, setnameErrors] = useState('');
   const [messageerrors, setMessageErrors] = useState('');
   const [submit, setsubmit] = useState(false);
   
   const hsubmit = (e) =>{
    e.preventDefault();
    let val = true;
    setMessageErrors("")
    setnameErrors("")
    
    if (name.trim() === "") {
        setnameErrors("Name is required...!");
        val=false;
    }
    if (message.trim() === "") {
        setMessageErrors("Message is required...!");
        val=false;
    }
    if(val){
        console.log("details:",{name,message})
        setsubmit(!submit);
        setName("");
        setMessage("");
    }
   }

    return(
        <>
         <div className="contact full col-center">
            <h1>contact</h1>
             {submit ? <div className="f-after col-center full"><h3>submit successfully</h3><p>😊</p></div> :
              <form action="" onSubmit={hsubmit}>
                <div className="put">
                    <input type="text" placeholder="your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    {nameerrors && <p>{nameerrors}</p>}
                </div>
                <div className="put">
                    <textarea name="msg" id="msg" placeholder="your comment..." rows={5}
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    ></textarea>
                    {messageerrors && <p>{messageerrors}</p>}
                </div>
                <button  type="submit">
                    {submit ? "Sending..." : "Send"}
                </button>
            </form> 
            }
            {/* this for the icon */}
            <div className="s-media center">
                <a href="https://www.facebook.com/" target="_blank"><IoLogoFacebook className="s-i"/></a>
                <a href="https://www.instagram.com/" target="_blank"><IoLogoInstagram className="s-i"/></a>
                <a href="https://x.com/"target="_blank"><FaSquareXTwitter className="s-i"/></a>
                <a href="https://www.youtube.com/"target="_blank"><IoLogoYoutube className="s-i"/></a>
            </div>
         </div> 
        </>
    )
}