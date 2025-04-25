import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import './LoginPage.css'; // Import file CSS khusus untuk LoginPage

interface LoginPageProps {
    onLogin: (user: { username: string; password: string }) => void;
    isAuthenticated: boolean;
}
const LoginPage: React.FC<LoginPageProps> = ({ onLogin, isAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    
    useEffect(() => {
        document.body.classList.add('login-page-active'); // Tambahkan class saat komponen dipasang
        return () => {
            document.body.classList.remove('login-page-active'); // Hapus class saat komponen dilepas
        };
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard'); // Redirect ke halaman tugas jika sudah login
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isLoggedIn = login(username, password);
        if (isLoggedIn) {
            onLogin({ username, password });
            navigate('/dashboard'); // Arahkan ke dashboard setelah login berhasil
        } else {
            setError('Kredensial tidak valid.');
        }
    };

      return (
        <div className="login-page">
          <div className="login-box">
            <div className="card card-outline card-primary">
              <div className="card-header text-center">
                <Link to="/login" className="h1"><b>Task Management</b></Link>
              </div>
              <div className="card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                {error && <p className="text-danger">{error}</p>}
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* /.col */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                    {/* /.col */}
                  </div>
                </form>

                <p className="mb-0">
                  <Link to="/register" className="text-center">Register a new membership</Link>
                </p>
              </div>
              {/* /.login-card-body */}
            </div>
          </div>
          {/* /.login-box */}
        </div>
      );
    };

    export default LoginPage;