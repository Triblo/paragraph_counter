import React from 'react';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
  <Aux>
    <div>
      <h2>Paragraph Counter</h2>
    <main>
      {props.children}
    </main>
    </div>
  </Aux>
);

export default layout;