import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

export default function Sciences() {

  const { sciences, setSciences } = useContext(DataContext);

  const [untilFive, setUntilFive] = useState([]);
  const [untilEnd, setUntilEnd] = useState([]);

  const calc = () => {
    let array = new Object([]);
    for (let i = 1; i < 5; i++) {
      array[i] = sciences[i];
    }
    setUntilFive(array)
  }

  const calcEnd = () => {
    let arrayEnd = new Object([]);
    for (let i = 6; i < 24; i++) {
      arrayEnd[i] = sciences[i];
    }
    setUntilEnd(arrayEnd)
  }

  useEffect(() => {
    calc()
    calcEnd()
  }, [])

  return (
    <>
      <div className='border'></div>
      <h1 className='title-page'>SCIENCES</h1>
      <p className='text-under-title'>Information on the latest news of science, medicine and technology..</p>
      <div className='border'></div>

      <section className='menu grid'>
        <div>
          <div className='box-top'>
            <img src={sciences[0].imageUrl} />
            <h1>{sciences[0].title}</h1>
            <p>By {sciences[0].author}</p>
          </div>
        </div>

        <div className='boxes-right grid'>
          {
            untilFive.map((item) => <div className='box'>
              <img src={item.imageUrl} />
              <h4>{item.title}</h4>
              <p>By{item.author}</p>
            </div>)
          }
        </div>
      </section>
      <br></br>
      <br></br>
      <div className='border'></div>

      <section className='last-block'>
        {
          untilEnd.map((item) => <div className='block'>
            <img src={item.imageUrl} alt="" />
            <span className='mrg-ri'>
              <h2>{item.title}</h2>
              <h5>{item.content}</h5>
              <span className='fl'>
                <p>By {item.author}</p>
                <p className='date'>{item.date}</p>
              </span>
            </span>
          </div>)
        }
      </section>
    </>
  )
}

