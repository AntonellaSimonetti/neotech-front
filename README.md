# Neotech Frontend – React + Vite

## Descripción
Frontend del e-commerce **Neotech**, desarrollado en **React con Vite**.  
Incluye manejo de rutas, vistas públicas y privadas, carrito, wishlist, autenticación, dashboard de administrador y consumo de API vía `VITE_API_URL`.

---

## Funcionalidades Principales
1. Registro e inicio de sesión de usuarios.  
2. Navegación con React Router.  
3. Listado y detalle de productos.  
4. Carrito de compras con actualizaciones en tiempo real.  
5. Wishlist (favoritos).  
6. Panel de usuario (perfil, órdenes).  
7. Panel de administrador (productos, órdenes, usuarios).  
8. Conexión directa al backend mediante variables de entorno.  
9. Diseño responsive.

---

## Tecnologías Utilizadas
- React  
- Vite  
- React Router DOM  
- Axios  
- Context API / Hooks personalizados  
- CSS Modules / estilos propios  

---

## Variables de Entorno

Crear un archivo **.env** en la raíz del proyecto:

```
VITE_API_URL=http://localhost:5000
```

En producción (Vercel):

```
VITE_API_URL=https://tu-backend-deploy.onrender.com
```

---

## Estructura del Proyecto

```
/neotech-front
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── Main.jsx
│   └── Global.css
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## Scripts Disponibles

### Iniciar en desarrollo
```
npm run dev
```

### Crear build de producción
```
npm run build
```


## Instalación y Uso

### 1. Clonar el repositorio
```
git clone https://github.com/AntonellaSimonetti/neotech-front.git
cd neotech-front
```

### 2. Instalar dependencias
```
npm install
```

### 3. Crear archivo `.env`
Agregar:
```
VITE_API_URL=http://localhost:5000
```

### 4. Ejecutar el proyecto
```
npm run dev
```

---


## Contribuidoras
- Antonella Simonetti  
- Clara Farias 

---

