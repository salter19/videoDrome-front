import React, { useState, useEffect } from 'react';

const AddForm = () => {

  const [title, setTitle] = useState('');
  const [country, setCountry] = useState([]);
  const [year, setYear] = useState('');


  return (
    <div className="add-form">
      <div className="ui segment">
        <div className="ui form">

          <h4 className="ui dividing header">Add Movie to Database</h4>

          <div className="two fields">

            <div className="six wide field">
              <label>Title</label>
              <input type="text" placeholder="Movie title"/>
            </div>

            <div className="six wide field">
              <label>Release Year</label>
              <input type="text" placeholder="1983"/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddForm;