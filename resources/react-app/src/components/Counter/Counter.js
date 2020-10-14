import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSubtraction = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
      </div>
      <h4>The count is {count}</h4>
      <button>Send It!</button>
      <div></div>
    </div>
  )
}

export default Counter;