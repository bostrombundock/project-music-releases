import React from "react";
import Artist from "./Artist";
import Heart from '../icons/heart.svg'
import Dots from '../icons/dots.svg'
import Play from '../icons/play.svg'




const Album = (props) => {
  console.log('props', props)

  return (
    <section className='Container'>
      <div className="album-card">
        <div>
          <div className="img-container">
            <img src={props.albumDetails.images[1].url} alt="Album cover" />
            <div className="overlay">
            <img src={Heart} className="icons" alt="heart icon" />
            <img src={Play} className="play-icon" alt="play icon" />
            <img src={Dots} className="icons" alt="dots icon" />
               </div>
          </div>
          <a href={props.albumDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer" >
          <h1>{props.albumDetails.name}</h1>
          </a>
          {
            props.albumDetails.artists.map((items) => {
            
              return <Artist key={items.id} artistDetails={items} />
            })
          }
         
        </div>


      </div>
    </section>



  )
};

export default Album;
