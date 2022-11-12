import * as React from 'react';
import { Table,
         Header,
         HeaderRow,
         HeaderCell,
         Body,
         Row,
         Cell,
        } from '@table-library/react-table-library';

import { useTheme }  from '@table-library/react-table-library/theme';
import { TextField } from '@mui/material';
import './App.css';

const THEME = {
  Table: `
    padding: 100px;
    border-collapse: collapse;
    margin: auto;
    `,
  HeaderRow: `
    padding: 50px;
    font-size: 14px;
    background-color: red;
    text-align: center;
    border: 1px solid black;
    `,
  Row: `
    font:size: 14px;
    `,
  BaseCell: `
    font-size: 14px;
    text-align: center;
    border: 1px solid black;
    `
};

const list = [
  {
    itemName: 'Airpods',
    name: 'Steven',
    where: 'ILC',
    contact: 'steven@gmail.com',
  },
  {
    itemName: 'ID',
    name: 'Jason',
    where: 'Hasbrouck',
    contact: 'jason@gmail.com',
  },
  {
    itemName: 'Card',
    name: 'Jasmine',
    where: 'Engineering',
    contact: 'jasmine@gmail.com',
  },
];

const App = () => {
  const theme = useTheme(THEME);
  const [filters, setFilters] = React.useState(['ILC']);
  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFilter = (filter) => {
    filters.includes(filter)
    ? setFilters(filter.filter((value) => value !== filter))
    : setFilters(filter.concat(filter));
  };

  const data = {
    nodes: list.filter((item) => 
    (filters.includes('ILC') && item.where === ('ILC')) &&
    item.itemName.toLowerCase().includes(search.toLowerCase())
    ),
  };
  return (
    <>
    <div className = "filter">
      <label htmlFor = "location">
        include ILC:
        <input
          id = "location"
          type = "checkbox"
          checked = {filters.includes('ILC')}
          onChange = {() => handleFilter('ILC')}
        />
      </label>
    </div>
    <div className = "search">
    <TextField
      id = "filled-basic"
      fullWidth
      label = "Search by item name"
      onChange = {handleSearch}
    />
    </div>
    <Table data = {data} theme = {theme}>
      {(tableList) => (
        <>
        <Header>
          <HeaderRow>
            <HeaderCell>Item Name</HeaderCell>
            <HeaderCell>Personal Name</HeaderCell>
            <HeaderCell>Where</HeaderCell>
            <HeaderCell>Contact</HeaderCell>
          </HeaderRow>
        </Header>
        <Body>
          {tableList.map((item) => (
            <Row key = {item.id} item = {item}>
              <Cell>{item.itemName}</Cell>
              <Cell>{item.name}</Cell>
              <Cell>{item.where}</Cell>
              <Cell>{item.contact}</Cell>
                </Row>
                ))}
        </Body>
        </>
      )}
    </Table>
    </>
  );
};

export default App;
