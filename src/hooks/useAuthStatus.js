 export function useAuthStatus() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return {
    isLogged: !!token,
    isAdmin: user.rol === "admin",
    user
  };
}
