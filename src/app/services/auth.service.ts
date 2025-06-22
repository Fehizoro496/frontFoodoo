import axiosInstance from "../api/axios";
import { AuthResponse, User } from "../types/auth";

export const AuthService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const { data } = await axiosInstance.post<AuthResponse>('/auth/login', {
      email,
      password
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  },

  async me(): Promise<User> {
    const { data } = await axiosInstance.get<User>('/auth/me');
    return data;
  },

  logout() {
    localStorage.removeItem('token');
  }
};

export default AuthService;
