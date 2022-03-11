import React from "react";

export const Artist = (props) => {
return(
    <a href={props.artistDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer" >
    <span>{props.artistDetails.name} </span>
    </a>
)

 };

 export default Artist;

