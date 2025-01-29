import "./App.css";
import { useLocalStorage } from "./useLocalStorage.ts";

function App() {
  const [value, { setItem, removeItem }] = useLocalStorage("some-key");

  return (
    <div className="container">
      <p>Значение из LocalStorage: {value}</p>
      <div className="buttonContainer">
        <button className="button" onClick={() => setItem("new storage value")}>
          Задать значение
        </button>
        <button className="button" onClick={() => removeItem()}>
          Удалить значение
        </button>
      </div>
    </div>
  );
}

export default App;
