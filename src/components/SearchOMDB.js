import React, { useState, useEffect} from 'react';

const SearchOMDB = () => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  useEffect(()=> {
    
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