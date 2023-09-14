import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useCurrency } from '../context/currencycontext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const { selectedCurrency } = useCurrency();
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {selectedCurrency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;

