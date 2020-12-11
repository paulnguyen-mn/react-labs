import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

StudentList.propTypes = {
  data: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

StudentList.defaultProps = {
  data: [],
  onRemove: null,
  onEdit: null,
};

const useStyles = makeStyles(() => ({
  root: {
    listStyleType: 'none',
    padding: 0,
  },

  item: {
    margin: '1rem 0',
  },
}));

function StudentList({ data, onRemove, onEdit }) {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {data.map((student) => (
        <li className={classes.item} key={student.id}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box flex="1 1 auto">
                  <Typography
                    component="p"
                    variant="body1"
                    style={{ textDecoration: student.completed ? 'line-through' : 'none' }}
                  >
                    {student.name}
                  </Typography>

                  <Typography component="p" variant="body2">
                    Gender: {student.gender}
                  </Typography>

                  <Typography component="p" variant="body2">
                    City: {student.city}
                  </Typography>

                  <Typography component="p" variant="body2">
                    Age: {student.age}
                  </Typography>
                </Box>

                <Box mr={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<Edit />}
                    onClick={() => onEdit && onEdit(student)}
                  >
                    Edit
                  </Button>
                </Box>

                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<Delete />}
                  onClick={() => onRemove && onRemove(student)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
