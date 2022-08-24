import React from "react";
import { useParams } from 'react-router-dom'


export const Aboutpokemon = (about ) => {
  const params = useParams();
  const {name} = params
  // console.warn(name) 

  return (
    <div className="">
   name : { name}
      <p className="text-white">
        <b >height</b> is <b>{about.heightpok * 10} cm</b>
      </p>
      <p>
        <b>weight</b> is <b>{about.weightpok * 0.1} Kg</b>
      </p>

      <h3>Statistic</h3>

      <p>
        <b>
          {about.pokstat1} : {about.posbs1}
        </b>
      </p>
      <p>
        <b>
          {about.pokstat2} : {about.posbs2}
        </b>
      </p>

      <p>
        <b>
          {about.pokstat3} : {about.posbs3}
        </b>
      </p>

      <p>
        <b>
          {about.pokstat4} : {about.posbs4}
        </b>
      </p>

      <p>
        <b>
          {about.pokstat5} : {about.posbs5}
        </b>
      </p>

      <p>
        <b>
          {about.pokstat6} : {about.posbs6}
        </b>
      </p>
    </div>
  );
};
