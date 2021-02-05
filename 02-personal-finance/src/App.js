import React, { useState } from 'react';

import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import Chart from './components/Chart';
import AddCategory from './components/AddCategory';
import AddTransaction from './components/AddTransaction';

export default function App(){
  return (
    <>
      <Header />
      <TransactionTable />
      <Chart />
      <AddCategory />
      <AddTransaction />
    </>
  )
}