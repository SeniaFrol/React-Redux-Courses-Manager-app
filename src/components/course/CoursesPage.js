import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createCourse } from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }


  courseRow = (course, index) => {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage = () => {
    browserHistory.push('/course');
  }

  render() {
    const { courses } = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps({courses}, ownProps) {
  return {courses};
}


export default connect(mapStateToProps, { createCourse })(CoursesPage);
