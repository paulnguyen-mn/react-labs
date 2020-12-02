import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  label: '',
  disabled: false,
};

function InputField(props) {
  const { name, label, form, disabled } = props;
  const { errors } = form;
  console.log({ errors });
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      {/* <Controller
        name={name}
        control={form.control}
        as={TextField}
        fullWidth
        label={label}
        disabled={disabled}
        variant="outlined"
      /> */}

      <Controller
        name={name}
        control={form.control}
        render={({ value, onChange, onBlur }) => (
          <TextField
            fullWidth
            type="text"
            name={name}
            value={value}
            // onChange={(e) => onChange(e.target.value.toUpperCase())}
            onChange={onChange}
            onBlur={onBlur}
            label={label}
            disabled={disabled}
            variant="outlined"
            error={hasError}
            helperText={errorMessage}
          />
        )}
      />
    </Box>
  );
}

export default InputField;
