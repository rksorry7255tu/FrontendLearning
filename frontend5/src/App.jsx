import "./App.css";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const data = useCurrencyInfo("usd");
  console.log(data);

  return (
    <>
      <h1 className="text-3xl bg-orange-500">Currency app with chai.</h1>
    </>
  );
}

export default App;
