import React, { Component } from 'react';
import './App.css';
import Movie from './Moive.js'

class App extends Component {

  state = {
    greeting: "Hello!",
    movies: [
      {
        title: "Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
      },
      {
        title: "Oldboy",
        poster: "http://www.impawards.com/2013/posters/oldboy_ver3.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() =>{
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Trainsporting",
            poster: "http://dazedimg.dazedgroup.netdna-cdn.com/1600/azure/dazed-prod/1190/2/1192408.jpg"
          }
        ]

      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;