import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormFields/InputField';
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
  },
};

function TodoForm({ initialValues, onSubmit }) {
  const schema = yup.object().shape({
    value: yup.string().required('Ê, nhập đi!!! :P '),
  });

  console.log({ initialValues });

  const form = useForm({
    mode: 'onSubmit',
    defaultValues: initialValues || { value: '' },
    resolver: yupResolver(schema),
  });
  const { setValue } = form;

  useEffect(() => {
    setValue('value', initialValues ? initialValues.value : '');
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
      <InputField name="value" label="Làm gì nè? 😜" form={form} />
    </form>
  );
}

export default TodoForm;
