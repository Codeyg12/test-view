
import Chart from "./components/PieChart";

export default function Home() {
  return (
    <>
      <div className="flex">
        <Chart chartData={[{ testType: 'Features', failures: 25, passes: 75 }]} />
        <Chart chartData={[{ testType: 'Scenarios', failures: 50, passes: 50 }]} />
        <Chart chartData={[{ testType: 'Steps', failures: 37, passes: 63 }]} />
      </div>
    </>
  );
}
