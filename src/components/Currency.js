import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const selectCurrency = (event) => {
    const currency = event.target.value;
    dispatch({
      type: 'CHANGE_CURRENCY',
      payload: currency,
    });
  };

  return (
    <div className='row'>
      <div className='col-sm-12'>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='currency'>
              Currency
            </label>
          </div>
          <select className='custom-select select-style' id='currency' onChange={selectCurrency}>
          <option defaultValue>$ Dollar</option>
          <option>£ Pound</option>
          <option>€ Euro</option>
          <option>₹ Rupee</option>
        </select>        
        </div>
      </div>
    </div>
  );
};

export default Currency;
