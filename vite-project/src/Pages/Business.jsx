import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

export default function Business() {

  const { business } = useContext(DataContext);

  const { newuse, setNewUse } = useState([]);

  const calc = () => {
    let array = new Object([]);
    for (let i = 1; i < 5; i++) {
      array[i] = business[i];
    }
    setUntilFive(array)
  }

  const calcEnd = () => {
    let arrayEnd = new Object([]);
    for (let i = 6; i < 24; i++) {
      arrayEnd[i] = business[i];
    }
    setUntilEnd(arrayEnd)
  }


  return (
    <>
      {business[0].imageUrl}
    </>
  )
}

