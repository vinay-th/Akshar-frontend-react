import {
  FETCH_CLASSES,
  ADD_CLASS,
  EDIT_CLASS,
  REMOVE_CLASS,
} from '../actions/classDashboardActions';

const initialState = {
  classes: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case EDIT_CLASS:
      return {
        ...state,
        classes: state.classes.map((cls) =>
          cls.srNo === action.payload.srNo ? action.payload : cls
        ),
      };
    case REMOVE_CLASS:
      return {
        ...state,
        classes: state.classes.filter((cls) => cls.srNo !== action.payload),
      };
    default:
      return state;
  }
};

export default dashboardReducer;
