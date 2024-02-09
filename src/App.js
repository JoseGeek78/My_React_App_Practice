function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
  );
}

export default function MyApp() {
  return (
    <div class='app'>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div>
  );
}