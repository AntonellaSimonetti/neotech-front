import { useCart } from "../../hooks/useCart";

export default function Cart() {
  const {
    cart,
    loading,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  if (loading) return <p>Cargando carrito...</p>;

  const total = cart.reduce(
    (acc, item) => acc + item.productId.precio * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>

      {cart.length === 0 ? <p>El carrito está vacío</p> : null}

      {cart.map(item => (
        <div key={item.productId._id} className="cart-item">
          
          <img
            src={item.productId.imagen}
            className="cart-img"
            alt={item.productId.nombre}
          />

          <div className="cart-info">
            <h3>{item.productId.nombre}</h3>
            <p>${item.productId.precio}</p>

            <div className="cart-qty">
              <button onClick={() => updateQuantity(item.productId._id, item.quantity - 1)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => updateQuantity(item.productId._id, item.quantity + 1)}>
                +
              </button>
            </div>

            <button
              className="cart-remove"
              onClick={() => removeFromCart(item.productId._id)}
            >
              Eliminar
            </button>
          </div>

        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2 className="cart-total">Total: ${total}</h2>

          <button className="cart-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
