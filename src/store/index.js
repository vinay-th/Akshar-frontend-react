import { createStore, combineReducers } from 'redux';
import classDashboardReducer from './reducers/classDashboardReducer';

const rootReducer = combineReducers({
  dashboard: classDashboardReducer,
});

const store = createStore(rootReducer);

export default store;
