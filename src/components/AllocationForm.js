import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
  const { dispatch, remaining } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const submitEvent = () => {
    // Check if name and cost are not empty
    if (!name.trim()) {
      alert('Please select a department');
      return;
    }

    if (!cost.trim()) {
      alert('Please enter an allocation amount');
      return;
    }

    // Check if cost is a number
    if (isNaN(cost)) {
      alert('Allocation amount must be a number');
      setCost('');
      return;
    }

    if (cost > remaining) {
      alert(`The allocation amount cannot exceed remaining funds £${remaining}`);
      setCost('');
      return;
    }
    if (!/^\d+$/.test(cost)) {
        alert('Please enter a valid cost.');
        return;
      }
      const expenseCost = parseInt(cost);
      if (expenseCost <= 0) {
        alert('Please enter a cost greater than zero.');
        return;
      }
    
      // Check if cost exceeds remaining funds
      if (expenseCost > remaining) {
        alert(`The value cannot exceed remaining funds £${remaining}.`);
        return;
      }
    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }

    // Clear the form fields after submitting
    setName('');
    setCost('');
    setAction('Add');
  };

  return (
    <div>
      <div className='row'>
        <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
          <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect01'>
              Department
            </label>
          </div>
          <select
            className='custom-select'
            id='inputGroupSelect01'
            value={name}
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value='Marketing'>Marketing</option>
            <option value='Sales'>Sales</option>
            <option value='Finance'>Finance</option>
            <option value='HR'>HR</option>
            <option value='IT'>IT</option>
            <option value='Admin'>Admin</option>
          </select>

          <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
            <label className='input-group-text' htmlFor='inputGroupSelect02'>
              Allocation
            </label>
          </div>
          <select
            className='custom-select'
            id='inputGroupSelect02'
            value={action}
            onChange={(event) => setAction(event.target.value)}
          >
            <option value='Add'>Add</option>
            <option value='Reduce'>Reduce</option>
          </select>

          <div className='input-group-prepend' style={{ marginLeft: '2rem' }}>
  
</div>
<div className='input-group-prepend' style={{ marginLeft: '1rem' }}>
  <span className='input-group-text'>£</span>
</div>
<input
  required='required'
  type='number'
  id='cost'
  value={cost}
  style={{ marginLeft: '1rem', width: '10rem' }}
  onChange={(event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || parseInt(inputValue) >= 0) {
      setCost(inputValue);
    }
  }}
/>

      

          <button className='btn btn-primary' onClick={submitEvent} style={{ marginLeft: '2rem' }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
