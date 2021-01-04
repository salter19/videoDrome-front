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

const App = () => {

  const [addition, setAddition] = useState({});

  const addfromomdb = (results) => {
    console.log('click')
    setAddition(results);
  }
  
  return (
    <div>
      {<Page 
        className="page base"
        adderclick={addfromomdb}

      />}
    </div>
  );
};

export default App;
