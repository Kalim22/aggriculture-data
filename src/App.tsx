import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import data from "./assets/constants/Manufac _ India Agro Dataset.json";
import TableContainer from "./components/TableContainer";

// import function from utils of max min data and average crop yeild
import { averageData, maxMinData } from "./utils/function";
// import types of state
import { MaxMinProps, averageDataProps } from "./assets/constants/types";

const App: React.FC = () => {
  const [maxMinValues, setMaxMinValues] = useState<MaxMinProps[]>([]);
  const [averageValues, setAverageValues] = useState<averageDataProps[]>([]);

  useEffect(() => {
    const subscribe1 = maxMinData(data);
    setMaxMinValues(subscribe1);
    const subscribe2 = averageData(data);
    setAverageValues(subscribe2);
  }, []);

  return (
    <section>
      <h1>Maximum and Minimum Production of every year from 1950 to 2020</h1>
      <div className="table__container">
        <TableContainer
          heading1="Year"
          heading2="Crop with Maximum Production in that Year"
          heading3="Crop with Minimum Production in that Year"
        >
          {maxMinValues &&
            maxMinValues?.map((ele, idx: number) => (
              <Table.Tr key={idx}>
                <Table.Td>{ele?.year}</Table.Td>
                <Table.Td>{ele?.maxCrop}</Table.Td>
                <Table.Td>{ele?.minCrop}</Table.Td>
              </Table.Tr>
            ))}
        </TableContainer>
      </div>
      <h2>Average of Yield and Cultivation Area of the Crop between 1950-2020</h2>
      <div className="table__container">
        <TableContainer
          heading1="Year"
          heading2="Average Yield of the Crop between 1950-2020"
          heading3="Average Cultivation Area of the Crop between 1950-2020">
          {averageValues &&
            averageValues?.map((ele, idx) => (
              <Table.Tr key={idx}>
                <Table.Td>{ele?.crop}</Table.Td>
                <Table.Td>{ele?.averageYield.toFixed(3)}</Table.Td>
                <Table.Td>{ele?.averageArea.toFixed(3)}</Table.Td>
              </Table.Tr>
            ))}
        </TableContainer>
      </div>
    </section>
  );
};

export default App;
