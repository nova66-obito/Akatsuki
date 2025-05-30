import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import '../css/contact.css'
export default function Contact(){
       const [name, setName] = useState("");
       const [phone , setPhone] = useState("")
       const [email, setEmail] = useState("");
       const [message,setMessage] = useState("");
       const [nameerrors, setnameErrors] = useState('');
       const [phoneerrors, setphoneErrors] = useState('');
       const [messageerrors, setMessageErrors] = useState('');
       const [emailerrors, setEmailErrors] = useState('');
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
        if (phone.trim() === "") {
            setphoneErrors("phone no is required...!");
            val=false;
        }
         if (email.trim() === "") {
            setEmailErrors("Email id is required...!");
            val=false;
        }

        if(val){
            console.log("details:",{name,email,phone,message})
            setsubmit(!submit);
            setName("");
            setMessage("");
        }

       }
    return(
        <>
           <div className="contact contact-page full col-center">
                     <h1>contact</h1>
                      {submit ? ( <div className="suc-cover center"><div className="f-after col-center full"><h3>submit successfully</h3><p>😊</p></div></div> ):
                       <form action="" onSubmit={hsubmit}>
                         {/* name */}
                         <div className="put">
                             <input type="text" placeholder="your name..."
                             value={name}
                             onChange={(e) => setName(e.target.value)}
                             />
                             {nameerrors && <p>{nameerrors}</p>}
                         </div>
                         {/* email */}
                         <div className="put">
                             <input type="email" placeholder="your Email id..."
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             />
                             {phoneerrors && <p>{phoneerrors}</p>}
                         </div>
                         {/* phone */}
                         <div className="put">
                             <input type="number" placeholder="your phone no..."
                             value={phone}
                             onChange={(e) => setPhone(e.target.value)}
                             />
                             {emailerrors && <p>{emailerrors}</p>}
                         </div>
                         {/* message */}
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
                     <div className="s-media c-s-meida col-center">
                         <b>Follow us</b>
                         <div className="s-media center s-cover">
                             <a href="https://www.facebook.com/" target="_blank"><IoLogoFacebook className="s-i"/></a>
                         <a href="https://www.instagram.com/" target="_blank"><IoLogoInstagram className="s-i"/></a>
                         <a href="https://x.com/"target="_blank"><FaSquareXTwitter className="s-i"/></a>
                         <a href="https://www.youtube.com/"target="_blank"><IoLogoYoutube className="s-i"/></a>
                         </div>
                     </div>
                  </div> 
        </>
    )
}