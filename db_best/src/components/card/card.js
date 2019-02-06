import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./card.css";

class Card extends Component {
  constructor(props){
    super(props);
  }
  render() {
    // console.log(this.props);
    let {imgSrc, text} = this.props;
    // console.log(imgSrc);
    return (
      <div className="card cat my-2">
        <img className="card-img-top" src={imgSrc} alt={"Cat " + text}/>
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  imgSrc : PropTypes.string,
  text : PropTypes.string,
};

export default Card;