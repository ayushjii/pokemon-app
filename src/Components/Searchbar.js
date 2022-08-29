import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_search from "../API/apisearch";
import { FcSearch } from "react-icons/fc";

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
      <div className="text-center mt-8 text-8xl text-black">
        <h1>Pokemon App</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="my-12 gap-8 flex justify-center text-center "
      >
        <Autocomplete
          options={search}
          sx={{
            width: "24rem",
          
          }}
          
          onChange={(e, newEvent) => setvalue(newEvent.name)}
          renderInput={(props) => (
            <TextField
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

        <button type="submit">
          <FcSearch className="bg-white rounded-lg" size={55} />
        </button>
      </form>
    </>
  );
};
