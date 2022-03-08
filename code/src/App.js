import React from 'react'
import data from './data.json'

// import {Album} from './components/Album'
// import {Artist} from './compontents/Artist'

import Album from './components/Album'
console.log(data)

export const App = () => {
  return (
    <section>
      <Album name = {data.albums.items[0].name}
      description = "This is a test"
      artist = {data.albums.items[0].artists[0].name}
      // img = src{=data.albums.items[0].images[0].url}
      />
      {/* <Artist/> */}
      {/* <Album title="Testy Mc Testyface igen !"
      description = "massor med viktig text"
      name = {data.albums.items[1].name}/>/> */}
      
    </section>
    
   
  )
}

