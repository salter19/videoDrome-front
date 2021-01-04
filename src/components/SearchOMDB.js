import './../style/SearchOMDB.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import AddForm from './AddMovieForm'

const _url = 'http://localhost:8080/movieDB/omdb/' 

const SearchOMDB = ({ adderClick }) => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [results, setResults] = useState({});

  const onButtonClick = () => {
    (async() => {
      if (title && year) {
        const { data } = await axios.get(`${_url}${title}/${year}`);
        setResults(data);
      } else if (title) {
        const { data } = await axios.get(`${_url}${title}`);
        setResults(data);     
      }
    })();
    
  };

  useEffect(() => {
    if (results.name) {
      adderClick(results);
    }
  }, [results, adderClick]);


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