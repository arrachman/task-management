import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CartProvider } from './contexts/CartContext'; // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider> {/* Wrap App dengan CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);