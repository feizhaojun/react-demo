import { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  console.log('Counter');

  let handleClick = () => {
    console.log('handleClick');
    setCount(count+1)
  }

  return (
    <div onClick={handleClick}>{count}</div>
  );
}

export default Counter;