import React, { Component } from "react";
import arrJson from "./JSON/test.json";
import Card from "./components/card/card";
import Button from "./components/button/button.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: []
    };
  }

  createCardsArr(eventClick) {
    return arrJson.map(el => {
      return (
        <Card
          key={el.id + el.name}
          imgSrc={el.imageUrl}
          text={el.name}
          clickCard={() => eventClick(el.id + "-" + el.name)}
        />
      );
    });
  }

  clickSubmit() {
    let { selectedCard } = this.state;
    let result = "";
    selectedCard.forEach((el, ind) => {
      ind === 0 ? (result = el) : (result = result + " , " + el);
    });
    alert(result);
  }

  clickCard = keyId => {
    let { selectedCard } = this.state;
    let coincidence = selectedCard.indexOf(keyId);
    if (coincidence === -1) {
      this.setState({ selectedCard: [...selectedCard, keyId] });
    } else {
      selectedCard.splice(coincidence, 1);
      this.setState({ selectedCard: [...selectedCard] });
    }
  };

  render() {
    return (
      <div className="container col">
        <div className="d-flex justify-content-md-center justify-content-lg-between flex-wrap flex-md-row flex-sm-column my-3">
          {this.createCardsArr(this.clickCard)}
        </div>
        <div className="text-center mb-3">
          <Button
            type={"submit"}
            cssClass={"btn btn-outline-primary"}
            onclick={() => this.clickSubmit()}
            textButton={"Submit"}
          />
        </div>
      </div>
    );
  }
}

export default App;
