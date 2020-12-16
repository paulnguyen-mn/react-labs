import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@material-ui/core';
import InputField from 'components/FormFields/InputField';
import OptionField from 'components/FormFields/OptionField';
import RadioField from 'components/FormFields/RadioField';
import RandomPhotoField from 'components/FormFields/RandomPhotoField';
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
    name: yup
      .string()
      .required('Please enter your name.')
      .test('at least 2 words of 3 characters', 'Name is too short.', (value) => {
        return value.split(' ').filter((x) => x.length >= 3).length >= 2;
      }),

    age: yup
      .number()
      .required('Please enter your age.')
      .min(18, 'Should be greater than or equal to 18.')
      .when(['level', 'city'], {
        is: (level, city) => city === 'hcm' && level === 'middle',
        then: yup.number().min(25),
      })
      .when(['level', 'city'], {
        is: (level, city) => city === 'hcm' && level === 'senior',
        then: yup.number().min(30),
      }),
    gender: yup.string(),
    city: yup.string(),
  });

  const form = useForm({
    mode: 'onBlur',
    defaultValues: initialValues || {
      name: '',
      age: '',
      gender: 'male',
      city: '',
      level: 'junior',
      avatar: '',
    },
    resolver: yupResolver(schema),
  });

  const avatarUrl = form.watch('avatar');
  console.log(avatarUrl);

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

      <OptionField
        name="level"
        label="Experience level"
        form={form}
        options={[
          { value: 'junior', label: 'Junior' },
          { value: 'middle', label: 'Middle' },
          { value: 'senior', label: 'Senior' },
        ]}
        onChange={() => form.trigger('age')}
      />

      <RandomPhotoField name="avatar" label="Avatar" form={form} />

      <Button disabled={isSubmitting} type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
}

export default StudentForm;
