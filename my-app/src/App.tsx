import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Persons from './components/Persons';
import Message from './components/Message';
import Button from './components/Button';
import InputFile from './components/Input';
import Loggin from './components/state/Loggin';
import ThemeContextProvider from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import Details from './components/Details';
import Table from './reusables/Table';
import {User, data, columns} from './reusables/Object';




function App() {
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Diana',
      last: 'Prince'
    }

  ]

  return (
    <div className="App">
      <Greet name="lanre" messageCount={3} />
      <Persons names={nameList} />
      <Message status='success' />
      <Button handleClick={(event, id) => {
        console.log('clicked', event, id);
      }} />
      <InputFile value='' handleChange={(event) => {
        console.log("value", event.target.value);
      }} />
      <Loggin />
      <Details />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>


      <div className="container mx-auto p-4">
        <Table<User> columns={columns} data={data} />
      </div>
    </div>
  );
}

export default App;


