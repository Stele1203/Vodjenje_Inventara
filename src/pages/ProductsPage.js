import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    quantity: 10,
    image: "https://source.unsplash.com/random/200x200?sig=1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    quantity: 5,
    image: "https://source.unsplash.com/random/200x200?sig=2",
  },
];

function ProductsPage() {
  const [products] = useState(sampleProducts);
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Your Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => navigate(`/edit/${product.id}`)}>
              Izmijeni
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = sampleProducts.find((p) => p.id === parseInt(id));
  const [editedProduct, setEditedProduct] = useState(product);

  if (!product) return <h2>Proizvod nije pronađen</h2>;

  const handleChange = (field, value) => {
    setEditedProduct({ ...editedProduct, [field]: value });
  };

  return (
    <div className="edit-container">
      <h2>Izmijeni proizvod</h2>
      <input
        type="text"
        value={editedProduct.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <textarea
        value={editedProduct.description}
        onChange={(e) => handleChange("description", e.target.value)}
      />
      <input
        type="number"
        value={editedProduct.quantity}
        onChange={(e) => handleChange("quantity", Number(e.target.value))}
      />
      <div className="buttons">
        <button onClick={() => navigate(-1)}>Odbaci</button>
        <button onClick={() => navigate(-1)}>Sačuvaj</button>
      </div>
    </div>
  );
}

export { ProductsPage, EditProductPage };
