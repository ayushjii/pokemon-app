import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_search from "../API/apisearch";
import { FcSearch } from "react-icons/fc";
import { MdFolderSpecial } from "react-icons/md";

export const Searchbar = () => {
  const [search, setsearch] = useState([]);
  const [value, setvalue] = useState("");
  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    Navigate(`/pokemon/${value}`);
  }

  useEffect(() => {
    API_search.get().then(({ data }) => {
      const pokemondata = data.results.map((all) => ({
        ...all,
        label: all.name,
      }));
      setsearch(pokemondata);
    });
  }, []);

  return (
    <>
      <div className="text-center m-0 text-8xl">
        <h1 className="text-white p-6 backdrop-blur-sm">Pokemon App</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="my-12 gap-8 flex justify-center text-center"
      >
        <Link
          className="shadow hover:shadow-99xl capitalize flex bg-white text-4xl rounded-xl px-0.5 items-center"
          to={"/favorites"}
        >
          favorites
          <MdFolderSpecial className="bg-white" size={55} />
        </Link>
        <Autocomplete
          options={search}
          sx={{
            width: "24rem",
          }}
          onChange={(e, newEvent) => setvalue(newEvent.name)}
          renderInput={(props) => (
            <TextField
              className="hover:shadow-99xl shadow"
              placeholder="Pokemon Name"
              sx={{
                backgroundColor: "white",
                padding: "0.8rem 1rem",
                borderRadius: "96px",
              }}
              variant="standard"
              type="search"
              {...props}
            />
          )}
        />

        <button type="submit" className="shadow hover:shadow-99xl">
          <FcSearch className="bg-white rounded-lg" size={55} />
        </button>
      </form>
    </>
  );
};
