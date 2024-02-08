
import React, { useContext ,useState} from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget,expenses,dispatch, currency } = useContext(AppContext);
    
    // totalExpenses should be use reducer to deal with it
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const [newBudget,setnewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setnewBudget(event.target.value);
        if (newBudget>20000){
            alert("The upper budget value is 20,000, please set an appropriate budget value");
            return;
        } 
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending so far £"+totalExpenses);
            setnewBudget(totalExpenses);

        }
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
 

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;