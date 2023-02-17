import React from 'react'
import StarRatingComponent from "react-star-rating-component";

const Filter = ({searchMov , rateMov}) => {
  return (
    <div>

      <input placeholder='Search' onChange={ (e)=> searchMov(e.target.value)} ></input>
      <br></br>
      <StarRatingComponent
          name= "rating" /* name of the radio input, it is required */
          starColor="#DBF227" /* color of selected icons, default `#ffb400` */
          emptyStarColor='#333'
          onStarClick={(value) => rateMov(value) }
        />

    </div>
  )
}

export default Filter