import React from 'react';
    import { useCart } from '../contexts/CartContext';
    import { Link } from 'react-router-dom';

    const CartPage: React.FC = () => {
      const { cartItems, removeFromCart, clearCart } = useCart();

      if (cartItems.length === 0) {
        return (
          <div className="container-fluid">
            <h1>Keranjang Belanja</h1>
            <p className="text-warning">Keranjang belanja Anda kosong.</p>
            <Link to="/products" className="btn btn-primary">Kembali ke Daftar Produk</Link>
          </div>
        );
      }

      return (
        <div className="container-fluid">
          <h1>Keranjang Belanja</h1>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.product.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.product.name}</strong> ({item.quantity}) - Rp {(item.product.price * item.quantity).toLocaleString()}
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.product.id)}>
                  <i className="fas fa-trash"></i> Hapus
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Total: Rp {cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0).toLocaleString()}</strong>
            </div>
            <button className="btn btn-danger" onClick={clearCart}>
              <i className="fas fa-trash-alt mr-1"></i> Kosongkan Keranjang
            </button>
            <button className="btn btn-success ml-2">
              <i className="fas fa-check mr-1"></i> Checkout
            </button>
          </div>
          <div className="mt-3">
            <Link to="/products" className="btn btn-secondary">Kembali ke Daftar Produk</Link>
          </div>
        </div>
      );
    };

    export default CartPage;