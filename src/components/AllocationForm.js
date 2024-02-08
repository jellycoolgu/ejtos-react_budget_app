
import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    // need hook AppContext expenses to judge allocation budget when action is 'reduce'? can not applay state variable
    const { dispatch,remaining,expenses,currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = (props) => {
        const expense = {
            name: name,
            cost: parseInt(cost),
        };

        if(action === "Reduce") {
            if(cost > expenses) {
                alert("The reduce value cannot exceed the current allocation funds  £"+expenses);
                setCost("");
                return;
            }

            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
        }
    };

    return (
        <div>
            <div className='row'>

                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" id="Marketing" name="marketing"> Marketing</option>
                        <option value="Finance" id="Finance" name="finance">Finance</option>
                        <option value="Sales" id="Sales" name="sales">Sales</option>
                        <option value="Human Resource" id="Human Resource" name="hr">Human Resource</option>
                        <option value="IT" id="IT" name="it">IT</option>
 
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                       <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                       <label className="input-group-text" htmlFor="inputGroupSelect03">{currency}</label>
                    </div>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AllocationForm;