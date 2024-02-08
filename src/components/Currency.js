import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch} = useContext(AppContext);
     
    
    const changeCurrency = (event) => {
        const newCurrency=event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
     
    }

    const alertType = 'alert-dark';
    return (
        <div className={`alert ${alertType}`}>
                <select className="form-control" size="0" value={currency} onChange={changeCurrency}>
                    <option value="$" id="Dollar" name="dollar">$ Dollar</option>
                    <option value="£" id="Pound" name="pound"  selected>£ Pound</option>
                    <option value="€" id="Euro" name="euro">€ Euro</option>
                    <option value="₹" id="Ruppee" name="ruppee">₹ Ruppee</option>
                </select>
        </div>
    );
};
export default Currency;