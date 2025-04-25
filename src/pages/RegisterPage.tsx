import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import file CSS khusus untuk LoginPage

interface User {
    username: string;
    password: string;
  }

interface RegisterPageProps {
  onRegister: (user: User) => void;
  isAuthenticated: boolean;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegister, isAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
          navigate('/tasks'); // Redirect ke halaman tugas jika sudah login
        }
      }, [isAuthenticated, navigate]);

    useEffect(() => {
        document.body.classList.add('login-page-active'); // Tambahkan class saat komponen dipasang
        return () => {
            document.body.classList.remove('login-page-active'); // Hapus class saat komponen dilepas
        };
    }, []);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            if (password !== confirmPassword) {
                setRegistrationError('Password tidak cocok.');
                return;
            }

            const users = localStorage.getItem('users');
            if (users) {
                const usersObject = JSON.parse(users);
                if (usersObject[username]) {
                    setRegistrationError('Username sudah digunakan.');
                    return;
                }
            }

            const newUser = { username, password };
            onRegister(newUser);
            navigate('/tasks');
        } else {
            alert('Harap isi semua kolom pendaftaran.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                <Link to="/" className="h1"><b>Task Management</b></Link>
                </div>
                <div className="card-body">
                <p className="login-box-msg">Register a new membership</p>
                {registrationError && <p className="text-danger">{registrationError}</p>}
                <form onSubmit={handleRegister}>
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
                        <span className="fas fa-user"></span>
                        </div>
                    </div>
                    </div>
                    <div className="input-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <div className="input-group mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Retype password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </div>
                    </div>
                </form>


                <Link to="/login" className="text-center">I already have a membership</Link>
                </div>
                {/* /.form-box */}
            </div>{/* /.card */}
            </div>
            {/* /.register-box */}
        </div>
    );
};

export default RegisterPage;