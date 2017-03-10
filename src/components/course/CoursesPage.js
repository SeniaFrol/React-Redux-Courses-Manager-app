import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createCourse } from '../../actions/courseActions';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
  }

  onTitleChange = (e) => {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({ course });
  }

  onClickSave = () => {
    this.props.createCourse(this.state.course);
  }

  courseRow = (course, index) => {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add coure</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps({courses}, ownProps) {
  return {courses};
}


export default connect(mapStateToProps, { createCourse })(CoursesPage);
