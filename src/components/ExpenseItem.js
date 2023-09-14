import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { AppContext } from '../context/AppContext';
import { useCurrency } from '../context/currencycontext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { selectedCurrency } = useCurrency();

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const DecreaseAllocation = (name) => {
            const expense = {
                name: name,
                cost: 10,
            };
    
            dispatch({
                type: 'DECREASE_EXPENSE',
                payload: expense
            });
    }



    return (
        <tr>
        <td>{props.name}</td>
        <td>{selectedCurrency}{props.cost}</td>
        <td><TiArrowSortedUp onClick={event=> increaseAllocation(props.name)}></TiArrowSortedUp></td>
        <td><TiArrowSortedDown onClick={event=> DecreaseAllocation(props.name)}></TiArrowSortedDown></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;