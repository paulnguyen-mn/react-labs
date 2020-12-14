import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import InputField from 'components/FormFields/InputField';
import RadioField from 'components/FormFields/RadioField';
import SelectField from 'components/FormFields/SelectField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

StudentForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

StudentForm.defaultProps = {
  initialValues: null,
};

function StudentForm({ initialValues, onSubmit }) {
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name.'),
    age: yup.number().required('Please enter your age.'),
    gender: yup.string(),
    city: yup.string(),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || { name: '', age: '', gender: 'male', city: '' },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <form noValidate autoComplete="off" onSubmit={form.handleSubmit(handleFormSubmit)}>
      <Typography component="h2" variant="h5">
        Student Form
      </Typography>

      <InputField name="name" label="Full Name" form={form} />
      <InputField name="age" type="number" label="Age" form={form} />
      <RadioField
        name="gender"
        label="Gender"
        form={form}
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
      />

      <SelectField
        name="city"
        label="City"
        form={form}
        options={[
          { value: 'hcm', label: 'TP. HCM' },
          { value: 'pt', label: 'Phan Thiết' },
          { value: 'td', label: 'Thủ Đức' },
          { value: 'dn', label: 'Đà Nẵng' },
          { value: 'hn', label: 'Hà Nội' },
        ]}
      />

      <Button disabled={isSubmitting} type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default StudentForm;
