import React from 'react';

interface Employee {
  id: string;
  name: string;
  position: string;
}

const EmployeeList: React.FC<{
  employees: Employee[];
  onSelect: (id: string) => void;
}> = ({ employees, onSelect }) => (
  <ul className="employee-list">
    {employees.map((e) => (
      <li key={e.id} onClick={() => onSelect(e.id)}>
        <span>{e.name}</span> <span>({e.position})</span>
      </li>
    ))}
  </ul>
);

export default EmployeeList;
