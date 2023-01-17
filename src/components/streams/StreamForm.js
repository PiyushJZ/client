import { Field, reduxForm } from 'redux-form';

const StreamForm = (props) => {
  return (
    <form
      className='ui form error'
      onSubmit={props.handleSubmit(props.onSubmitClick)}
    >
      <Field
        name='title'
        component={renderInput}
        label='Stream Title'
      />
      <Field
        name='description'
        component={renderInput}
        label='Enter Description'
      />
      <button className='ui button primary'>Submit</button>
    </form>
  );
};

function renderInput({ input, label, meta }) {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        {...input}
        autoComplete='off'
      />
      {renderError(meta)}
    </div>
  );
}

function renderError({ error, touched }) {
  if (touched && error) {
    return (
      <div className='ui error message'>
        <div className='header'>{error}</div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // the key should be the same as the name of the Field
    errors['title'] = 'You must enter a title';
  }

  if (!formValues.description) {
    // the key should be the same as the name of the Field
    errors['description'] = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);
