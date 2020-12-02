import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormFields/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function TodoForm({ onSubmit }) {
  const schema = yup.object().shape({
    value: yup.string().required('Ê, nhập đi!!! :P '),
  });

  const form = useForm({
    mode: 'onSubmit',
    defaultValues: {
      value: '',
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    console.log('Form Submit', values);

    if (onSubmit) {
      onSubmit(values);

      form.reset();
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField name="value" label="Làm gì nè? 😜" form={form} />
    </form>
  );
}

export default TodoForm;
