import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext'; // Import useCart

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // Dapatkan fungsi addToCart dari context

  useEffect(() => {
    // Simulasi pemanggilan API untuk mendapatkan daftar produk
    setTimeout(() => {
      const sampleProducts: Product[] = [
        { id: 1, name: 'Laptop Premium', description: 'Laptop performa tinggi', price: 12000000, imageUrl: 'https://via.placeholder.com/300x200/007bff/ffffff?Text=Laptop' },
        { id: 2, name: 'Mouse Gaming', description: 'Mouse gaming ergonomis', price: 250000, imageUrl: 'https://via.placeholder.com/300x200/28a745/ffffff?Text=Mouse' },
        { id: 3, name: 'Keyboard Mekanik RGB', description: 'Keyboard mekanik RGB', price: 800000, imageUrl: 'https://via.placeholder.com/300x200/dc3545/ffffff?Text=Keyboard' },
      ];
      setProducts(sampleProducts);
    }, 1000); // Simulasi loading selama 1 detik
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-fluid">
      <h1>Daftar Produk</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} /> 
          ))
        ) : (
          <div className="col-12">
            <p className="text-warning">Produk tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;