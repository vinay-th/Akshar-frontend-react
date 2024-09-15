import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AdminDashboard from '../pages/AdminDashboard';

const AdminDashboardWrapper = () => {
  return (
    <Provider store={store}>
      <AdminDashboard />
    </Provider>
  );
};

export default AdminDashboardWrapper;
