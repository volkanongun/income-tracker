import React from 'react';
import Income from '../types';

interface Props {
  income: Income;
  index: number;
  key?: number;
  removeIncome: (i: number) => void;
}

const IncomeItem: React.FC<Props> = ({ income, index, removeIncome }) => {
  const date = new Date(income.date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const handleClick = (i: number) => {
    removeIncome(i);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => handleClick(index)}>
        X
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price">${income.price}</div>
      <div className="date">{day + '-' + month + '-' + year}</div>
    </div>
  );
};

export default IncomeItem;
