const SESSION_KEY = "ticketapp_session";

export const auth = {
  login: (email, password) => {
    // Mock authentication - in real app, call API
    if (email && password) {
      const token = btoa(`${email}:${Date.now()}`);
      localStorage.setItem(SESSION_KEY, token);
      return { success: true, token };
    }
    return { success: false, error: "Invalid credentials" };
  },

  signup: (email, password, name) => {
    // Mock signup
    if (email && password && name) {
      const token = btoa(`${email}:${Date.now()}`);
      localStorage.setItem(SESSION_KEY, token);
      return { success: true, token };
    }
    return { success: false, error: "All fields are required" };
  },

  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  isAuthenticated: () => {
    return localStorage.getItem(SESSION_KEY) !== null;
  },

  getToken: () => {
    return localStorage.getItem(SESSION_KEY);
  },
};
