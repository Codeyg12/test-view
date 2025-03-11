
import GithubUsers from "./components/GithubUsers";
import LineGraph from "./components/LineGraph";
import PieChart from "./components/PieChart";
import TestTable from "./components/TestTable";
import TestScenariosChart from "./components/TestScenario";
import TreeMap from "./components/TreeMap";

export default function Home() {
  return (
    <>
    <h1 className="text-center">Test Repo</h1>
      <div className="flex mb-10">
        <PieChart chartData={[{ testType: 'Features', passes: 75, failures: 25 }]} />
        <PieChart chartData={[{ testType: 'Scenarios', passes: 50, failures: 50 }]} />
        <PieChart chartData={[{ testType: 'Steps', passes: 63, failures: 37 }]} />
      </div>
      {/* <GithubUsers /> */}
      {/* <div className="w-1/2">
        <LineGraph />
      </div> */}
      {/* <TreeMap /> */}
      {/* <TestScenariosChart /> */}
      <TestTable />
    </>
  );
}
