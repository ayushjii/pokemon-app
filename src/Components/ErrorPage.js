import React from "react";
import { Link } from "react-router-dom";
import Error from "../images/Error.svg";

export const ErrorPage = () => {
  return (
    <div>
      <section>
        <div class="bg-black text-white">
          <div class="flex h-screen">
            <div class="m-auto text-center">
              <div>
                <img
                  src={Error}
                  className="bg-white rounded-2xl bg-opacity-40"
                  alt="Loading..."
                />
              </div>
              <p class="text-sm md:text-base text-cyan-300 p-2 mb-4">
                The stuff you were looking for doesn't exist
              </p>
              <Link
                to={"/"}
                class="bg-transparent hover:bg-cyan-300 text-cyan-300 hover:text-black hover:font-semibold rounded shadow hover:shadow-lg py-2 px-4 border border-cyan-300 hover:border-transparent"
              >
                Retry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
