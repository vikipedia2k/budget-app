import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { expenses, dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState(() => {
    return localStorage.getItem('budget') || 2000;
  });
  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleBudgetChange = (e) => {
    const newBudget = e.target.value;
    setBudget(newBudget);
    localStorage.setItem('budget', newBudget);
  };

  const handleSaveClick = () => {
    const budgetAsNumber = Number(budget);
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
    if (budgetAsNumber < totalExpenses) {
      alert(`Budget cannot be less than expenses! Current spending: £${totalExpenses}`);
      setBudget(localStorage.getItem('budget'));
    } else if (budgetAsNumber > 20000) {
      alert('Maximum budget is £20000!');
      setBudget(20000);
    } else {
      setEditable(false);
    }
  };

  const handleCancelClick = () => {
    setBudget(localStorage.getItem('budget'));
    setEditable(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex justify-content-between align-items-center">
      {editable ? (
        <>
          <input
            type="number"
            className="form-control mr-2"
            value={budget}
            onChange={handleBudgetChange}
          />
          <button className="btn btn-primary mr-2" onClick={handleSaveClick}>
            Save
          </button>
          <button className="btn btn-secondary" onClick={handleCancelClick}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>Budget: £{budget}</span>
          <button className="btn btn-primary" onClick={handleEditClick}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Budget;
