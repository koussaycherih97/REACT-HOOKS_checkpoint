import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarRatingComponent from "react-star-rating-component";
import { Link } from 'react-router-dom';

const MovieCard = ({el}) => {
  return (
    
    <div>
   
    <Card sx={{ maxWidth: 200 , backgroundColor:"dimgrey"}}>
      <CardActionArea>
        <Link to={`/Description/${el.id}`}><CardMedia
          component="img"
          height="240"
          image= {el.img}
          alt="photo"
        /></Link>
 
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {el.title}
          </Typography>
          <Typography classsName="des" variant="body3" color="white">
            {el.description}
          </Typography>
          <hr></hr>
          <StarRatingComponent
          name= "star" /* name of the radio input, it is required */
          value={el.rate} /* number of selected icon (`0` - none, `1` - first) */
          starColor="#F2CD5C" /* color of selected icons, default `#ffb400` */
          editing={false} /* is component available for editing, default `true` */
        />
        </CardContent>
      </CardActionArea>
    </Card>
  
    </div>

  )
}

export default MovieCard