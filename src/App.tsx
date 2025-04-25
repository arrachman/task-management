import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskManagementPage from './pages/TaskManagementPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import DashboardPage from './pages/DashboardPage';
import { useCart } from './contexts/CartContext';
import './App.css'

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: false,
  login: () => false,
  logout: () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username: string, password: string): boolean => {
    // Simulasi otentikasi (default: admin/admin)
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      return true;
    }

    const users = localStorage.getItem('users');
    if (users) {
      const usersObject = JSON.parse(users);
      if (usersObject[username] === password) {
        setIsLoggedIn(true);
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userSession');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// HOC (Higher-Order Component) untuk melindungi rute
function RequireAuth({ children }: { children: React.ReactNode }) {
  const storedUser = localStorage.getItem('userSession');
  return storedUser ? children : <Navigate to="/" />;
}

interface User {
  username: string;
  password: string;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Efek untuk memeriksa sesi saat komponen App pertama kali di-mount
  useEffect(() => {
    const storedUser = localStorage.getItem('userSession');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Fungsi untuk menyimpan informasi pengguna ke sesi
  const setUserSession = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('userSession', JSON.stringify(user));
  };

  const setUsers = (newUser: User) => {
    let usersObject: Record<string, string> = {};
    try {
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        usersObject = JSON.parse(storedUsers);
        if (typeof usersObject !== 'object' || usersObject === null) {
          usersObject = {};
        }
      }
    } catch (e) {
      usersObject = {};
    }
    usersObject[newUser.username] = newUser.password;
    localStorage.setItem('users', JSON.stringify(usersObject));
  };

  // Fungsi untuk menghapus sesi (logout)
  const clearUserSession = () => {
    setCurrentUser(null);
    localStorage.removeItem('userSession');
    const navigate = useNavigate(); // Hook untuk navigasi
    navigate('/'); // Redirect ke halaman login setelah logout
  };
  
    return (
      <Router>
        <AuthProvider>
          <div className="wrapper">
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              {/* Brand Logo */}
              <Link to="/" className="brand-link">
                <span className="brand-text font-weight-light">Admin Panel</span>
              </Link>

              {/* Sidebar */}
              <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li className="nav-item">
                      <Link to="/dashboard" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                          Dashboard
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/tasks" className="nav-link">
                        <i className="nav-icon fas fa-tasks"></i>
                        <p>
                          Tasks
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/products" className="nav-link">
                        <i className="nav-icon fas fa-box"></i>
                        <p>
                          Products
                        </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/cart" className="nav-link"> {/* Link ke Cart */}
                      <i className="nav-icon fas fa-shopping-cart"></i>
                      <p>
                        Cart
                        <span className="badge badge-info right">{useCart()?.cartItems.length || 0}</span>
                      </p>
                    </Link>
                    </li>
                    {/* Tombol Logout */}
                    <li className="nav-item">
                      <Link to="/login" className="nav-link" onClick={() => {
                        clearUserSession();
                        
                        const authContext = React.useContext(AuthContext);
                        authContext.logout();
                      }}>
                        <i className="nav-icon fas fa-sign-out-alt"></i>
                        <p>
                          Logout
                        </p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div>
              {/* /.sidebar */}
            </aside>

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
              
              {/* Main content */}
              <div className="content">
                <div className="container-fluid">
                  <Routes>
                    <Route path="/login" element={<LoginPage onLogin={setUserSession} isAuthenticated={!!currentUser} />} />
                    <Route path="/register" element={<RegisterPage onRegister={setUsers} isAuthenticated={!!currentUser} />} />
                    {/* Rute yang dilindungi */}
                    <Route path="/" element={<RequireAuth><DashboardPage /></RequireAuth>} />
                    <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
                    <Route path="/tasks" element={<RequireAuth><TaskManagementPage /></RequireAuth>} />
                    <Route path="/products" element={<RequireAuth><ProductListPage /></RequireAuth>} />
                    <Route path="/products/:id" element={<RequireAuth><ProductDetailPage /></RequireAuth>} />
                    <Route path="/cart" element={<RequireAuth><CartPage /></RequireAuth>} />
                  </Routes>
                </div>{/* /.container-fluid */}
              </div>{/* /.content */}
            </div>{/* /.content-wrapper */}

            {/* Main Footer */}
            <footer className="main-footer">
              <strong>Copyright &copy; 2025 Your Company.</strong> All rights reserved.
            </footer>
          </div>{/* ./wrapper */}
        </AuthProvider>
      </Router>
    );
  }

  export default App;