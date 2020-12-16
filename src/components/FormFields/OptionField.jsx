import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

OptionField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

OptionField.defaultProps = {
  label: '',
  disabled: false,
  onChange: null,
};

function OptionField(props) {
  const { name, label, form, disabled, options } = props;
  const { errors } = form;
  const errorMessage = errors[name]?.message;
  const hasError = !!errorMessage;
  const externalOnChange = props.onChange || (() => {});

  return (
    <Box mt={1} mb={2}>
      <FormControl component="fieldset" error={hasError}>
        <FormLabel component="legend">{label}</FormLabel>

        <Controller
          name={name}
          control={form.control}
          render={({ value, onChange, onBlur }) => (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              {options.map((option) => (
                <Button
                  type="button"
                  variant={option.value === value ? 'contained' : 'outlined'}
                  onClick={() => {
                    onChange(option.value);
                    externalOnChange(option.value);
                  }}
                  key={option.value}
                  disabled={disabled}
                  onBlur={onBlur}
                >
                  {option.label}
                </Button>
              ))}
            </ButtonGroup>
          )}
        />

        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default OptionField;
