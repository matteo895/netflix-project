import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

class TrendingNow extends Component {
  state = {
    movie: [],
  };
  giveMyFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=d148c825&s=naruto")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((Object) => {
        const saga = Object.Search;
        console.log(saga);
        this.setState({ movie: saga });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.giveMyFilm();
  }
  render() {
    return (
      <>
        {this.state.movie.map((production) => {
          return (
            <div key={production.imdbID}>
              <img
                className="img-fluid h-100 objact-fit-cover"
                src={production.Poster}
                alt={production.Title}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default TrendingNow;
