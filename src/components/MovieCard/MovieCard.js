import React from 'react'
import {Card , Button} from "react-bootstrap"
import './MovieCard.css'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {
  return (
<div >
        <Card  style={{ width: '360px', height :'700px', backgroundColor:"black",borderRadius:"5px"  }}>
        <Card.Img variant="top"   src={movie.posterUrl} height = "370" />
        <Card.Body>
        <Card.Title style={{color:"gold" , fontFamily:"Georgia"}}>{movie.title}</Card.Title>
        <hr style ={{color:"white"}}></hr>
        <Card.Text style={{color :"white"}}> {movie.description}
        </Card.Text>
        <h2>
            <ReactStars 
            value ={movie.rating}
             className="starcard"
             size={35}
             color1 ={"grey"}
             color2 ={"#ffd700"}
             count={5}
             edit ={false}
             />
            </h2>
        </Card.Body>
        <Card.Footer> 
       
        </Card.Footer>
        </Card>
        </div>
  )
}

export default MovieCard