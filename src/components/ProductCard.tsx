import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void; // Tambahkan definisi onAddToCart di sini
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={product.imageUrl} className="card-img-top" alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description.substring(0, 50)}...</p>
          <p className="card-text">Harga: Rp {product.price.toLocaleString()}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/products/${product.id}`} className="btn btn-sm btn-info">Lihat Detail</Link>
            <button className="btn btn-sm btn-success" onClick={() => onAddToCart(product)}>
              <i className="fas fa-shopping-cart mr-1"></i> Tambah Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;