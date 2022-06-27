import React from 'react'

import styles from './inputs.module.css';


const Inputs = ({label,...props}) => {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default Inputs;