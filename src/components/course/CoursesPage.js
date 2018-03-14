import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: { title: '' }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.tile = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave(){
    this.props.dispatch(courseAction.createCourse(this.state.course));
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
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

CoursesPage.propTypes = {
  dispatch: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(CoursesPage);
