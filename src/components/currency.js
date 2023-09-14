import React from 'react';
import { useCurrency } from '../context/currencycontext';

const CurrencySelector = () => {
  const { selectedCurrency, changeCurrency } = useCurrency();
  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    changeCurrency(newCurrency);
  };
const sas={
    'background-color': 'linen'
};
  return (
    <div class="alert alert-success">
      <label>Select Currency:</label>
      <select value={selectedCurrency} onChange={handleCurrencyChange} style={sas}>
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
