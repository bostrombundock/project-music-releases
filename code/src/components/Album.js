import React from "react";
//  export const Album = () => {
  //  return (
    //      <section className='Container'>
    //      <div>
//        <h1>Testy Mc Testyface!</h1>
//        <p>This is a test</p>
//        <p>Testy testy test</p>
//        <img src="https://www.placecage.com/200/300" alt="Nicolas Cage"/>
//      </div>
//   </section>
//  )
//  };


const Album = (props) => {
  console.log(props)
  return (
         <section className='Container'>
         <div>
           <h1>{props.name}</h1>
           <p>{props.description}</p>
           <p>{props.artist}</p>
          <img src="https://www.placecage.com/200/300" alt="Nicolas Cage"/>
          <img src="{props.img}" alt="Nicolas Cage"/>
         </div>
       </section>
     )
     };
    
     export default Album;
    
