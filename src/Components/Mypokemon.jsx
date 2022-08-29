import React, { useEffect, useState } from "react";
import api_details from "../API/Api_details";

const Mypokemon = ({ name }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    api_details.get(name).then(({ data }) => {
      setList(data);
    });
    // eslint-disable-next-line
  }, []);

  const style = `type ${list?.types?.map((item) =>
    item.type.name.concat(" ")
  )}`;

  return (
    <div className={style}>
      <div className="rounded-2xl px-2 py-1 bg-white bg-opacity-40">
        <small className="font-semibold">#{list.id}</small>
      </div>
      <h1 className="capitalize">{list.name}</h1>
      <img
        className="w-52 h-52"
        src={list?.sprites?.front_default}
        alt={list.name}
      />
      <h3>{list?.types?.map((item) => item.type.name.concat(" "))}</h3>
    </div>
  );
};

export default Mypokemon;
