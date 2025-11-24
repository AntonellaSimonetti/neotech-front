import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";
import "./Contact.css";

import FormInput from "../../components/form-input/FormInput";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) newErrors.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.message.trim())
      newErrors.message = "El mensaje no puede estar vacío";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Contacto</h2>

        {sent && (
          <div className="auth-success">¡Mensaje enviado correctamente!</div>
        )}

        <form onSubmit={handleSubmit} >
          <FormInput
            icon={<User size={18} />}
            labelText={"Nombre"}
            inputType={"text"}
            placeholder={"Juan"}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <FormInput
            icon={<Mail size={18} />}
            labelText={"Email"}
            inputType={"email"}
            placeholder={"ejemplo@gmail.com"}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <FormInput
            icon={<MessageSquare size={18} />}
            labelText={"Mensaje"}
            inputType={"textarea"}
            placeholder={"mensaje"}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button type="submit" className="auth-btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
