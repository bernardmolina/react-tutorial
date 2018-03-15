import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
