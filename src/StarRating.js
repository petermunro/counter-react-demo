import React, { Component, useState } from "react";
import "./StarRating.css";

const BLACK_STAR = "\u2605";
const WHITE_STAR = "\u2606";

function StarRating(props) {
  let [rating, setRating] = useState(1);

  let arrayOf5 = Array.from({ length: 5 });
  let stars = arrayOf5.map((e, i) => (
    <span onClick={() => setRating(i + 1)} key={i}>
      {i + 1 > rating ? WHITE_STAR : BLACK_STAR}
    </span>
  ));

  return (
    <div className="star-rating">
      <h3>Star Rating</h3>
      {stars}
    </div>
  );
}

class XStarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.defaultRating || 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let arrayOf5 = Array.from({ length: 5 });
    let stars = arrayOf5.map((e, i) => (
      <span onClick={() => this.handleClick(i + 1)} key={i}>
        {i + 1 > this.state.rating ? WHITE_STAR : BLACK_STAR}
      </span>
    ));
    return (
      <div className="star-rating">
        <h3>Star Rating</h3>
        {stars}
      </div>
    );
  }

  handleClick = i => {
    this.setState({ rating: i });
  };
}

export default StarRating;
