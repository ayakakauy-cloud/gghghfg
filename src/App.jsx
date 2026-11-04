import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Привет! 👋</h1>
      <h2>Мой первый React-сайт</h2>

      <p>
        Я изучаю React и создаю свой первый сайт.
      </p>

      <button onClick={() => alert('Добро пожаловать!')}>
        Нажми меня
      </button>
    </div>
  )
}

export default App