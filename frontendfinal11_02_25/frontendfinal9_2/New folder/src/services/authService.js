// Authentication service to handle all auth-related operations
export const authService = {
  register: (userData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(user => user.email === userData.email || user.phone === userData.phone);
    
    if (userExists) {
      throw new Error(userExists.email === userData.email ? 'Email already exists' : 'Phone number already exists');
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
  },

  login: (credentials) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      u => (u.email === credentials.email || u.phone === credentials.phone) && u.password === credentials.password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  },

  generateOTP: (emailOrPhone) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem(`otp_${emailOrPhone}`, otp.toString());
    return otp;
  },

  verifyOTP: (emailOrPhone, otp) => {
    const storedOTP = localStorage.getItem(`otp_${emailOrPhone}`);
    return storedOTP === otp;
  },

  resetPassword: (emailOrPhone, newPassword) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(user => {
      if (user.email === emailOrPhone || user.phone === emailOrPhone) {
        return { ...user, password: newPassword };
      }
      return user;
    });
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.removeItem(`otp_${emailOrPhone}`);
  },

  logout: () => {
    localStorage.removeItem('currentUser');
  }
};