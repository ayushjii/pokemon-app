import React from 'react'

export const Pokemon = (about) => {
  return (
    <>
    <h1>name : {about.name}</h1>
       <p className="text-white">
         <b >height</b> is <b>{about.height * 10} cm</b>
       </p>
       <p>
         <b>weight</b> is <b>{about.weight * 0.1} Kg</b>
       </p>
       <h3>Statistic</h3>
 
       <p>
         <b>
           {about.stat1} : {about.bs1}
         </b>
       </p>
       <p>
         <b>
           {about.stat2} : {about.bs2}
         </b>
       </p>
 
       <p>
         <b>
           {about.stat3} : {about.bs3}
         </b>
       </p>
 
       <p>
         <b>
           {about.stat4} : {about.bs4}
         </b>
       </p>
 
       <p>
         <b>
           {about.stat5} : {about.bs5}
         </b>
       </p>
 
       <p>
         <b>
           {about.stat6} : {about.bs6}
         </b>
       </p>
       </>
  )
}
