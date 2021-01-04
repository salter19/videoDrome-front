import React from 'react';

const AddForm = ({ movie }) => {
  
  return (
    <div className="add-form">
      <div className="ui segment">
        <div className="ui form" >

          <h4 className="ui dividing header">Add Movie to Database</h4>

          <div className="two fields">

            <div className="six wide field">
              <label>Title</label>
              <input type="text" placeholder="Movie title" defaultValue={movie.name}/>
            </div>

            <div className="six wide field">
              <label>Release Year</label>
              <input type="text" placeholder="1983" defaultValue={movie.year}/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AddForm;