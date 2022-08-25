import React, { useEffect, useState } from "react";
import api_details from "../API/Api_details";

const Mypokemon = ({ name }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api_details.get(name).then(({ data }) => {
      setList(data);
    });
  }, []);

  const style = `thumb-container ${list?.types?.map((item) =>
    item.type.name.concat(" ")
  )}`;

  return (
    <div className={style}>
      <div className="number">
        <small>#{list.id}</small>
      </div>
      <h3>{list.name}</h3>
      {list?.types?.map((item) => item.type.name.concat(" "))}
      <img src={list?.sprites?.front_default} alt={list.name} width="70%" />
    </div>
  );
};

export default Mypokemon;
