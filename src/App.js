import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = ` https:newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d13f7fded7ca4c3b9fb831a3b22b60af`;

    const respuesta = await axios.get(url);

    const { articles: noticias } = await respuesta.data;

    this.setState({ noticias });

    console.log("Noticias", this.state);
  };

  render() {
    return <h1>Noticias API React</h1>;
  }
}

export default App;
