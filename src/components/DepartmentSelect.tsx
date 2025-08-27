import React from 'react';

const DepartmentSelect: React.FC<{
  departments: string[];
  selected: string;
  onChange: (d: string) => void;
}> = ({ departments, selected, onChange }) => (
  <select value={selected} onChange={(e) => onChange(e.target.value)}>
    {departments.map((d) => (
      <option key={d} value={d}>{d}</option>
    ))}
  </select>
);

export default DepartmentSelect;
