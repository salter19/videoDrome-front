import './../style/SearchOMDB.css';
import React, { useState } from 'react';
import axios from 'axios';
// import AddForm from './AddMovieForm'

const _url = 'http://localhost:8080/movieDB/omdb/';

const SearchOMDB = ({ adderClick }) => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const formatTitle = () => {
    if (title.includes(':')) {
      const result =  title.split(':')[0];
      setYear('');
      return result;
    };
    return title;
  };

  const checMykDB = async (_title) => {

    let result = -1;

    try {      
      // TODO: how to search by includes this part???
      result = await axios.get(`http://localhost:8080/movieDB/${_title}/${year}`);
      return result;
      
    } catch (error) {
      console.log('404 - Not yet on my database.');
      return result
    }
  };

  const addForm = async (_title) => {
    try {     
      
      const { data } = await axios.get(`${_url}${_title}/${year}`);
      console.log('got this data')
      console.log(data)
      openForm(data);
      
    } catch (error) {
      console.log('404 - could not find the movie with title and year.');
    }
  };

  const addFormByTitle = async (_title) => {
    try {
      const { data } = await axios.get(`${_url}${_title}`);
      console.log('got this data')
      console.log(data)
      openForm(data);
      
    } catch (error) {
      console.log('404 - could not find movie by this title.')
    }
  };

  const onButtonClick = () => {
    (async() => {
     try {
      const movieTitle = formatTitle();
      console.log(movieTitle);
      const myMovie = await checMykDB(movieTitle);
      console.log(myMovie.data);

      if (myMovie === -1) {
        await addForm(movieTitle);
      } else if (myMovie.data.length < 1) {
        await addFormByTitle(movieTitle);
      } else {
        console.log(myMovie.data);
      }
       
     } catch (error) {
       console.log('Cannot compute input.')
     }
    })();
  };

  const openForm = (data) => {
    adderClick(data);
  };

  return (
    <div className="omdb">
      <div className="omdb ui segment">
        <h4 className="omdb ui dividing header">Add Movie To Database</h4>
        <div className="ui form">
          <div className="two fields">

            <div className="nine wide field">
              <label className="title label">Movie Title:</label>
              <input 
                className="input" 
                type="text"
                placeholder="Return of Jedi"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="one wide field"></div>

            <div className="four wide field">
              <label className="year label">Release Year:</label>
              <input 
                className="input"
                type="text"
                placeholder="1983"
                value={year}
                onChange={e => setYear(e.target.value)}
              />
            </div>

          </div>
          
          <div className="button center">
            <button 
              className="ui button"
              onClick={onButtonClick}
            >
              Videofinder General
            </button>
          </div>

        </div>
      </div>
    </div>

  );

};

export default SearchOMDB;