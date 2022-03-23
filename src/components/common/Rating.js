import React, { useState, useEffect } from 'react'
import { common } from '../../common/common'

export default function Rating({ rating, showNumber }) {
  showNumber = common.defaultIfEmpty(showNumber, true);
  rating = common.defaultIfEmpty(rating, 0);
  rating = rating > 0 && rating <= 1 ? 1 : rating;
  const [ratingData, setRatingData] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let star = 1; star <= rating; star++) {
      arr[star - 1] = star;
    }
    setRatingData(arr);
  }, [rating])

  return (
    <div className='text-center'>
      {
        ratingData.map(ele => {
          return <i title={ele + ' Star'} key={common.getElementKey()} className="fa-solid fa-star text-warning"></i>
        })
      }
      {

        rating > ratingData.length && rating < (ratingData.length + 1) && (<i title={rating + ' Star'} key={common.getElementKey()} className="text-warning fa-solid fa-star-half-stroke"></i>)
      }
      { showNumber &&(
        <span> {rating.toFixed(1)}</span>)
      }
    </div>
  )
}
