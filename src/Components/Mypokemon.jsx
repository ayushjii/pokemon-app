import React, { useState } from "react";
import { Aboutpokemon } from "./Aboutpokemon";

export const Mypokemon = (prop) => {
  const style = `thumb-container ${prop.type}`;
  const [show, setshow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#0{prop.id}</small>
      </div>
      <img src={prop.image} alt={prop.name} />
      <div className="detail-wrapper">
        <h3>{prop.name.toUpperCase()}</h3>
        <small>Type : {prop.type}</small>
        <button className="pokeinfo" onClick={() => setshow(!show)}>
          {show === true ? "less......" : "more......"}
        </button>
        {show === true ? (
          <Aboutpokemon
            weightpok={prop.weight}
            heightpok={prop.height}
            pokstat1={prop.stat1}
            pokstat2={prop.stat2}
            pokstat3={prop.stat3}
            pokstat4={prop.stat4}
            pokstat5={prop.stat5}
            pokstat6={prop.stat6}
            posbs1={prop.bs1}
            posbs2={prop.bs2}
            posbs3={prop.bs3}
            posbs4={prop.bs4}
            posbs5={prop.bs5}
            posbs6={prop.bs6}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
