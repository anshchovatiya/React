import React from 'react'
import styles from './css/SectionHead.module.css'

const SectionHead = ({tittle,description}) => {
  return (
    <div className={styles.headText}>
        <h2>{tittle}</h2>
        <p>{description}</p>
    </div>
  )
}

export default SectionHead;
