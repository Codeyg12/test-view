
import GithubUsers from "./components/GithubUsers";
import LineGraph from "./components/LineGraph";
import PieChart from "./components/PieChart";
import TestTable from "./components/TestTable";
import TestScenariosChart from "./components/TestScenario";
import TreeMap from "./components/TreeMap";

export default function Home() {
  return (
    <>
    {/* https://echarts.apache.org/examples/en/editor.html?c=treemap-sunburst-transition */}
      {/* <div className="flex">
        <PieChart chartData={[{ testType: 'Features', failures: 25, passes: 75 }]} />
        <PieChart chartData={[{ testType: 'Scenarios', failures: 50, passes: 50 }]} />
        <PieChart chartData={[{ testType: 'Steps', failures: 37, passes: 63 }]} />
      </div> */}
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
