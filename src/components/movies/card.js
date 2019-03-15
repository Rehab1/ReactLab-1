import React from 'react';
// import { Card, Container, Row, Col } from 'bootstrap-4-react';
class MovieCard extends React.Component {
    render() {
        const { Title, Year, imdbID, Type, Poster, watched } = this.props.data;
        return (
            <div className="col-md-3">
                <div className="card" >
                    <img src={Poster === 'N/A' ? 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' : Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <h5 className="card-title">{imdbID}</h5>
                        <p className="card-text">{Year}</p>
                        <p className="card-text">{Type}</p>
                        <input type="checkbox" defaultChecked={watched}/><span>watched</span>
                    </div>
                </div>
            </div>
        )
    }

}
export default MovieCard;