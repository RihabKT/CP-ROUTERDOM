import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './MovieCard.css';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';



function MovieCard({ Movie }) {

  return (

    <Link className='Link' to={`/MovieList/${Movie.title}`}>
      <article className="MovieCard">



        <Card  style={{ border:"3px solid rgb(186, 158, 94)", width: "15rem", height: "32rem", marginRight: "30px", marginTop:"30px", backgroundColor: " rgb(238, 221, 183) ; ", borderRadius: "8px"}}>
          <Card.Header style={{ fontWeight: "bold", fontSize: "15px", color: " rgb(186, 158, 94)  ",textAlign:"center" }}>{Movie.type}</Card.Header>
          <Image className="poster" src={Movie.posterUrl}
            style={{ borderRadius: "5%", width: "230px",height:"400px", textAlign: "center" }} />
          <Card.Body>
            <Card.Title style={{ fontSize: "18px", color: " rgb(186, 158, 94)  ", fontWeight: "bolder",fontFamily:"monospace",textAlign:"center"}}>{Movie.title}</Card.Title>
            <Card.Text style={{ fontSize: "12px", fontWeight: "bolder", color: " rgb(73, 66, 66)  ", textAlign: "center" }}>
              {Movie.rating}
              <Rating rate={Movie.rating} />
             
              {/* <p>{Movie.trailer}</p>
         <p>{Movie.summary}</p> */}


            </Card.Text>



          </Card.Body>
        </Card>



      </article>
    </Link>
  )
}




export default MovieCard;