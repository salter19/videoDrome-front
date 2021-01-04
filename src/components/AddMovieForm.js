import './../style/AddMovieForm.css'
import React from 'react';

const AddForm = ({ movie }) => {
  
  return (
    <div className="add-form">
      <div className="ui segments">
        <div className="ui segment">
          <div className="ui form" >

            <h4 className="ui dividing header">Add Movie to Database</h4>
            <div className="ui internally celled grid">

              <div className="row">
                <div className="sixteen wide column">
                  <label>Title</label>
                    <input type="text" placeholder=" - " defaultValue={movie.name}/>
                </div>
              </div>

              <div className="row">    
                <div className="eight wide column">
                  <label>Genre</label>
                  <input type="text" placeholder=" - " defaultValue={movie.genres[0]}/>
                </div>

                <div className="eight wide column">
                  <label>Release Year</label>
                  <input type="text" placeholder=" - " defaultValue={movie.year}/>
                </div>              
              </div>

              <div className="row">
                <div className="sixteen wide column">
                  <label>Director</label>
                  <input type="text" placeholder=" - " defaultValue={movie.director[0]}/>
                </div>
              </div>

              <div className="row">
                <div className="sixteen wide column">
                  <label>Actor 1</label>
                  <input type="text" placeholder=" - " defaultValue={movie.actors[0]}/>
                </div>
              </div>

              <div className="row">
                <div className="sixteen wide column">
                  <label>Actor 2</label>
                  <input type="text" placeholder=" - " defaultValue={movie.actors[1]}/>
                </div>
              </div>

              <div className="row">    
                <div className="eight wide column">
                  <label>Format</label>
                  <input type="text" placeholder="dvd" />
                </div>

                <div className="eight wide column">
                  <label>Subtitles</label>
                  <input type="text" placeholder=" - " />
                </div>              
              </div>

              <div className="row">    
                <div className="eight wide column">
                  <label>Country</label>
                  <input type="text" placeholder=" - " defaultValue={movie.country[0]}/>
                </div>

                <div className="eight wide column">
                  <label>Classification</label>
                  <input type="text" placeholder=" - " />
                </div>              
              </div>

            </div>

          </div>

          
        </div>
        <div className="ui segment">
          <div className="button center">
            <button className="ui button save">Save to Database</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;