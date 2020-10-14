import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddition = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSubtraction = () => {
    setCount(prevCount => prevCount - 1);
  };

  const submit = (props) => {
    fetch('url',{
      method: 'post',
      body:JSON.stringify(
        props.state
      ),
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
      }
    }).then(function(response){
      response.json().then(function(resp){
        console.log(resp)
      })
    })
  }

  return (
    <div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
      </div>
      <form>
        <h4>The count is {count}</h4>
        <button onClick={submit(count)}>Send it!</button>
      </form>
    </div>
  )
}

export default Counter;