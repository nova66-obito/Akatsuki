import React, { useEffect, useState } from "react";
import "../css/gallery.css"
export default function Search() {
    const api_key = "mRDYIBwxYx0EFNW_fYUjnyqbOobmcDroyqCa3H9hKFI";
    const per_page = 30;
    const [val,setVal] = useState([]) 
    const [count,setCount] = useState(1);
    const [totalpage , setTotalpage] = useState(0);
    const api_search = `https://api.unsplash.com/search/photos?page=${count}&per_page=${per_page}&query=`;
   
    const call = () =>{
       let data = fetch(api_search + "anime" + "&client_id=" + api_key);
       let dataval = data.then((value) => value.json());
       dataval.then((item) => setVal(item.results))
    }

    useEffect(() => {
        call();
    }, [count]); 
    console.log(val)
    return (
        <>
            <section>
                <main className="full gallery-page col-center">
                   <div className="g-cover center">
                       {val.map((items,I)=>{
                        return(
                            <>
                              <div className="g-box">
                                 <img src={items.urls.small} alt="" />
                              </div>
                            </>
                        )
                    })}
                   </div>
                   <div className="btn-body center">
                      {count > 1 && (<button onClick={() => setCount(count-1)}>previous</button>) }
                      {count > totalpage && (<button onClick={() => setCount(count+1)}>next page</button>)}
                   </div>
                </main>
            </section>
        </>
    )
}