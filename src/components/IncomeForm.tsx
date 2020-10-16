import React, { useRef } from 'react';
import Income from '../types';

interface Props {
  income: Income[];
  setIncome: any;
}

const IncomeForm: React.FC<Props> = ({income, setIncome}) => {

  const desc = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const AddIncome = (e: React.SyntheticEvent) => {
    e.preventDefault();

    let d: string[] | undefined = date?.current?.value.split("-");
    let newD: Date = new Date(Number(d?.[0]), Number(d?.[1]), Number(d?.[2]));
    console.log(desc.current?.value, price.current?.value, d, newD);

    setIncome([...income, {
      "desc" : desc.current?.value,
      "price" : price.current?.value,
      "date" : newD.getTime()
    }]);

    if(desc.current && price.current && date.current){
      desc.current.value = "";
      price.current.value = "";
      date.current.value = "";
    }
      
  }

  return <form className="income-form" onSubmit={AddIncome}>
    <div className="form-inner">
      <input type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc}/>
      <input type="number" name="price" id="price" placeholder="Price..." ref={price}/>
      <input type="date" name="date" id="date" placeholder="Income Date..." ref={date}/>
      <input type="submit" value="Send"/>

    </div>
  </form>;
}

export default IncomeForm;