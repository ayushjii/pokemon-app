import React from "react";
import { Link } from "react-router-dom";
import Players from "./Players";
import War from "./War";
import { TiArrowBack } from "react-icons/ti";

export const Battle = () => {
  return (
    <>
      <Link to={"/"}>
        <button className="flex bg-white s m-3 p-4 rounded-lg  text-red-700">
          <TiArrowBack size={20} /> Back
        </button>
      </Link>
      <Players />
      <War />
    </>
  );
};
