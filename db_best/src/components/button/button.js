import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { type, cssClass, onclick, textButton } = this.props;
    return (
      <button type={type} className={cssClass} onClick={onclick}>
        {textButton}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  cssClass: PropTypes.string,
  onclick: PropTypes.func,
  textButton: PropTypes.string
};

export default Button;
