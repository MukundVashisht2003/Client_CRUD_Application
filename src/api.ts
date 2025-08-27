import axios from 'axios';
import { useAuthStore } from './store';

const API_BASE = 'https://localhost:7216'; // Change if needed

export const login = async (id: string, password: string) => {
  const res = await axios.post(`${API_BASE}/auth/login`, { id, password });
  return res.data.token;
};

export async function fetchEmployeesByDepartment(department: string) {
  const token = useAuthStore.getState().token;
  const response = await axios.get(`${API_BASE}/employee/department/${department}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function fetchEmployeeById(id: string) {
  const token = useAuthStore.getState().token;
  const response = await axios.get(`${API_BASE}/employee/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
