import "./App.css";

/* Import Components */
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

/* Import function useState() from React */
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div className="wrapper">
          <div>
            <Button counter={counter} setCounter={setCounter} value="-" />
            <span>{counter}</span>
            <Button counter={counter} setCounter={setCounter} value="+" />
          </div>
          <div>
            <Button counter={counter} setCounter={setCounter} value="Reset" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

/* 
Method without components - (onClick method):

function App() {
  // Destructuring - useState return an array of 2 items
  // 1. The default value (value sent)
  // 2. A function which update the counter
  const [counter, setCounter] = useState(0);

  return (
    <div className="wrapper">
      <div>
        <button
          className="minus hidden"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          className="plus hidden"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

*/
