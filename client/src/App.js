import TimeSeriesChart from "./components/timeSeriesChart"
import TreeChart from "./components/TreeChart"


function App() {
  return (
    <div className="App">
      <TimeSeriesChart height={450} width={800} />
      <TreeChart />
    </div>
  );
}

export default App;
