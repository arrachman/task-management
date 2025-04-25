import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulasi pemanggilan API untuk mendapatkan detail produk berdasarkan ID
    setTimeout(() => {
      const sampleProducts: Product[] = [
        { id: 1, name: 'Laptop', description: 'Laptop performa tinggi dengan spesifikasi terbaru.', price: 12000000, imageUrl: 'https://via.placeholder.com/400x300/007bff/ffffff?Text=Laptop' },
        { id: 2, name: 'Mouse', description: 'Mouse gaming ergonomis dengan banyak tombol tambahan.', price: 250000, imageUrl: 'https://via.placeholder.com/400x300/28a745/ffffff?Text=Mouse' },
        { id: 3, name: 'Keyboard', description: 'Keyboard mekanik RGB dengan switch yang responsif.', price: 800000, imageUrl: 'https://via.placeholder.com/400x300/dc3545/ffffff?Text=Keyboard' },
      ];
      const foundProduct = sampleProducts.find((p) => p.id === parseInt(id!));
      if (foundProduct) {
        setProduct(foundProduct);
        setLoading(false);
      } else {
        setError('Produk tidak ditemukan.');
        setLoading(false);
      }
    }, 500); // Simulasi loading
  }, [id]);

  if (loading) {
    return <p>Memuat detail produk...</p>;
  }

  if (error) {
    return <p>Terjadi kesalahan: {error}</p>;
  }

  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return (
    <div className="container-fluid">
      <h1>Detail Produk</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="font-weight-bold">Harga: Rp {product.price.toLocaleString()}</p>
          <button className="btn btn-success">
            <i className="fas fa-shopping-cart"></i> Tambah ke Keranjang
          </button>
          <Link to="/products" className="btn btn-secondary ml-2">Kembali ke Daftar Produk</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;