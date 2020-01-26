import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import SelectBreed from "./components/SelectBreed";
import ImageOfAllBreeds from "./components/ImageOfAllBreeds";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: ""
    }

    this.handleSelectBreed = this.handleSelectBreed.bind(this)
  }

 handleSelectBreed(event) {
  this.setState({
      breed: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1> App </h1>
        <SelectBreed handleSelectBreed={this.handleSelectBreed} />
        <ImageOfAllBreeds />
      </div>
    );
  }

}
