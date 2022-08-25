import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_details from "../API/Api_details";
import  ErrorPage  from "./ErrorPage.JS";

function Aboutpokemon() {
  const { name } = useParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState(!name);

  useEffect(() => {
    api_details
      .get(name)
      .then(({ data }) => {
        setList(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [name]);

  return (
    <>
      {error && <ErrorPage />}

      {!error && (
        <>
          {list.name}
          {list.height}
        </>
      )}
    </>
  );
}

export default Aboutpokemon;
