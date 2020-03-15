import React from 'react';
import {Link} from 'react-router-dom';

class AddCourseButton extends React.Component {
    render() {
      return (
        <Link to={`/course/new`}>
          <button className="mainButton">
            Add course
         </button>
         </Link>
      );
    }
  }
  
export default AddCourseButton;
