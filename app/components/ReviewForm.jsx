import React from 'react';
import store from '../store';


export default function (props) {

    //if(!props.loggedInUser) return null;
    return (
        <div>
          <div>
            <h3>Leave a Review</h3>
            <form onSubmit={props.handleSubmit}>
              <textarea
                onChange={props.handleInputChange}
                value={props.searchTerm}
                className="form-control"
                placeholder="Wow! This product is great.."
              ></textarea>
            <h5>Rating:
              <select className="custom-select"
                      onChange={props.handleInputChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select> </h5>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>

    );
  }