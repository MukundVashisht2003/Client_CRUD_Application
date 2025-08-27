import React, { useEffect, useState } from 'react';
import { useEmployeeStore } from '../store';
import { fetchEmployeesByDepartment } from '../api';
import EmployeeList from '../components/EmployeeList';
import DepartmentSelect from '../components/DepartmentSelect';

const departments = ['HR', 'IT', 'Finance'];

const Dashboard: React.FC<{ onSelectEmployee: (id: string) => void }> = ({ onSelectEmployee }) => {
  const setEmployees = useEmployeeStore((s) => s.setEmployees);
  const employees = useEmployeeStore((s) => s.employees);
  const [department, setDepartment] = useState(departments[0]);

  useEffect(() => {
    fetchEmployeesByDepartment(department).then(setEmployees);
  }, [department, setEmployees]);

  return (
    <div className="dashboard-container">
      <h2>Employee Dashboard</h2>
      <DepartmentSelect
        departments={departments}
        selected={department}
        onChange={setDepartment}
      />
      <EmployeeList employees={employees} onSelect={onSelectEmployee} />
    </div>
  );
};

export default Dashboard;
