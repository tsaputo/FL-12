import React from 'react';
import CourseListItem from './CourseListItem';

class CourseList extends React.Component {
    constructor(props) {
      super(props);
      
      this.handleCourseItemDelete = this.handleCourseItemDelete.bind(this);
    }
    
    handleCourseItemDelete = (id) => {
      this.props.onCourseItemDelete(id);
    }

    render() {
      let courses = this.props.courses;
      let text = this.props.searchText;
      
      const rows = [];

      courses.forEach((course) => {
        if (course.name.indexOf(text) === -1) {
          return;
        }         
        rows.push(
          <CourseListItem key={course.id} course={course} onCourseItemDelete={this.handleCourseItemDelete}
          />
        );
      })

      return (
        <div className="courses">
          {rows}
        </div>
      );
    }
  }
  
export default CourseList;