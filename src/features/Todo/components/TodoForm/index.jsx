import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import CheckboxField from 'components/FormFields/CheckboxField';
import InputField from 'components/FormFields/InputField';
import TextareaField from 'components/FormFields/TextareaField';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

TodoForm.defaultProps = {
  initialValues: {
    value: '',
    description: '',
    completed: false,
  },
};

function TodoForm({ initialValues, onSubmit }) {
  const schema = yup.object().shape({
    value: yup
      .string()
      .required('Please enter what to do.')
      .min(5, 'Should be at least 5 characters.')
      // .email('Please enter a valid email address.')
      .test('should have at least two words', 'Please enter at least two words.', (value) => {
        return value.split(' ').filter((x) => !!x).length >= 2;
      }),

    description: yup.string().when('value', {
      is: (value) => value.toLowerCase() === 'reactjs',
      then: yup.string().required('Please enter description.'),
      otherwise: yup.string(),
    }),

    completed: yup.boolean(),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || { value: '', description: '', completed: false },
    resolver: yupResolver(schema),
  });
  const { setValue } = form;

  // set form values whenever initialValues changes
  useEffect(() => {
    setValue('value', initialValues ? initialValues.value : '');
    setValue('description', initialValues?.description || '');
    setValue('completed', initialValues?.completed || false);
  }, [initialValues, setValue]);

  const handleFormSubmit = (values) => {
    console.log('Form Submit', values);

    if (onSubmit) {
      onSubmit(values);

      form.reset();
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Typography component="h2" variant="h5">
        Todo Form
      </Typography>

      <InputField name="value" label="What is your next thing to do?" form={form} />
      <TextareaField name="description" label="More details about it" form={form} />
      <CheckboxField name="completed" label="I've completed this task!" form={form} />

      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
