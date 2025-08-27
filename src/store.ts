import { create } from 'zustand';

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  phone: string;
}

interface EmployeeState {
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
  selectedEmployee: Employee | null;
  setSelectedEmployee: (employee: Employee | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  setEmployees: (employees) => set({ employees }),
  selectedEmployee: null,
  setSelectedEmployee: (employee) => set({ selectedEmployee: employee }),
}));
