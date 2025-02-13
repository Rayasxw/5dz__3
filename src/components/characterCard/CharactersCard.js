import React, { useState } from 'react'
import styles from './CharacterCars.module.css'



function CharactersCard({item}) {
  const [isHovered, setIsHovered] = useState(false)

  

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <img src={item.image} alt={item.name}/>
          <h2>{item.name}</h2>
          <div className={styles.ageBlock}>{item.age}</div>
    
    </div>
   
  )
}

export default CharactersCard