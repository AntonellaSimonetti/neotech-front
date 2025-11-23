import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import "./User.css";

export default function Profile() {
  const { profile, loading, updateProfile, changePassword } = useProfile();
  const [form, setForm] = useState({});
  const [pwd, setPwd] = useState({
    currentPassword: "",
    newPassword: ""
  });

  if (loading) return <p>Cargando perfil...</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPwd({ ...pwd, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(form);
    alert("Perfil actualizado");
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const res = await changePassword(pwd.currentPassword, pwd.newPassword);
    alert(res.message || "Contraseña actualizada");
  };

  return (
    <div className="user-container">
      <h1 className="user-title">Mi Perfil</h1>

      {/* DATOS DEL PERFIL */}
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="field-group">
          <label>Nombre</label>
          <input
            name="nombre"
            defaultValue={profile.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Email</label>
          <input
            name="email"
            defaultValue={profile.email}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Teléfono</label>
          <input
            name="telefono"
            defaultValue={profile.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label>Dirección</label>
          <input
            name="direccion"
            defaultValue={profile.direccion}
            onChange={handleChange}
          />
        </div>

        <button className="user-btn">Guardar cambios</button>
      </form>

      {/* CONTRASEÑA */}
      <h2 className="user-subtitle">Cambiar contraseña</h2>

      <form className="profile-form" onSubmit={handlePasswordSubmit}>
        <div className="field-group">
          <label>Contraseña actual</label>
          <input
            type="password"
            name="currentPassword"
            onChange={handlePasswordChange}
          />
        </div>

        <div className="field-group">
          <label>Nueva contraseña</label>
          <input
            type="password"
            name="newPassword"
            onChange={handlePasswordChange}
          />
        </div>

        <button className="user-btn">Actualizar contraseña</button>
      </form>
    </div>
  );
}
