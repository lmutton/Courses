import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

//const { meta: { touched, error } } = field; condenses
class PostsNew extends Component {
  renderField(field){
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`

    return (
      <div className={className}>
      <label>{field.label}</label>
        <input
        className="form-control"
        type="text"
          {...field.input}
        />
        <div className="text-help">
        {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
  }

  render () {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <Field
        label="Title"
        name="title"
        component={this.renderField}
      />
      <Field
        label="Categories"
        name="categories"
        component={this.renderField}
      />
      <Field
        label="Post Content"
        name="content"
        component={this.renderField}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link className="btn btn-danger" to="/">Cancel</Link>

      </form>

    );
  }
}

function validate(values) {
  const errors = {};

  // validate the inputs from 'values'
  if(!values.title){
    errors.title = "Enter a title!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories!";
  }
  if(!values.content){
  errors.content = "Enter some content!";
  }
  // if errors is empty, the form is fine to submit
  // if errors has 'any' properties, redux form assumes theres a problem with the form
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);


// 'PostsNewForm' need to be unique
// label property can be anything
