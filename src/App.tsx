import React from "react";
import Header from "./components/Header";
import CardsGrid from "./components/CardsGrid";
import { activities } from "./data/activities";
import { Timeframe } from "./types";
import "./App.scss";

function App() {
  const [timeframe, setTimeframe] = React.useState<Timeframe>("daily");

  return (
    <main className="dashboard">
      <Header selectedTimeframe={timeframe} onTimeframeChange={setTimeframe} />
      <CardsGrid activities={activities} timeframe={timeframe} />
    </main>
  );
}

export default App;
