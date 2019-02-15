import React, { Component } from 'react';
import './App.css';
import Poster from './Poster';
import NavBar from './NavBar';

class App extends Component {
  // in order to use "this" we have to have constructor
  constructor(){
    super();
    this.state = {
    	  movieList: []
		}
	this.movieSearch = this.movieSearch.bind(this);
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

	movieSearch(e){
		console.log(e)
		e.preventDefault();
		console.log("Form submitted!");
		const movieTitle = document.getElementById('searchTerm').value;
		const url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+movieTitle;
		fetch(url)
		.then((response)=>{
		  return response.json();
		})
		.then((myJson)=>{
			const results = myJson.results;
			console.log(results)
			this.setState({
				movieList: results
			});
		});		
	}
  
  render() {
	  const posters = this.state.movieList.map((movie,i)=>{
		   return(<Poster key={i} movie={movie} />)
		//    movie  = this.state.movieList[i]
	  })
    return (
    	<div className="container">
				<NavBar />
				<div className="row">
					<h1>The movie app...again.</h1>

					<form onSubmit={this.movieSearch}>
						<input id="searchTerm" type="text" placeholder="Movie Title" />
						<button type="submit" className="btn waves-effect btn-light">Search</button>
					</form>

					{posters}
				</div>
      	</div>
    );
  }
}

export default App;

// inside of React...
// if(this.Component.props.onSubmit){
// 	// onSubmit handler passed
// 	// call the function, that was passed
// 	this.Component.props.onSubmit()
// }

// for(let i =0; i <5; i++){
// 	for(let j =0;j <5; j++){	
// 		if(j == 3){
// 			break
// 		}
// 	}
// 	if(i == 4){
// 		break;
// 	}
// }

