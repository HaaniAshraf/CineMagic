import React, { createContext, useState, useContext, useEffect } from "react";
const MovieContext = createContext();
export function MovieProvider({ children }) {
  const [movies, setMovies] = useState(() => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  // Movie search
  const [searchTerm, setSearchTerm] = useState("");
  const searchedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add movie
  const addMovie = (movie) => {
    const newMovie = {
      ...movie,
      reviews: movie.reviews || [],
      id: new Date().toISOString(),
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  // Update movie
  const updateMovie = (movieId, updatedMovieData) => {
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id === movieId) {
          // Ensure that reviews are not overwritten by including them from the existing movie
          const reviews = updatedMovieData.reviews || movie.reviews;
          return { ...movie, ...updatedMovieData, reviews };
        }
        return movie;
      });
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
      value={{
        movies: searchedMovies,
        setSearchTerm,
        addMovie,
        updateMovie,
        deleteMovie,
        addReview,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
