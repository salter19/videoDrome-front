import './../style/AddMovieForm.css'
import React, { useState } from 'react';
import OneField from './subcomponents/OneField';
import axios from 'axios';

const AddForm = ({ movie }) => {

  const placeholder = ' - ';
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
    name: movie.name,
    category: movie.category,
    genres: movie.genres,
    year: movie.year,
    director: movie.director,
    country: movie.country,
    sub : movie.sub,
    sub2: movie.sub2,
    format: movie.format,
    format2: movie.format,
    actors: movie.actors,
    imdbID: movie.imdbID
  });

  const onSaveClick = async() => {
    console.log('saving...');
    console.log(addition);
    const post = await axios.post(`http://localhost:8080/movieDB/`, addition);
    post ? console.log('done!') : console.log('...');
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

    if (titleKey) {
      for (let key of keysA) {
        if (key === titleKey) {
          tmp[key] = value;
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
                {OneField(full, titles.name, placeholder, movie.name, onInput)}
              </div>

              <div className="row">   
                {OneField(half, titles.genres, placeholder, movie.genres, onInput)} 
                {OneField(half, titles.year, placeholder, movie.year, onInput)}             
              </div>

              <div className="row">
                {OneField(half, titles.category, placeholder, movie.category, onInput)}
                {OneField(half, titles.director, placeholder, movie.director, onInput)}
              </div>

              <div className="row">
                {OneField(full, titles.actors, placeholder, movie.actors, onInput)}
              </div>

              <div className="row">  
                {OneField(half, titles.format, 'dvd', placeholder, onInput)}  
                {OneField(half, titles.sub, placeholder, placeholder, onInput)}             
              </div>

              <div className="row">   
                {OneField(half, titles.country, placeholder, movie.country, onInput)} 
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