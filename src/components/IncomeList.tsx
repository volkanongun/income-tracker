import React from 'react';
import Income from '../types';
import IncomeItem from './IncomeItem';

interface Props {
  incomes: Income[];
  setIncome: any;
}

const IncomeList: React.FC<Props> = ({ incomes, setIncome }) => {
  const removeIncome = (i: number) => {
    let temp = incomes.filter((v, index) => index !== i);
    setIncome(temp);
  };

  return (
    <div className="income-list">
      {incomes.map((inc: Income, key: number) => (
        <IncomeItem
          income={inc}
          index={key}
          key={key}
          removeIncome={removeIncome}
        />
      ))}
    </div>
  );
};

export default IncomeList;
