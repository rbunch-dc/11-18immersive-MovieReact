import React, { Component } from 'react';
import './App.css';
import Poster from './Poster';

class App extends Component {
  // in order to use "this" we have to have constructor
  constructor(){
    super();
    this.state = {
      movieList: []
    }
  }

  componentDidMount(){
	const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
	
	// fetch is a replacement for $.getJSON/$.ajax/axios
	fetch(url)
	.then((response)=>{
	  return response.json();
	})
	.then((myJson)=>{
		const results = myJson.results;
		console.log(results)
		// this.state.moviesToShow = results // BAD BAD BAD
							 //    ^
							 //    |
							 //   BAD!!!!!
		this.setState({
			movieList: results
		});
	});

	console.log("Checking... yes! It's mounted");

}
  
  render() {
	  const posters = this.state.movieList.map((movie,i)=>{
		   return(<Poster key={i} movie={movie} />)
		//    movie  = this.state.movieList[i]
	  })
    return (
    	<div className="container">
			<div className="row">
				<h1>The movie app...again.</h1>
				{posters}
			</div>
      	</div>
    );
  }
}

export default App;
