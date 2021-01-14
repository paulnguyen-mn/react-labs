import { Box, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useFieldArray } from 'react-hook-form';
import InputField from './InputField';

ContactListField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

ContactListField.defaultProps = {
  label: '',
  disabled: false,
};

function ContactListField(props) {
  const { name, label, form } = props;
  const { fields, append, remove } = useFieldArray({
    name,
    control: form.control,
  });

  const handleAddClick = () => {
    append({
      name: '',
      phone: '',
    });
  };

  return (
    <Box mt={1} mb={2}>
      {fields.map((field, idx) => (
        <Box key={field.id} my="16px">
          <Typography>
            {label} {idx + 1}
          </Typography>

          <InputField
            name={`${name}[${idx}].name`}
            label="Full Name"
            defaultValue={field.name}
            form={form}
          />

          <InputField
            name={`${name}[${idx}].phone`}
            label="Phone"
            defaultValue={field.phone}
            form={form}
          />

          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: '16px' }}
            onClick={() => remove(idx)}
          >
            Remove
          </Button>
        </Box>
      ))}

      <Button fullWidth variant="outlined" color="primary" onClick={handleAddClick}>
        Add new contact
      </Button>
    </Box>
  );
}

export default ContactListField;
