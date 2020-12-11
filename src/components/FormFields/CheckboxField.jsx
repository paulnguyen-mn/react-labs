import { Box, Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

CheckboxField.defaultProps = {
  label: '',
  disabled: false,
};

function CheckboxField(props) {
  const { name, label, form, disabled } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;

  return (
    <Box mt={1} mb={2}>
      <FormControl error={hasError}>
        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <FormControlLabel
              control={
                <Checkbox
                  name={name}
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  onBlur={onBlur}
                  disabled={disabled}
                />
              }
              label={label}
            />
          )}
        />

        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default CheckboxField;
