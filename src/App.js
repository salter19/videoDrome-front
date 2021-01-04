import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import SearchOMDB from './components/SearchOMDB';
// import AddMovieForm from './components/AddMovieForm';
import Page from './components/Page';

/* const items = [
  {
    title: 'The Matrix',
    year: '1999'
  },
  {
    title: 'Mad Max',
    year: '1979'
  }
]
*/
const left = { add: 'add', get: 'get' };

const App = () => {

  const [addition, setAddition] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [leftside, setLeftside] = useState('');

  const addclick = (results) => {
    setAddition(results);
    setLeftside(left.add);
  }

  const searchclick = (results) => {
    setSearchResults(results);
    setLeftside(left.get);
  }
  
  return (
    <div>
      {<Page 
        className="page base"
        adderclick={addclick}

      />}
    </div>
  );
};

export default App;
