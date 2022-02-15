import React from 'react';
import './Rating.css';


  const Rating = ({ rate, setSearchRate = () => { } }) => {
  
  let stars = []

  for (let i = 0; i < 5; i++) {
      if (i < rate) {
          stars.push(
              <span className='star' onClick={() => setSearchRate(i + 1)}>
                  ★
              </span>
          )
      } else {
          stars.push(<span className='star'  onClick={() => setSearchRate(i + 1)}>
              ☆
          </span>
          )
      }

  }


  return <div>{stars}</div>;
};

export default Rating;