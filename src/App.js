import logo from './logo.svg';
import './App.css';
import React from 'react'
import Modal from 'react-bootstrap/Modal';

import {useEffect,useState} from 'react';
import {Navbar ,Container, Button} from 'react-bootstrap';
import ReactStars from 'react-stars'
import MovieList from './components/MovieList/MovieList';
function App() {
  const [movies,setMovies]=useState([
    {
    title: "Jujutsu Kaisen",
    rating : '4',
    posterUrl: "https://image.jeuxvideo.com/medias-sm/164250/1642504839-6957-artwork.jpg",
    description:"latest anime movie of the legendary franchise, is coming with the screenplay written by Akira Toriyama to this spring. ",
   },
   {
    title: "Detective Conan",
    rating : 5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWNjZjU4NzItMDE3YS00ZDAxLWFkZjUtMjk1ODMzMGQ5NTIwXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    description:"Detective Conan The Bride of Halloween follows the detective protagonist Conan Edogawa as well as the main side characters from the original series.",
   },
   {
    
    title: " That Time I Got Reincarnated as a Slime: The Movie ",
    rating : 3,
    posterUrl: "https://pbs.twimg.com/media/FM41AY4X0AIR4wX?format=jpg&name=medium",
    description:"The story follows Ken Kaneki, he underwent a surgery that transformed him into a half-ghoul.And the rest is just a crazy story",
   },
   {
    title: "Bubble",
    rating : 4,
    posterUrl: "https://fr.web.img3.acsta.net/pictures/22/03/18/16/26/4969240.jpg",
    description:"It is directed by Tetsuro Araki, who is also famous for the smash-hit Attack on Titan, and is produced by a hot anime studio Wit Studio.",
   },
{

    title: "Death Note ",
    rating : 5,
    posterUrl: "https://static.posters.cz/image/750/affiches-et-posters/death-note-collage-i28406.jpg",
    description:"It is directed by Tetsuro Araki, who is also famous for the smash-hit Attack on Titan, and is produced by a hot anime studio Wit Studio.",
   },


    
  {
    title: "Suzume no Tojimari    ",
    rating : 5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjk5YTliNTktOWY0Yi00MzVmLTlmZjQtZmE4ZTFjMzU3NDE1XkEyXkFqcGdeQXVyMTEwMjgyMzIz._V1_.jpg",
    description:"It is set in abandoned places located all over Japan centering on a 17-year-old girl who lives in Kyushu Region.",
   },
   {

   title: "  Inu-Oh",
    rating : 3,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjIyMTQwOTEtMDFkOS00NzU2LWE3YzEtZmFhNTBhYzcxNzY4XkEyXkFqcGdeQXVyMjEzNjU0Mzk@._V1_.jpg",
    description:" Is a musical animated movie which premiered at the 78th Venice International Film Festival in 2021 ahead of a theatrical release in May, 2022.",
   },
   
  {
    title: "One Piece Film Red",
    rating : 4,
    posterUrl: "https://fr.web.img4.acsta.net/pictures/22/06/08/13/18/5161934.jpg",
    description:"It is the 15th title of the One Piece anime films and the 3rd work totally produced by Eiichiro Oda himself, who is the manga artist of the original series. ",
   },
   {
    
    title: "Naruto Shippuden ",
    rating : 5,
    posterUrl: "https://media.electre-ng.com/images/image-id/74f093a26c38189803a68fcf60ff89f9d4e7c8b369465c4a5e447ccccc619412.jpg",
    description:"s a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki",
   },
   
])
 
//model add movie 
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [newMovie, setNewMovie]=useState({
id:Math.round(Math.random),
title:"",
rating :0,
posterUrl:"",
description:"",
})
const handelChange=(e)=> {
setNewMovie({...newMovie,[e.target.name]:e.target.value}  )
}
const handleSave=(e)=>{
  setMovies([...movies,newMovie])
alert ("your movie has been Aded to the list")
handleClose()
  }

// filtre

//declare state
  const [titleFilter, setTitleFilter ] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [filtreMovies, setFiltreMovies ] = useState(movies);



  const handeltitlefilter = (e) => {
    setTitleFilter(e.target.value);
  }
 
  const handelRatingFilter = (newrating) => {
    setRatingFilter(newrating);
}

useEffect(()=>{
  setFiltreMovies(
  movies.filter( (movie)=>{return (movie.title.trim().toLowerCase().includes(titleFilter) && movie.rating >= ratingFilter)}
  ))}
,[movies,titleFilter,ratingFilter])
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"style={{fontFamily :'cursive', color: 'gold',textShadow:'red'}}>
            <img
              alt=""
              SRC="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Orient_Anime_Logo.png/640px-Orient_Anime_Logo.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />AnimeGate
          </Navbar.Brand>
        </Container>
        <Container style={{ marginRight :'10px'}}>
          <input  type="text" 
    onChange={handeltitlefilter}
      placeholder="  Search By name ..." 
      className="searchInput" 
      ></input>
          <ReactStars
             count={5}
             size={28}
             activeColor="#ffd700"
             onChange={handelRatingFilter}
             
             />
          <Button variant="outline-warning" onClick={handleShow}>+ Add New Movier</Button>
        </Container>
      </Navbar>
<MovieList movies={filtreMovies}/>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new Movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <input type ="text" placeholder="title" name="title" onChange={handelChange}></input>
       <br></br> 
        <input type ="text" placeholder="poster" name="posterUrl" onChange={handelChange}></input>
        <br></br>
       <input type ="number" placeholder="Rating" name = "rating" onChange={handelChange}></input>
            <br></br>
       <input type ="text" placeholder="description" name="description" onChange={handelChange}></input>
       <br></br>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>













    </div>
  );
}
export default App;
