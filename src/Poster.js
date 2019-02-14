// The very first thing in every component, 
// is to import
import React, {Component} from 'react';

// I am a presentational Component.
// That means I don't care about state.
// I could have been in App.js, but this is cleaner
class Poster extends Component{
    // no constructor neccessary, because "this" is never used
    render(){
        const imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;		
        const moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`    
        const title = this.props.movie.title;
        return(
            <div className="col s3 center">
                <a href={moviePath}>
                    <img src={imagePath} />
                </a>
                <div className="col s12">
                    {title}
                </div>
            </div>
        )
    }
}

export default Poster;