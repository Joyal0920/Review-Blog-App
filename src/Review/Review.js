import React, { useState } from "react";
import { UserData } from "../StaticData/StaticData";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = UserData[index];

  const checkNumber = (number) => {
    if (number > UserData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return UserData.length - 1;
    }
    return number;
  };
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
    return checkNumber(newIndex);
    })
  };
  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
    return checkNumber(newIndex);
    })
  };
  const randomPerson=()=>{
   let randomNumber = Math.floor(Math.random()*UserData.length) 
    if(randomNumber === index){
      randomNumber =index+1
    }
    setIndex(randomNumber)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" srcset="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="author">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
