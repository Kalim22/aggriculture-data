import React from "react";
import { Table } from "@mantine/core";
import "@mantine/core/styles.css";

type Tableprops = {
  heading1: string,
  heading2: string,
  heading3: string,
  children: React.ReactNode
}

const TableContainer = ({heading1, heading2, heading3, children}: Tableprops) => {
  return (
    <Table
      striped
      highlightOnHover
      withColumnBorders
      withTableBorder
      horizontalSpacing={"md"}
      verticalSpacing={"lg"}
    >
      <Table.Thead
      className="table__thead"
      >
        <Table.Tr>
          <Table.Th>{heading1}</Table.Th>
          <Table.Th>{heading2}</Table.Th>
          <Table.Th>{heading3}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {children}
      </Table.Tbody>
    </Table>
  );
};

export default TableContainer;
