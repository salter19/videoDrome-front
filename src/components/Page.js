import './../style/Page.css';
import React, { useState } from 'react';
import SearchOMDB from './SearchOMDB';
import AddMovieForm from './AddMovieForm';
import Accordion from './Accordion';

const Page = () => {

  const [rightside, setRightside] = useState('');
  
  const addForm = (_movie) => {
    setRightside(
      <div className="view right">
        <AddMovieForm movie={_movie}/>
      </div>
    );
  }

  const searchResults = () => {
    console.log('at search results setter')
    setRightside(
      <div className="view right">
        <Accordion item={[]}/>
      </div>
    );
  }

  const adderclick = (_movie) => {
    addForm(_movie);
  };

  return (
    <div className="page">
      <div className="ui container main">
        
        <div className="ui segments">

          <div className="ui segment">
            <p>top</p>
          </div>

          <div className="ui horizontal segments">
            <div className="ui segment left">
              <p>left</p>
              <SearchOMDB adderClick={adderclick} setView={rightside}/>
            </div>

            <div className="ui segment right">
              <p>right</p>
              {rightside}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;