import React, { useEffect, useState } from 'react';
import { fetchEmployeeById } from '../api';

interface Props {
  id: string;
  onBack: () => void;
}

const EmployeeDetails: React.FC<Props> = ({ id, onBack }) => {
  const [employee, setEmployee] = useState<any>(null);

  useEffect(() => {
    fetchEmployeeById(id).then(setEmployee);
  }, [id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div className="employee-details">
      <button onClick={onBack}>Back</button>
      <h2>{employee.name}</h2>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Position:</strong> {employee.position}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
    </div>
  );
};

export default EmployeeDetails;
