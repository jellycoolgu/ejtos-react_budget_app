
import React, { useContext } from 'react';
//import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import logoPlug from '../plus-4-256.ico';
import logoMinus from '../minus.jpg';
import logoXmark from '../x-mark-3-xxl.png';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><img src={logoPlug} alt='+' style={{ width: "30px", height: "30px" }} onClick={event=> increaseAllocation(props.name)} /></td>
        <td><img src={logoMinus} alt='-' style={{ width: "30px", height: "30px" }} onClick={event=> decreaseAllocation(props.name)} /></td>
        <td><img src={logoXmark} alt='X' style={{ width: "30px", height: "30px" }} onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;