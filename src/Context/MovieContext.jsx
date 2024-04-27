import React, { createContext, useState, useContext } from "react";
const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };
  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies(){
    return useContext(MovieContext)
}