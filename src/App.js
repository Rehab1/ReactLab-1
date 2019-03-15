import React, { Component } from 'react';

import './App.css';
import data from './data';
import MoviesList from './components/movies/list';

class App extends Component{

    render(){
        return(
            <>
                <MoviesList data={data} />
            </>
        )
    }
}
export default App;
