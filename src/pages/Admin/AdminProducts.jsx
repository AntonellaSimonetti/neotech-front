import { useState } from "react";
import { useAdminProducts } from "../../hooks/useAdminProducts";
import "./Admin.css";

export default function AdminProducts() {
  const { products, loading, error, createProduct, updateProduct, deleteProduct } =
    useAdminProducts();

  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    stock: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateProduct(editId, form);
      setEditId(null);
    } else {
      await createProduct(form);
    }

    setForm({
      nombre: "",
      descripcion: "",
      precio: "",
      categoria: "",
      stock: "",
      imagen: "",
    });
  };

  const handleEdit = (product) => {
    setEditId(product._id);
    setForm({
      nombre: product.nombre,
      descripcion: product.descripcion,
      precio: product.precio,
      categoria: product.categoria,
      stock: product.stock,
      imagen: product.imagen,
    });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Gestión de Productos</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="admin-input"
        />
        <input
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="admin-input"
        />
        <input
          name="precio"
          value={form.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="admin-input"
        />
        <input
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          placeholder="Categoría"
          className="admin-input"
        />
        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="admin-input"
        />
        <input
          name="imagen"
          value={form.imagen}
          onChange={handleChange}
          placeholder="URL Imagen"
          className="admin-input"
        />

        <button className="admin-btn">
          {editId ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </form>

      <h2 className="admin-subtitle">Listado de Productos</h2>

      {loading && <p>Cargando productos...</p>}
      {error && <p className="auth-error">{error}</p>}

      {/* escritorio*/}
      <table className="admin-table admin-table-desktop">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>
                <img src={p.imagen} alt={p.nombre} className="admin-img" />
              </td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>{p.categoria}</td>
              <td>{p.stock}</td>
              <td>
                <button
                  className="admin-edit-btn"
                  onClick={() => handleEdit(p)}
                >
                  Editar
                </button>
                <button
                  className="admin-delete-btn"
                  onClick={() => deleteProduct(p._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* celulares */}
      <div className="products-mobile-list">
        {products.map((p) => (
          <div key={p._id} className="product-card-mobile">
            <img src={p.imagen} alt={p.nombre} className="admin-img" />

            <p><strong>Nombre:</strong> {p.nombre}</p>
            <p><strong>Precio:</strong> ${p.precio}</p>
            <p><strong>Categoría:</strong> {p.categoria}</p>
            <p><strong>Stock:</strong> {p.stock}</p>

            <div className="mobile-actions">
              <button
                className="admin-edit-btn"
                onClick={() => handleEdit(p)}
              >
                Editar
              </button>

              <button
                className="admin-delete-btn"
                onClick={() => deleteProduct(p._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
