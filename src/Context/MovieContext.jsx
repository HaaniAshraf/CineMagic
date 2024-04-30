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

  // Add movie
  const addMovie = (movie) => {
    const newMovie = {
      ...movie,
      id: new Date().toISOString(),
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  // Update movie
  const updateMovie = (movieId, updatedMovieData) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, ...updatedMovieData } : movie
      );
    });
  };

  // Delete movie
  const deleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
  };

  // Add review
  const addReview = (movieId, rating, review) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.map((movie) => {
        if (movie.id === movieId) {
          const newReview = { rating, review, date: new Date().toISOString() };
          const updatedReviews = [...movie.reviews, newReview];
          return { ...movie, reviews: updatedReviews };
        }
        return movie;
      });
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, updateMovie, deleteMovie, addReview }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
