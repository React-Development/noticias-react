import React, { Component, Fragment } from "react";
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';
import axios from "axios";

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const url = `https:newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=d13f7fded7ca4c3b9fb831a3b22b60af`;

    const respuesta = await axios.get(url);

    const { articles: noticias } = await respuesta.data;

    this.setState({ noticias });

    console.log("Noticias", this.state);
  };

  render() {
    return (
    <Fragment>
      <Header titulo="Noticias React API"/>
      <div className="container white contenedor-noticias">
        <Formulario 
          consultarNoticias = {this.consultarNoticias}
        />
        <ListaNoticias 
          noticias = {this.state.noticias}
        />
      </div>
    </Fragment>
    );
  }
}

export default App;
