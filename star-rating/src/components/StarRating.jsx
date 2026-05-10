import React, { useState } from 'react'
import GreyStar from '../assets/greystar.svg'
import YellowStar from '../assets/yellowstar.svg'

const StarRating = () => {
  const [starcount, setStarcount] = useState(0);
  const [hovered, setHovered] = useState(0);

  function handleStarClick(index) {
    setStarcount(index)
  }

  return (
    <div className='flex h-screen w-full justify-center items-center bg-[#262626]'>
      <div className='bg-[#000] p-4 rounded-xl w-fit'>
        <p className='font-semibold text-white text-lg text-center'>StarRating</p>
        <div className='flex flex-row w-full items-center gap-2'>
          {
            Array.from({ length: 5 }, (_, index) => {
              const starValue = index + 1;
              const isYellow = (hovered || starcount) >= starValue;
              return (
                <img
                  key={starValue}
                  src={isYellow ? YellowStar : GreyStar}
                  onClick={() => handleStarClick(starValue)}
                  alt={`${starValue} star`}
                  className='cursor-pointer w-12 h-12'
                  onMouseEnter={() => setHovered(starValue)}
                  onMouseLeave={() => setHovered(0)}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default StarRating