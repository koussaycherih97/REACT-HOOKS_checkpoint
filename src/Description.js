import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Description = ({ movie }) => {
  const {id} = useParams();
  const mov = movie.find((e) => e.id === id);
  return (
    
    
    <div className="desc">

      <div>
        <p style={{color:'white'}}>{mov.description}</p>
        <Link to='/'> <button className="button">BACK</button></Link>
      </div>
      <iframe
        width="500"
        height="315"
        src={mov.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    
  );
};

export default Description;
