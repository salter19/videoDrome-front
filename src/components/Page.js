import './../style/Page.css';
import React from 'react';
import SearchOMDB from './SearchOMDB';
import AddMovieForm from './AddMovieForm';

const Page = ({ adderclick }) => {
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
              <SearchOMDB adderClick={adderclick}/>
              <SearchOMDB adderClick={adderclick}/>
            </div>

            <div className="ui segment right">
              <p>right</p>
              <AddMovieForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;