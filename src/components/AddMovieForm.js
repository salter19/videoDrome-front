import './../style/AddMovieForm.css'
import React, { useState } from 'react';
import OneField from './subcomponents/OneField';
//import axios from 'axios';

const AddForm = ({ movie }) => {

  const placeholder = ' - ';
  const full = 'sixteen';
  const half = 'eight';


  const onSaveClick = () => {
    console.log('saving...');
  }

  const onInput = (value, title) => {
    console.log(title + ' onInput: ' + value);
  }
  
  return (
    <div className="add-form">
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui form" >

            <h4 className="ui dividing header">Add Movie to Database</h4>
            <div className="ui internally celled grid">

              <div className="row">
                {OneField(full, 'Title', placeholder, movie.name, onInput)}
              </div>

              <div className="row">   
                {OneField(half, 'Genre', placeholder, movie.genres)} 
                {OneField(half, 'Release Year', placeholder, movie.year)}             
              </div>

              <div className="row">
                {OneField(full, 'Director', placeholder, movie.director)}
              </div>

              <div className="row">
                {OneField(half, 'Actor 1', placeholder, movie.actors[0])}
                {OneField(half, 'Actor 2', placeholder, movie.actors[1])}
              </div>

              <div className="row">  
                {OneField(half, 'Format', 'dvd')}  
                {OneField(half, 'Subtitles', placeholder)}             
              </div>

              <div className="row">   
                {OneField(half, 'Country', placeholder, movie.country)} 
                {OneField(half, 'Classification', placeholder)}             
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