import "./App.css";
import Card from "./components/Card";

function App() {
  const name1 = {
    id: "Ravi Kumar",
    class: 12,
  };
  const name2 = {
    id: "Raja Kumar",
    class: 12,
  };

  return (
    <>
      <h1 className="bg-amber-400 rounded-xl ">Tailwind Test</h1>
      <Card name={name1} />
      <Card name={name2} />
    </>
  );
}

export default App;
