
import './App.css';
import {Routes, Route} from 'react-router-dom';
import React,{useState} from 'react';
import Home from './Components/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import NavBar  from './Components/NavBar/NavBar';
import Admin from './Components/Admin';
import PrivateRoute from './Components/PrivateRoute';
import { Description } from './Components/Description';
import DescriptionPage from './Components/DescriptionPage/DescriptionPage';



function App() {
 

  const [isAuth, setIsAuth] = useState(false)
  const [filterByTitle, setFilterByTitle] = useState("")
  const [rate, setRate] = useState(false)
  const [Movies, setMovies]=useState([
      

    {
        title:"DON'T LOOK UP",
        type:"COMEDY",
        posterUrl:" https://news.mrraaja.com/wp-content/uploads/2021/12/21696/dont-look-up-review-a-satirical-drama-that-works-in-parts.jpg ",
        rating: 5,
        
        
        },
      
       {
         title:"THE IRISHMAN",
         type:"ACTION",
         posterUrl:"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
         rating:3,
       },
      
       {
         title:"ESCOBAR",
         type:"DRAMA",
         posterUrl:" https://m.media-amazon.com/images/M/MV5BMTAwODJhN2YtMzUwMy00ZjI1LTllNGYtNTA3YTk5MTEyY2M2XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg ",
         rating:4,
       },
      
       
       {
         title:" THE LIGHT HOUSE ",
         type:"HORROR",
         posterUrl:" https://movieposters2.com/images/1733854-b.jpg ",
         rating:0,
       },
      
       {
        title:"BLACK WIDOW",
        type:"ACTION",
        posterUrl:" https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0%2C0%2C540%2C810 ",
        rating:1,
       },
      
       {
         title:"THE WOLF OF WALLSTREET",
         type:"DRAMA",
         posterUrl:" https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg  ",
         rating:5,
       }]);
    
       const login = () => setIsAuth(true)
       const logout = () => setIsAuth(false) 


  return (
    <div className="App">
      <NavBar isAuth={isAuth} login={login} logout={logout}  />
      
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/MovieList" element={<MovieList Movies={Movies} />} />
<Route path='/MovieList/:title' element={<DescriptionPage Description={Description} />} />
<Route path='/admin' element={<PrivateRoute component={Admin} isAuth={isAuth} />} />

  </Routes>     


    </div>
  );
}

export default App;
