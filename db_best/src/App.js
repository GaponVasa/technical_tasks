import React, { Component } from 'react';
import arrJson from './JSON/test.json';
import Card from './components/card/card';

class App extends Component {

  createCardsArr(){
    return arrJson.map(el=>{
      //console.log(el);
      return <Card
        key={el.id}
        imgSrc={el.imageUrl}
        text={el.name}
      />
    })
  }

  render() {
    console.log(arrJson);
    return (
      <div className="container col">
        <div className="d-flex justify-content-md-center justify-content-lg-between flex-wrap flex-md-row flex-sm-column my-3">
          {this.createCardsArr()}
        </div>
        <div className="text-center mb-3">
          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
