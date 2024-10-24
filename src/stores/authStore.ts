import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (username: string, password: string) => {
    // In a real app, this would make an API call
    if (username === 'demo' && password === 'demo') {
      set({ isAuthenticated: true, user: username });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));