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

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

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
    const validation = validate();

    if (Object.keys(validation).length !== 0) {
      e.preventDefault();
      setErrors(validation);
      return;
    }

    setErrors({});
    setSent(true);
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Contacto</h2>

        {sent && (
          <div className="auth-success">
            ¡Mensaje enviado correctamente!
          </div>
        )}

        <form
          action="https://formspree.io/f/xkgbnlok"
          method="POST"
          onSubmit={handleSubmit}
        >
          <FormInput
            icon={<User size={18} />}
            labelText={"Nombre"}
            inputType={"text"}
            name="name"
            placeholder="Juan"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          {errors.name && <p className="auth-error">{errors.name}</p>}

          <FormInput
            icon={<Mail size={18} />}
            labelText={"Email"}
            inputType={"email"}
            name="email"
            placeholder="ejemplo@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="auth-error">{errors.email}</p>}

          <label className="form-label">
            <MessageSquare size={18} /> Mensaje
          </label>
          <textarea
            className="form-textarea"
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          {errors.message && (
            <p className="auth-error">{errors.message}</p>
          )}

          <button className="auth-btn" type="submit">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
