import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";
import {
  CSS_CLASS_CARD,
  CSS_CLASS_CARD_SELECTED
} from "../../constants/constants";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagSelected: false
    };
  }

  changeFlagSelected() {
    let curentFlagSelected = !this.state.flagSelected;
    this.setState({ flagSelected: curentFlagSelected });
  }

  handlerClick() {
    let { clickCard } = this.props;
    clickCard();
    this.changeFlagSelected();
  }

  render() {
    let { imgSrc, text } = this.props;
    let { flagSelected } = this.state;
    return (
      <div
        className={flagSelected ? CSS_CLASS_CARD_SELECTED : CSS_CLASS_CARD}
        onClick={() => this.handlerClick()}
      >
        <img className="card-img-top" src={imgSrc} alt={"Cat " + text} />
        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  clickCard: PropTypes.func
};

export default Card;
