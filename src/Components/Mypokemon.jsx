import React, { useState } from "react";
// import { Aboutpokemon } from "./Aboutpokemon";
import {Link} from 'react-router-dom';
// import Pokemon from "./Pokemon";

export const Mypokemon = (prop) => {
  const style = `thumb-container ${prop.type}`;
  const [show, setshow] = useState(false);
  return (<>
    <Link to={`/pokemon/${prop.name}`} >
    <div className={style} onClick={() => setshow(!show)}>
      <div className="number" >
        <small>#0{prop.id}</small>
      </div>
      <img src={prop.image} alt={prop.name} />
        <h3>{prop.name.toUpperCase()}</h3>
        <small>Type : {prop.type}</small>
      </div>
    </Link>
    </>
  );
};
