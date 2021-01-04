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
const right = { add: 'add', get: 'get' };

const App = () => {

  const [addition, setAddition] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [rightside, setRightside] = useState('');

  const addclick = (results) => {
    setAddition(results);
    setRightside(right.add);
  }

  const searchclick = (results) => {
    setSearchResults(results);
    setRightside(right.get);
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
