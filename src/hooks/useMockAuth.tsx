import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { mockAuthAPI, User } from '@/lib/mockAuth';
import { useToast } from '@/hooks/use-toast';

export type UserRole = 'patient' | 'health_worker';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signUp: (email: string, password: string, fullName: string, role: 'patient' | 'health_worker') => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: (role: 'patient' | 'health_worker') => Promise<User | null>;
  logout: () => void;
  updateProfilePicture: (imageUrl: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const MockAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing session on app load
  useEffect(() => {
    const checkSession = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const response = await mockAuthAPI.validateSession(token);
          if (response.success && response.user) {
            setUser(response.user);
          } else {
            localStorage.removeItem('auth_token');
          }
        } catch (error) {
          localStorage.removeItem('auth_token');
        }
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await mockAuthAPI.login(email, password);
      
      if (response.success && response.user && response.token) {
        setUser(response.user);
        localStorage.setItem('auth_token', response.token);
        
        toast({
          title: "Sign in successful",
          description: response.message || "Welcome back!",
        });
      } else {
        toast({
          title: "Sign in failed",
          description: response.message || "Invalid credentials",
          variant: "destructive",
        });
        throw new Error(response.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, displayName: string, role: UserRole) => {
    setLoading(true);
    try {
      const response = await mockAuthAPI.register(email, password, displayName, role);
      
      if (response.success && response.user && response.token) {
        // Don't auto-login after registration for security
        toast({
          title: "Account created successfully",
          description: response.message || "You can now sign in with your credentials.",
        });
        
        return response.user;
      } else {
        toast({
          title: "Sign up failed",
          description: response.message || "Registration failed",
          variant: "destructive",
        });
        throw new Error(response.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async (role: UserRole) => {
    setLoading(true);
    try {
      const response = await mockAuthAPI.googleSignIn(role);
      
      if (response.success && response.user && response.token) {
        setUser(response.user);
        localStorage.setItem('auth_token', response.token);
        
        toast({
          title: "Google sign in successful",
          description: response.message || "Welcome!",
        });
        
        return response.user;
      } else {
        toast({
          title: "Google sign in failed",
          description: response.message || "Authentication failed",
          variant: "destructive",
        });
        throw new Error(response.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    toast({
      title: "Signed out successfully",
      description: "You have been logged out.",
    });
  };

  const updateProfilePicture = (imageUrl: string) => {
    if (user) {
      const updatedUser = { ...user, profilePicture: imageUrl };
      setUser(updatedUser);
      
      // Update the token with new user data
      const token = localStorage.getItem('auth_token');
      if (token) {
        try {
          const payload = JSON.parse(atob(token));
          payload.user = updatedUser;
          const newToken = btoa(JSON.stringify(payload));
          localStorage.setItem('auth_token', newToken);
        } catch (error) {
          console.error('Error updating profile picture in token:', error);
        }
      }
      
      toast({
        title: "Profile picture updated",
        description: "Your profile picture has been changed successfully.",
      });
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    updateProfilePicture,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useMockAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useMockAuth must be used within a MockAuthProvider');
  }
  return context;
};
