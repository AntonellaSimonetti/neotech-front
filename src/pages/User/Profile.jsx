import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";

export default function Profile() {
  const { profile, loading, updateProfile } = useProfile();
  const [form, setForm] = useState({});

  if (loading) return <p>Cargando perfil...</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(form);
    alert("Perfil actualizado");
  };

  return (
    <div className="user-container">
      <h1 className="user-title">Mi Perfil</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          className="admin-input"
          name="nombre"
          defaultValue={profile.nombre}
          onChange={handleChange}
        />
        <input
          className="admin-input"
          name="email"
          defaultValue={profile.email}
          onChange={handleChange}
        />
        <input
          className="admin-input"
          name="telefono"
          defaultValue={profile.telefono}
          onChange={handleChange}
        />
        <input
          className="admin-input"
          name="direccion"
          defaultValue={profile.direccion}
          onChange={handleChange}
        />

        <button className="admin-btn">Guardar cambios</button>
      </form>
    </div>
  );
}
