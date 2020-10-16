import React, { useEffect, useState } from 'react';
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import Income from './types';
import IncomeList from './components/IncomeList';

function App() {

  const [income, setIncome] = useState<Income[]>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);

  useEffect(() => {
    let temp = 0;

    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <Header totalIncome={totalIncome}/>
      <IncomeForm income={income} setIncome={setIncome}/>
      <IncomeList incomes={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
