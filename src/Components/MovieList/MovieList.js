import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';
import Header from "../Header/Header";
import AddMovie from "../AddMovie/AddMovie";






function MovieList() {

  const [searchRate, setSearchRate] = useState(0);
  const [filterByTitle, setFilterByTitle] = useState("");

  const [Movies, setMovies] = useState([


    {
      title: "DON'T LOOK UP",
      type: "COMEDY",
      posterUrl: " https://news.mrraaja.com/wp-content/uploads/2021/12/21696/dont-look-up-review-a-satirical-drama-that-works-in-parts.jpg ",
      rating: 5,
      
    },

    {
      title: "THE IRISHMAN",
      type: "ACTION",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
      rating: 3,
     
    },

    {
      title: "ESCOBAR",
      type: "DRAMA",
      posterUrl: " https://m.media-amazon.com/images/M/MV5BMTAwODJhN2YtMzUwMy00ZjI1LTllNGYtNTA3YTk5MTEyY2M2XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg ",
      rating: 4,
     
    },


    {
      title: "THE LIGHT HOUSE",
      type: "HORROR",
      posterUrl: " https://movieposters2.com/images/1733854-b.jpg ",
      rating: 2,
     
    },

    {
      title: "BLACK WIDOW",
      type: "ACTION",
      posterUrl: " https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810 ",
      rating: 1,
     
    },

    {
      title: "THE WOLF OF WALLSTREET",
      type: "DRAMA",
      posterUrl: " https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg  ",
      rating: 5,
      
    }]);



  const addMovieClick = (objNew) => {
    setMovies([...Movies, objNew])
  }


  return (
    <>
      <Header setFilterByTitle={setFilterByTitle} setSearchRate={setSearchRate} searchRate={searchRate} />
      <AddMovie addMovieClick={addMovieClick} />

      <div className="MovieList">
        {Movies.filter(el => el.title.toLowerCase().includes(filterByTitle.toLowerCase().trim()) && el.rating >= searchRate).map((el, i) => <MovieCard Movie={el} key={i} />)}
        {/* {Movies.filter(el => el.title.toLowerCase().includes(filterByTitle.toLowerCase().trim()) && el.rating >= rate)}  */}
        {/* {Movies.filter (el=> el.title.toLowerCase().includes(filterByTitle.toLowerCase().trim()))} */}
      </div>


    </>
  )
}

export default MovieList;
