import React from "react";
import ScrollToTop from "react-scroll-to-top";
import All from "./AllPokemon";
import { Searchbar } from "./Searchbar";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Home = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        component={
          <div className="ml-1.5">
            <BsFillArrowUpCircleFill color="red" size={25} />
          </div>
        }
      />
      <Searchbar />
      <All />
    </div>
  );
};
