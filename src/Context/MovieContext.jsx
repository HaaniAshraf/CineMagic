import React, { createContext, useState, useContext, useEffect } from "react";
const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState(() => {
    try {
      const localData = localStorage.getItem("movies");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error reading from localStorage", error);
      return [];
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("movies", JSON.stringify(movies));
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  }, [movies]);
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
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
