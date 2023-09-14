import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from '../context/currencycontext';

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const { selectedCurrency } = useCurrency();

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  }

  if (newBudget >= 2000000 || newBudget < 900) {
    alert("This is not a good budget");
  }

  return (
    <div className='alert alert-secondary'>
      <span>Budget:</span>
      <div style={{ border: '1px solid black', display: 'inline-block' }}>
        <span style={{ padding: '2px' }}>{selectedCurrency}</span> {/* Access the selectedCurrency prop */}
        <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
      </div>
    </div>
  );
}

export default Budget;
