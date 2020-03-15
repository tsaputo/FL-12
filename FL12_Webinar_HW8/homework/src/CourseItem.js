import React from 'react';
import {Link} from 'react-router-dom';

class CourseItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleCourseSave = this.handleCourseSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);


        let courses = this.props.courses;
        let id = this.props.match.params.id;
        let course = {
            id: '',
            date: '',
            name: '',
            description: '',
            duration: '',
            authors: '',
        }
        if (id !== 'new') {   
            course = courses.find(el => el.id === id);
        }
        this.state = course;
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleCourseSave(event) {
        event.preventDefault();
        if (!this.checkRequiredFields(this.state)) {
            alert('Please, fill all required fields!');
            return;
        }
        this.props.onCourseSave(this.state);
        this.props.history.push('/');
    }

    checkRequiredFields(course) {
        return course.name && course.description && course.date && course.authors && course.duration;
    }

    render() { 
        return (
            <div className="popup">
                <form>
                <h1> {this.state.id ? 'Edit' : 'New'} Course</h1>
                    <div className="popup__item">
                        <label>
                            Title*
                            <input 
                                type="text" 
                                defaultValue={this.state.name}
                                name="name"
                                onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="popup__item">
                        <label>
                            Description*
                            <textarea 
                                type="textarea" 
                                defaultValue={this.state.description}
                                name="description" 
                                cols={40} 
                                rows={10}
                                onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="popup__items">
                        <div className="popup__item">
                            <label>
                                Duration*
                                <input 
                                    type="text" 
                                    defaultValue={this.state.duration}
                                    name="duration"
                                    onChange={this.handleInputChange} />
                            </label>
                            <label>
                                Authors*
                                <input 
                                    type="text" 
                                    defaultValue={this.state.authors}
                                    name="authors" 
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                        <div className="popup__item">
                            <label>
                            Date*
                            <input 
                                type="date"
                                name="date" 
                                onChange={this.handleInputChange}/>
                            </label>
                        </div>
                    </div>
                    
                    <div className="button__items">
                        <button className="mainButton" onClick={this.handleCourseSave}>Save</button>
                        <Link to="/"><button className="mainButton">Cancel</button></Link>
                    </div>
                </form>
            </div>
        );
        }
  }
  
export default CourseItem;
