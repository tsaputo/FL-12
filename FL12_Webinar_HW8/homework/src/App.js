import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CourseList from './CourseList.js';
import SearchBar from './SearchBar.js';
import AddCourseButton from './AddCourseButton';
import CourseItem from './CourseItem';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleCourseItemDelete = this.handleCourseItemDelete.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleCourseSave = this.handleCourseSave.bind(this);

    this.state = {
      courses: [
        {
          id: '1',
          date: '20/01/1990',
          name: 'React',
          description: 'Long story short etc.',
          duration: '1h 20min',
          authors: 'Ivan',
        },
        {
          id: '2',
          date: '21/01/2010',
          name: 'Prerequisites',
          description: 'Webpack, AngularCLI etc.',
          duration: '1h 40min',
          authors: 'Fedor',
        },
        {
          id: '3',
          date: '01/08/2020',
          name: 'Routing',
          description: 'Routing, Lazy and preloading',
          duration: '1h 34min',
          authors: 'Sergey',
    
        }
      ],
      searchText: ''
    };
  }
  

  handleCourseItemDelete (id) {
    this.setState((state) => {
      let courses = this.state.courses;
      let index = courses.findIndex((elem) => {
        return elem.id === id;
      });
      courses.splice(index, 1);
   
      return {courses: courses}
    });    
  }

  handleSearchTextChange(text) {
    this.setState({searchText: text});
  }

  handleCourseSave (course) {
    if (course.id) {
      this.setState((state)=>{
        let courses = this.state.courses;
        let index = courses.findIndex((elem) => elem.id === course.id);
        courses[index] = course;
        return {courses: courses};

      })     
    } else {
      this.setState((state)=>{
        let courses = this.state.courses;
        course.id = this.uuid();
        courses.push(course);
        return {courses: state.courses};
      });
    }
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  render() {
    return ( 
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>
              <SearchBar searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
              <AddCourseButton />
            </div>
            <CourseList courses={this.state.courses} searchText={this.state.searchText} onCourseItemDelete={this.handleCourseItemDelete}/>
          </Route>
          <Route path="/course/:id" render={
             (props) => <CourseItem courses={this.state.courses} {...props} onCourseSave={this.handleCourseSave}/>
          }/>
          </Switch>
        </Router>
    </div>
    )
  }
}

export default App;
