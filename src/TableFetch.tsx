import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar, ShellBar, Table, TableRow, TableCell, TableGrowing, TableHeaderRow, TableHeaderCell } from '@ui5/webcomponents-react';
import React, { useEffect, useState } from "react";
let skip = 0;
export function TableFetch() {
  const [products, setProducts] = useState([]);

  const fetchMoreData = async () => {
      skip +=20;
    const url = "https://services.odata.org/V3/Northwind/Northwind.svc/Orders?$top=20&$skip=" + skip + "&$format=json"
    const response  = await fetch(url);
    const data = await response.json();
    setProducts(products.concat(data.value));
  };

  useEffect(() => {
    fetch("https://services.odata.org/V3/Northwind/Northwind.svc/Orders?$top=20&$skip=0&$format=json")
    .then((response) => response.json())
    .then((data) => setProducts(data.value))
    .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  return (
    <>
      <ShellBar
        logo={
          <img
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt={'UI5 Web Components for React logo'}
          />
        }
        primaryTitle="Table with Lazy Loading and Northwind Data"
      />
       <Table
       features={<TableGrowing onLoadMore={fetchMoreData} type="Scroll"/>}
       headerRow={<TableHeaderRow sticky><TableHeaderCell><span>Order ID</span></TableHeaderCell><TableHeaderCell ><span>Customer</span></TableHeaderCell><TableHeaderCell ><span>Employee</span></TableHeaderCell><TableHeaderCell><span>Name</span></TableHeaderCell><TableHeaderCell><span>Origin</span></TableHeaderCell></TableHeaderRow>}
                >
        {/* <TableColumn>Order ID</TableColumn>
        <TableColumn>Customer</TableColumn>
        <TableColumn>Employee</TableColumn>
        <TableColumn>Order Date</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Origin</TableColumn>
        <TableColumn>Freight</TableColumn> */}

        {products.map((product) => (
          <TableRow key={product.OrderID}>
            <TableCell>{product.OrderID}</TableCell>
            <TableCell>{product.CustomerID}</TableCell>
            <TableCell>{product.EmployeeID}</TableCell>
            <TableCell>{product.ShipName}</TableCell>
            <TableCell>{product.ShipCountry}</TableCell>
          </TableRow>
        ))}
      </Table>
      {/* <AnalyticalTable
       
        columns={[
        {
          Header: 'Order ID',
          accessor: 'OrderID'
        },
        {
          Header: 'Customer',
          accessor: 'CustomerID'
        },
        {
          Header: 'Employee',
          accessor: 'EmployeeID'
        },
        {
          Header: 'Order Date',
          accessor: 'OrderDate'
        },
        {
          Header: 'Name',
          accessor: 'ShipName'
        },
        {
          Header: 'Origin',
          accessor: 'ShipCountry'
        },
        {
          Header: 'Freight',
          accessor: 'Freight'
        }
      ]}
      scaleWidthMode="Grow"
      data={products}
      > </AnalyticalTable > */}
    </>
  );
}

