import React from 'react';
import { useAuthStore } from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmployeeDetails from './pages/EmployeeDetails';

const App: React.FC = () => {
  const token = useAuthStore((s) => s.token);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  if (!token) return <Login />;

  return (
    <div>
      {!selectedId ? (
        <Dashboard onSelectEmployee={setSelectedId} />
      ) : (
        <EmployeeDetails id={selectedId} onBack={() => setSelectedId(null)} />
      )}
    </div>
  );
};

export default App;
