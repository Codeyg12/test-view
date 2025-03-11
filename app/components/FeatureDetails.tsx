"use  client";

import { IconButton, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";

const FeatureDetailsData = [
  {
    scenario: "Validate Login",
    steps: [
      {
        name: "Enter username",
        status: "pass",
      },
      {
        name: "Enter password",
        status: "pass",
      },
      {
        name: "Click submit",
        status: "pass",
      },
    ],
  },
  {
    scenario: "Invalid Password",
    steps: [
      {
        name: "Enter username",
        status: "pass",
      },
      {
        name: "Enter invalid password",
        status: "fail",
      },
      {
        name: "Click submit",
        status: "fail",
      },
    ],
  },
  {
    scenario: "Password Reset",
    steps: [
      {
        name: "Click forgot password",
        status: "pass",
        },
        {
          name: "Enter email",
          status: "pass",
        },
        {
          name: "Click submit",
          status: "pass",
        },
        ],
  }
];

const FeatureDetails = () => {
    const [openScenarios, setOpenScenarios] = useState(Array(FeatureDetailsData.length).fill(false));
    const [openStepsSection, setOpenStepsSection] = useState(Array(FeatureDetailsData.length).fill(false));

    const handleScenarioClick = (index: number) => {
        setOpenScenarios(openScenarios.map((state, i) => (i === index ? !state : state)));
    }

    const handleStepsClick = (index: number) => {
        setOpenStepsSection(openStepsSection.map((state, i) => (i === index ? !state : state)));
    }
    
    return (
      <>
        <Typography className="bg-red-200 pl-3 text-black">
          <span className="font-bold">Feature </span>{" "}
          test/repo/UserLoginTests.feature
        </Typography>
        <Typography className="bg-yellow-50 text-black pl-3 italic">
          Test the user login functionality
        </Typography>
        {FeatureDetailsData.map((scenario, scenarioIndex) => (
          <div key={scenarioIndex}>
            <Typography className={`${scenario.steps.some(step => step.status === "fail") ? "bg-red-100" : "bg-green-100"}  text-black pl-3 ml-2 mt-2`}>
              <span className="font-bold">Scenario</span> {scenario.scenario}
              <IconButton onClick={() => handleScenarioClick(scenarioIndex)}>
                {openScenarios[scenarioIndex] ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
              </IconButton>
            </Typography>
            {openScenarios[scenarioIndex] && (
              <>
                <Typography className={`${scenario.steps.some(step => step.status === "fail") ? "bg-red-100" : "bg-green-100"}   text-black pl-3 font-bold ml-4 my-1`}>
                  Steps
                  <IconButton onClick={() => handleStepsClick(scenarioIndex)}>
                    {openStepsSection[scenarioIndex] ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                  </IconButton>
                </Typography>
                {openStepsSection[scenarioIndex] && (
                  <>
                    {scenario.steps.map((step, stepIndex) => (
                      <div key={stepIndex}>
                        <Typography
                          className={`${
                            step.status === "pass" ? "bg-green-200" : "bg-red-200"
                          } p-1 ml-6 my-1 text-black`}
                        >
                          {step.name}
                        </Typography>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </>
    );
}

export default FeatureDetails;
