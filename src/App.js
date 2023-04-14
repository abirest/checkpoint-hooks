
import React, { useState } from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/I/71JxA6I+sgL._AC_SY300_SX300_.jpg',
      rating: 9.3,
    },
    {
      id: 2,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 9.2,
    },
    {
      id: 3,
      title: 'Papillon',
      description: 'The story of Henri Charrière who was falsely imprisoned in 1933 in the notorious Devil Island penal colony.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Papillon_2018_poster.png',
      rating: 7.2,
    },
   
    {
      id: 4,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity is survival.',
      posterURL: 'https://edu.inaf.it/wp-content/uploads/2021/02/interstellar-poster.jpg',
      rating: 8.6,
    },
    {
      id: 5,
      title: 'Scream',
      description: 'A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.',
      posterURL: 'https://resizing.flixster.com/KetwdTOMrmiHQPf3tcL8cLYKvG4=/206x305/v2/https://flxt.tmsimg.com/assets/p18852_p_v10_al.jpg',
      rating: 4,
    },
    {
      id: 6,
      title: 'Bullet Train',
      description: 'It is an American action comedy film starring Brad Pitt as an assassin who must battle fellow killers while riding a bullet train.',
      posterURL: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM',
      rating: 7.3,
    },
    
    {
      id: 7,
      title: 'Me Before You',
      description: 'Louisa Clark  moves from one job to the next to help her family. Her cheerful attitude is put to the test when she becomes a caregiver for Will Traynor.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMDk2NWMxNWQtMWIxMS00NjQ0LThkZGEtNDBlZDc3M2JlNjE0XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg',
      rating: 4.1,
    },
    
    {
      id: 8,
      title: 'Fall',
      description: 'It is about two women who climb a 2,000 foot (610 m) tall television broadcasting tower and become stranded at the top.',
      posterURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/xIgG4FM05zz10XPGN9fLrGzsLAa.jpg',
      rating: 6.4,
    },
    {
      id: 9,
      title: 'Athena',
      description: 'The tragic killing of a young boy ignites an all-out war in the community of Athena, with the victimi s older brothers at the heart of the conflict',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BNGY2OTg3ZjAtNTYyMC00MzAwLTg5NzEtZTdkNmFlMzA2ZGY5XkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_.jpg',
      rating: 6.4,
    },
    

  ]);
  const [filterCriteria, setFilterCriteria] = useState({ title: '', rating: '' });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (filterCriteria) => {
    setFilterCriteria(filterCriteria);
  };
  
  const [showAddMovie, setShowAddMovie] = useState(false); // set initial state for showing add movie modal

  const handleCloseAddMovie = () => setShowAddMovie(false); // function to handle closing add movie modal
  const handleShowAddMovie = () => setShowAddMovie(true); // function to handle showing add movie modal

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterCriteria.title.toLowerCase()) &&
      movie.rating >= filterCriteria.rating
    );
  });

  return (
    
    <Container>
      <Row>
        <Col>
        <Button variant="primary" onClick={handleShowAddMovie}>
        Add Movie
      </Button>
      <AddMovie 
        movies={movies}
        setMovies={setMovies}
        visible={showAddMovie}
        handleClose={handleCloseAddMovie}
      />
      </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='list'>My Movie List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <NavBar/>
          <Filter onFilter={handleFilter} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MovieList movies={filteredMovies} />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddMovie onAddMovie={handleAddMovie} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

