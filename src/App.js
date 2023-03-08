import "./App.css";
import { useState } from "react";
import MovieList from "./MovieList";
import Add from "./Add";
import Filter from "./Filter";
import { Route, Routes } from "react-router-dom";
import Description from "./Description";
import {v4 as uuidv4} from 'uuid' ;

function App() {
  
  const [movie, setMovie] = useState([
    
    { id : uuidv4(), 
      title: "Se7en",
      description:
        "A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.",
      rate: "5",
      img: "https://sites.google.com/site/justingrillseconandcinema/_/rsrc/1290369606044/home/synthesis-project-se7en/Se7en%20poster.jpg",
      trailer:"https://www.youtube.com/embed/znmZoVkCjpI",
    },
    { id : uuidv4(),
      title: "The Shawshank Redemption",
      description:
        "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison.",
      rate: "5",
      img: "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg",
      trailer:"https://www.youtube.com/embed/P9mwtI82k6E",
    },
    { id : uuidv4(),
      title: "The Green Mile",
      description:
        "Paul, the head guard of a prison, meets an inmate, John, an African American who is accused of murdering two girls. His life changes drastically when he discovers that John has a special gift.",
      rate: "4",
      img: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
      trailer:"https://www.youtube.com/embed/Ki4haFrqSrw",
    },
    { id : uuidv4(),
      title: "The Kingdom of Heaven",
      description:
        "In the twelfth century, blacksmith Balian travels to Jerusalem, a city seething with religious wars. He transforms into a defending warrior who saves the city and its people.",
      rate: "4",
      img: "https://images.moviesanywhere.com/2b90d350825375dd698c08a9b3a85088/eb6926dc-bf72-4622-8a0c-fa93131bcecc.jpg",
      trailer:"https://www.youtube.com/embed/moNH4N44D28",
    },
    { id : uuidv4(),
      title: "The Revenant",
      description:
        "Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion who betrayed him.",
      rate: "3",
      img: "https://meritaking.files.wordpress.com/2016/06/watch-the-revenant-full-movie.jpg",
      trailer:"https://www.youtube.com/embed/QRfj1VCg16Y",
    },
  ]);

  const [letter, setLetter] = useState("");
  const [rating, setRating] = useState("");

  const addNewMovie = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  const searchMov = (text) => {
    setLetter(text);
  };

  const rateMov = (num) => {
    setRating(num);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
        <div className="home">
          <MovieList
            movie={movie.filter(
              (el) =>
                el.title.toLowerCase().includes(letter.toLowerCase().trim()) &&
                el.rate >= rating
            )}
          ></MovieList>
          <div className="filter">
            <Add className="add" addNewMovie={addNewMovie}></Add>
            <br></br>
            <Filter searchMov={searchMov} rateMov={rateMov}></Filter>
          </div>
        </div>
        }></Route>

        <Route path="/Description/:id" element={<Description movie={movie}></Description>}></Route>

      </Routes>
    </div>
  );
}

export default App;
