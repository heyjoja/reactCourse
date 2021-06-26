import React from 'react';

const Button = props => {
  const { text } = props;
  return (
     <div>
       <button>{ props.text }</button>
       <button>{ text }</button>
     </div>
  )
};

export default Button;
