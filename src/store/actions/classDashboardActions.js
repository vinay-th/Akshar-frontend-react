export const FETCH_CLASSES = 'FETCH_CLASSES';
export const ADD_CLASS = 'ADD_CLASS';
export const EDIT_CLASS = 'EDIT_CLASS';
export const REMOVE_CLASS = 'REMOVE_CLASS';

const classesData = [
  {
    srNo: 1,
    departmentName: 'Computer Science',
    courseName: 'B.Tech',
    semester: 'SEM III',
    division: 'A',
    classRoom: '101',
  },
];

export const fetchClasses = () => {
  // fetch the data from API
  // rn using the mock data
  return {
    type: FETCH_CLASSES,
    payload: classesData,
  };
};

export const addClass = (newClass) => ({
  type: ADD_CLASS,
  payload: newClass,
});

export const editClass = (updatedClass) => ({
  type: EDIT_CLASS,
  payload: updatedClass,
});

export const removeClass = (classId) => ({
  type: REMOVE_CLASS,
  payload: classId,
});
