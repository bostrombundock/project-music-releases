import React from "react";


const Album = (props) => {
  console.log('props',props)

  return (
         <section className='Container'>
           <div className="album-card">
         <div>
           <div className="img-container">
          <img src={props.albumDetails.images[1].url} alt="Album cover"/>
           </div>
           <h1>{props.albumDetails.name}</h1>
           <p>{props.albumDetails.artists[0].name}</p>
         <a href="{props.albumDetails.ex}">link to album</a>
        </div>


         </div>
       </section>
     )
     };
    
     export default Album;
    