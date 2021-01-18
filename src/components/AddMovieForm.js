import './../style/AddMovieForm.css'
import React, { useState } from 'react';
import OneField from './subcomponents/OneField';
import axios from 'axios';

const AddForm = ({ movie }) => {

  console.log(movie)
  const placeholder = '-';
  const full = 'sixteen';
  const half = 'eight';
  const titles = {
    name: 'Title',
    year: 'Release year',
    genres: 'Genre',
    category: 'Category',
    director: 'Director',
    country: 'Country',
    sub: 'Subtitles', 
    format: 'Format',
    actors: 'Actors'
  }
  const [addition, setAddition] = useState({
    Title: movie.Title,
    Type: movie.Type,
    Genre: movie.Genre,
    Year: movie.Year,
    Director: movie.Director,
    Country: movie.Country,
    Subs: movie.Subs,
    Formats: movie.Formats,
    Actors: movie.Actors,
    imdbID: movie.imdbID
  });

  const onSaveClick = async() => {
    const url_base = `http://localhost:8080/movieDB/`;
    const post = await axios.post(url_base, addition);
    if (post) {
      alert('done saving:\n' + addition.Title);
    };
  }

  const onInput = (value, title) => {
    const keysA = Object.keys(addition);
    const keysT = Object.keys(titles);
    const tmp = addition;
    let titleKey;

    for (let key of keysT) {
      if (titles[key] === title) {
        titleKey = key;
      }        
    }

    for (let key of keysA) {
      tmp[key] = addition[key].toString().trim();
    }

    if (titleKey) {
      for (let key of keysA) {
        if (key === titleKey) {
          tmp[key] = value.toString().trim();
        }        
      }
    }
    setAddition(tmp);
  }
  
  return (
    <div className="add-form">
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui form" >

            <h4 className="ui dividing header">Add Movie to Database</h4>
            <div className="ui internally celled grid">

              <div className="row">
                {OneField(full, titles.name, placeholder, movie.Title, onInput)}
              </div>

              <div className="row">   
                {OneField(half, titles.genres, placeholder, movie.Genre, onInput)} 
                {OneField(half, titles.year, placeholder, movie.Year, onInput)}             
              </div>

              <div className="row">
                {OneField(half, titles.category, placeholder, movie.Type, onInput)}
                {OneField(half, titles.director, placeholder, movie.Director, onInput)}
              </div>

              <div className="row">
                {OneField(full, titles.actors, placeholder, movie.Actors, onInput)}
              </div>

              <div className="row">  
                {OneField(half, titles.format, placeholder, 'dvd', onInput)}  
                {OneField(half, titles.sub, placeholder, placeholder, onInput)}             
              </div>

              <div className="row">   
                {OneField(half, titles.country, placeholder, movie.Country, onInput)} 
                {OneField(half, 'Classification', placeholder, placeholder, onInput)}             
              </div>

            </div>
          </div>          
        </div>
        
        <div className="ui segment">
          <div className="button center">
            <button 
              className="ui button save" 
              onClick={onSaveClick}
            >
              Save to Database
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;