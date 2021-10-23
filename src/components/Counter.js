import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
    // dispatch({ type: 'INCREMENT' });
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(5));
    // dispatch({ type: 'INCREASE', amount: 5 });
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
    // dispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    // dispatch({ type: 'TOGGLE' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
