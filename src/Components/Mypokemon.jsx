import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api_details from "../API/Api_details";
import {GiAxeSword} from 'react-icons/gi';
import {BsFillHeartFill} from 'react-icons/bs';
import {BiMessageSquareDetail} from 'react-icons/bi'

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
      <div className="mt-0.5">
        <Link to={"/pokemon/" + list.name}><button className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2"><BiMessageSquareDetail size={25}/></button></Link>
        <Link to={"/favorites"}><button className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2"><BsFillHeartFill size={25}/></button></Link>
        <Link to={"/war"}><button className="bg-white p-1.5 rounded-md shadow hover:shadow-69xl mx-2"><GiAxeSword size={25}/></button></Link>
      </div>
    </div>
  );
};

export default Mypokemon;
