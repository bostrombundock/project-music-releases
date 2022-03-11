import React from 'react'

// import {Album} from './components/Album'
// import {Artist} from './compontents/Artist'

import Album from './components/Album'

console.log('data',data)


export const App = () => {
  return (
    <section>
      {
        data.albums.items.map((items) => {
          // console.log('items',items)
          return <Album key={items.id} albumDetails={items}/>
        })
      }
      
    </section>
    
   
  )
}

