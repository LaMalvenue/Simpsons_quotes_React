import React from "react";
import Navbar from "./components/Navbar/Navbar";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <QuoteList />
    </div>
  );
}

export default App;
