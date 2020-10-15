import { forEach } from 'lodash';
import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSubtraction = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleSubmit = (props) => {
    fetch('http://localhost:8000/api', {
      method: "POST",
      body: JSON.stringify(props.state),
      headers: {
        'Accept': 'application/php',
        'Content-Type': 'application/php'
      },
      }).then(
      (response) => (response.json())
      ).then((response)=> {
          forEach (response)
          return response.map
    })
  }

  return (
    <div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
      </div>
        <h4>The count is {count}</h4>
        <button onClick={handleSubmit(count)}>Send it!</button>
    </div>
  )
}

export default Counter;