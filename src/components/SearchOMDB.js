import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddForm from './AddMovieForm'

const _url = 'http://localhost:8080/movieDB/omdb/' 

const SearchOMDB = () => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [results, setResults] = useState({});

  console.log(results);

  useEffect(() => {
    const func = async () => {
      const { data } = await axios.get(`${_url}${title}/${year}`);
      setResults(data);
    };

    // search for movie only if year is given
    // TODO: add validation
    if ( title && year.length === 4 ) {
      func();
    }

  }, [title, year]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <div className="search title">
            <label>Enter Movie Title:</label>
            <input 
              className="input" 
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="search year">
            <label>Enter Release Year:</label>
            <input 
              className="input" 
              value={year}
              onChange={e => setYear(e.target.value)}
            />
          </div>

        </div>
      </div>

    </div>

  );

};

export default SearchOMDB;