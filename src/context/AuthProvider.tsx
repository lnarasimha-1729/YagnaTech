// context/AuthProvider.tsx
import { useState, ReactNode } from "react";
import { login, register, getProfile, logout } from "../api/authApi";
import { AuthContext } from "./AuthContext";

interface User {
  userId: string;
  id?: string;
  email: string;
  name: string;
  phone: string;
  dob: string;
  gender: string;
  role: string | null;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
  dob?: string;
  gender?: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginUser: (credentials: LoginCredentials) => Promise<void>;
  registerUser: (data: RegisterData) => Promise<void>;
  logoutUser: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Manual auth check - only call this when needed
  const checkAuth = async () => {
    try {
      setLoading(true);
      const res = await getProfile();
      setUser(res.data);
    } catch (err: unknown) {
      // Silently handle 401 - normal when not logged in
      interface ErrorWithResponse {
        response?: {
          status?: number;
        };
      }

      // ✅ FIXED: Check if status is NOT 401 (log other errors, ignore 401)
      if (
        typeof err === "object" &&
        err !== null &&
        "response" in err &&
        typeof (err as ErrorWithResponse).response?.status === "number" &&
        (err as ErrorWithResponse).response?.status !== 401
      ) {
        console.error("Auth check failed:", err);
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      const res = await login(credentials);

      // After login, fetch full profile
      const profileRes = await getProfile();
      setUser(profileRes.data);
    } catch (err) {
      setUser(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data: RegisterData) => {
    try {
      setLoading(true);
      const res = await register(data);
      
      if (!res.data?.user) {
        throw new Error("Registration failed: user data missing");
      }
      
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      setLoading(true);
      await logout();
    } finally {
      setUser(null);
      setLoading(false);
    }
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    loginUser,
    registerUser,
    logoutUser,
    checkAuth
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};