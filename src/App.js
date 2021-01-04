import React, { useState } from 'react';
import Page from './components/Page';

// const right = { add: 'add', get: 'get' };

const App = () => {

  const [addition, setAddition] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [rightside, setRightside] = useState();


  const searchclick = (results) => {
    setSearchResults(results);
    setRightside(results);
    console.log('click: search');
  };

  

  return (
    <div>
      {<Page 
        className="page base"
        searchclick={searchclick}
        view={rightside}
      />}
    </div>
  );
};

export default App;
