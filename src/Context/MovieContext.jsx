import React, { createContext, useState, useContext } from "react";
const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const addMovie = (movie) => {
    const newMovie = {
      ...movie,
      id: new Date().toISOString(),
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };
  const deleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };
  return (
    <MovieContext.Provider value={{ movies, addMovie,deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
