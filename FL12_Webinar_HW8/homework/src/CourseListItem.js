import React from 'react';
import {Link} from 'react-router-dom';

class CourseListItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleCourseItemDelete = this.handleCourseItemDelete.bind(this);      
    }

    handleCourseItemDelete = () => {
      this.props.onCourseItemDelete(this.props.course.id);
    }

    render() {
      const course = this.props.course;

      return (
        <div className="courseItem"  key={course.id}>
          <div className="date item">
            {course.date}
          </div>
          <div className="title item">
            {course.name}
          </div>
          <div className="description item">
            {course.description}
          </div>
          <div className="duration item">
          {course.duration}
          </div>
          <div id="button--more">
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="512px" 
              viewBox="0 -192 512 512" width="512px" className="">
              <g>
                <path d="m320 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" 
                data-original="#000000" className="active-path" data-old_color="#000000" 
                fill="#AFB4B8"/><path d="m128 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" 
                data-original="#000000" className="active-path" data-old_color="#000000" fill="#AFB4B8"/>
                <path d="m512 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" 
                data-original="#000000" className="active-path" data-old_color="#000000" fill="#AFB4B8"/>
              </g> 
            </svg> */}
            <Link to={`/course/${course.id}`}><button>Edit</button></Link>
            <button onClick={this.handleCourseItemDelete}>Delete</button>
          </div>
        </div>
      );
    }
  }
  
export default CourseListItem;