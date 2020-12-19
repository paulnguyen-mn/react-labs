import { Button, Container, Dialog, DialogContent, LinearProgress } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import studentApi from 'api/studentApi';
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from 'themeContext';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function StudentFeature(props) {
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    _sort: 'updatedAt',
    _order: 'desc',
  });
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const { currentTheme: theme } = useContext(ThemeContext);
  console.log({ theme });

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await studentApi.getAll(filters);
        setStudentList(data);
      } catch (error) {
        console.log('Failed to fetch student list:', error);
      }
    })();
  }, [filters]);

  const handleEditClick = (student) => {
    setSelectedStudent({
      gender: '',
      city: '',
      level: 'junior',
      avatar: '',
      ...student,
    });
    setOpen(true);
  };

  const handleSubmit = async (values) => {
    const isAdd = !selectedStudent;
    if (isAdd) {
      await studentApi.add(values);
      // re-fetch student list with current filters
      setFilters((x) => ({ ...x }));
      setOpen(false);
      return;
    }

    // Edit mode
    try {
      setSubmitting(true);

      values.id = selectedStudent.id;
      const updatedStudent = await studentApi.update(values);

      // Update student item
      setStudentList((currentList) => {
        const newList = [...currentList];
        const updatedIdx = newList.findIndex((x) => x.id === selectedStudent.id);
        if (updatedIdx < 0) return currentList;

        // clone todo item
        newList[updatedIdx] = {
          ...newList[updatedIdx],
          ...updatedStudent,
        };

        return newList;
      });
      setSelectedStudent(null);

      // Close dialog
      setOpen(false);
    } catch (error) {
      console.log('Failed to update student', error);
    }

    setSubmitting(false);
  };

  const handleAddClick = () => setOpen(true);

  const handleRemoveClick = async (student) => {
    try {
      const message = `Are you sure to remove student named "${student.name}"? 😭`;
      if (window.confirm(message)) {
        await studentApi.remove(student.id);
        setFilters((x) => ({ ...x }));
      }
    } catch (error) {
      console.log('Failed to remove student: ', error);
    }
  };

  return (
    <div style={{ backgroundColor: theme.primaryColor, transition: 'all .25s' }}>
      <Container fixed>
        <h2>STUDENT FEATURE</h2>

        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleAddClick}>
          Add new student
        </Button>

        <StudentList data={studentList} onEdit={handleEditClick} onRemove={handleRemoveClick} />

        <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          {submitting && <LinearProgress />}

          <DialogContent>
            <StudentForm initialValues={selectedStudent} onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
}

export default StudentFeature;
