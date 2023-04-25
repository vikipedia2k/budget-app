import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import './ExpenseItem.css';
import Positive from './Positive';
import Negative from './Negative';


const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

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
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button className="increase-button" onClick={() => increaseAllocation(props.name)}>
        <Positive style={{ width: "20px", height: "20px" }} />
        </button>
      </td>
      <td>
        <button className="decrease-button" onClick={() => decreaseAllocation(props.name)}>
          <Negative size="1.5em" className="svg-icon" />
        </button>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
