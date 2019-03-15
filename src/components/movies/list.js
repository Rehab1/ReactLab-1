import React, {Component} from 'react';
import MoviesCard from './card';


class MoviesList extends Component{
    state = {
        viewWatched: true,
        watchedMovies: [],
        notWatchedMovies: [],
    }
    componentDidMount(){
        var arrayWatched = this.props.data.filter((movie) => movie.watched === true);
        var arraNotyWatched = this.props.data.filter((movie) => movie.watched === false);
        this.setState({
            watchedMovies: arrayWatched,
            notWatchedMovies: arraNotyWatched
		})
	}

	changeViewedMovies = (checkbox) => {

		this.setState({
			viewWatched: checkbox.checked
		})
	}

    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <input type="checkbox" defaultChecked onChange={(e) => {this.changeViewedMovies(e.target)}} /><span>View watched</span>
					</div>
                    {
						(
							this.state.viewWatched === true && this.state.watchedMovies.map((data)=>
								<MoviesCard key={data.imdbID} data={data} />
							
							)
						) ||
						(
							this.state.viewWatched === false && this.state.notWatchedMovies.map((data)=>
							<MoviesCard key={data.imdbID} data={data} />
						
							)
						)
					}
					
                    {
                       /* Array.isArray(this.props.data) && this.props.data.map(post => 
                            <MoviesCard key={post.imdbID} data={post} />
                        )*/
                    }
                    </div>
                </div>
            </>
        )
    }
}

export default MoviesList;